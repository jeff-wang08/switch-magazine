import { NextResponse } from "next/server";
import { requiredLeadFields, type LeadPayload } from "@/app/api-leads-types";

function validateLeadPayload(body: Partial<LeadPayload>) {
  const missing = requiredLeadFields.filter((field) => {
    const value = body[field];
    return typeof value === "undefined" || value === "" || value === false;
  });

  if (missing.length > 0) {
    return `Missing required fields: ${missing.join(", ")}`;
  }

  if (!body.email?.includes("@")) {
    return "Invalid email format.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>;
    const validationError = validateLeadPayload(body);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        {
          error: "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
        },
        { status: 500 },
      );
    }

    const payload = {
      ...body,
      consent_timestamp: new Date().toISOString(),
      source: "switch-magazine-apply",
    };

    const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: `Supabase insert failed: ${text}` },
        { status: 502 },
      );
    }

    const inserted = await response.json();

    return NextResponse.json({ ok: true, lead: inserted?.[0] ?? null });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown server error while creating lead.",
      },
      { status: 500 },
    );
  }
}
