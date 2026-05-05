"use client";

import { useState } from "react";
import type { LeadPayload } from "@/app/api-leads-types";

const defaultForm: LeadPayload = {
  name: "",
  email: "",
  phone: "",
  city: "",
  trade_interest: "",
  funding_interest: "Not sure",
  employment_status: "Employed",
  consent: false,
};

export default function ApplyPage() {
  const [form, setForm] = useState<LeadPayload>(defaultForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to submit application.");
      }

      setSuccess(true);
      setForm(defaultForm);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="font-serifDisplay text-4xl font-semibold">Apply for Programs</h1>
      <p className="mt-2 text-sm text-black/70">Tell us about your goals and we&apos;ll match you with training options.</p>

      <form className="mt-6 space-y-4 rounded-xl border border-black/10 bg-white p-6" onSubmit={handleSubmit}>
        <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Full name" required value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
        <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Email" type="email" required value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} />
        <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Phone" required value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} />
        <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="City" required value={form.city} onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))} />
        <input className="w-full rounded-lg border border-black/15 px-4 py-3" placeholder="Trade interest" required value={form.trade_interest} onChange={(event) => setForm((current) => ({ ...current, trade_interest: event.target.value }))} />

        <select className="w-full rounded-lg border border-black/15 px-4 py-3" value={form.funding_interest} onChange={(event) => setForm((current) => ({ ...current, funding_interest: event.target.value as LeadPayload["funding_interest"] }))}>
          <option>Yes</option>
          <option>No</option>
          <option>Not sure</option>
        </select>

        <select className="w-full rounded-lg border border-black/15 px-4 py-3" value={form.employment_status} onChange={(event) => setForm((current) => ({ ...current, employment_status: event.target.value as LeadPayload["employment_status"] }))}>
          <option>Employed</option>
          <option>Unemployed</option>
          <option>Student</option>
        </select>

        <label className="flex items-start gap-2 text-xs text-black/70">
          <input checked={form.consent} onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))} required type="checkbox" />
          I agree to be contacted by Switch Magazine and selected education partners.
        </label>

        <button className="rounded-lg bg-ink px-4 py-2 text-white disabled:opacity-50" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>

        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        {success ? <p className="text-sm text-emerald-700">Thanks! Your application was submitted successfully.</p> : null}
      </form>
    </main>
  );
}
