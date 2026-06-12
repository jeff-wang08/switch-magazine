import { NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { requiredLeadFields, type LeadPayload } from "@/app/api-leads-types";
import { api } from "../../../../convex/_generated/api";

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

    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

    if (!convexUrl) {
      return NextResponse.json(
        {
          error: "Convex is not configured. Add NEXT_PUBLIC_CONVEX_URL.",
        },
        { status: 500 },
      );
    }

    const client = new ConvexHttpClient(convexUrl);
    const leadId = await client.mutation(api.leads.create, body as LeadPayload);

    return NextResponse.json({ ok: true, leadId });
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
