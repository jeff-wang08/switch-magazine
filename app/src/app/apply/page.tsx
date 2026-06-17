"use client";

import { useState } from "react";
import type { LeadPayload } from "@/app/api-leads-types";

const defaultForm: LeadPayload = {
  name: "",
  email: "",
  phone: "",
  city: "",
  program_interest: "",
  format_preference: "Online",
  funding_interest: "Not sure",
  employment_status: "Employed",
  education_level: "High school/GED",
  start_timeline: "1-3 months",
  consent: false,
};

const programOptions: LeadPayload["program_interest"][] = [
  "IT support",
  "Cybersecurity fundamentals",
  "Data analytics",
  "Bookkeeping/payroll",
  "Project management",
  "Digital marketing",
  "Tech sales",
  "Not sure yet",
];

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
    <main className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[0.82fr_1.18fr]">
      <section className="lg:pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-mutedBlue">Two-minute matching form</p>
        <h1 className="mt-3 font-serifDisplay text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl">Get matched with career training options.</h1>
        <p className="mt-5 border-l-4 border-mutedRed pl-5 text-sm leading-7 text-black/70">
          Share a few details so we can understand your fit before introducing you to selected independent education partners.
        </p>
        <div className="mt-7 border border-black/15 bg-[#fffdfa] p-5 text-sm leading-6 text-black/70 shadow-[12px_12px_0_#f0d25b]">
          <p className="font-serifDisplay text-2xl font-black leading-none text-black">Good to know</p>
          <p className="mt-2">
            Switch Magazine is not a school. We do not guarantee admission, funding, employment, or certification. Partner programs set their own requirements and costs.
          </p>
        </div>
      </section>

      <form className="space-y-5 rounded-sm border border-black/15 bg-[#fffdfa] p-6 shadow-[0_22px_70px_rgba(18,18,18,0.08)]" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between gap-4 border-b border-black/15 pb-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mutedRed">Applicant file</p>
          <p className="font-serifDisplay text-3xl font-black leading-none">01</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="w-full rounded-sm border border-black/20 px-4 py-3" placeholder="Full name" required value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} />
          <input className="w-full rounded-sm border border-black/20 px-4 py-3" placeholder="Email" type="email" required value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} />
          <input className="w-full rounded-sm border border-black/20 px-4 py-3" placeholder="Phone" required value={form.phone} onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))} />
          <input className="w-full rounded-sm border border-black/20 px-4 py-3" placeholder="City in California" required value={form.city} onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))} />
        </div>

        <label className="block text-sm font-semibold text-black/75">
          Program interest
          <select className="mt-2 w-full rounded-sm border border-black/20 px-4 py-3 font-normal" value={form.program_interest} onChange={(event) => setForm((current) => ({ ...current, program_interest: event.target.value }))}>
            <option value="">Select a track</option>
            {programOptions.map((program) => (
              <option key={program}>{program}</option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-black/75">
            Preferred format
            <select className="mt-2 w-full rounded-sm border border-black/20 px-4 py-3 font-normal" value={form.format_preference} onChange={(event) => setForm((current) => ({ ...current, format_preference: event.target.value as LeadPayload["format_preference"] }))}>
              <option>Online</option>
              <option>Hybrid</option>
              <option>In person</option>
              <option>No preference</option>
            </select>
          </label>

          <label className="block text-sm font-semibold text-black/75">
            Need funding options?
            <select className="mt-2 w-full rounded-sm border border-black/20 px-4 py-3 font-normal" value={form.funding_interest} onChange={(event) => setForm((current) => ({ ...current, funding_interest: event.target.value as LeadPayload["funding_interest"] }))}>
              <option>Yes</option>
              <option>No</option>
              <option>Not sure</option>
            </select>
          </label>

          <label className="block text-sm font-semibold text-black/75">
            Employment status
            <select className="mt-2 w-full rounded-sm border border-black/20 px-4 py-3 font-normal" value={form.employment_status} onChange={(event) => setForm((current) => ({ ...current, employment_status: event.target.value as LeadPayload["employment_status"] }))}>
              <option>Employed</option>
              <option>Unemployed</option>
              <option>Student</option>
              <option>Self-employed</option>
            </select>
          </label>

          <label className="block text-sm font-semibold text-black/75">
            Education level
            <select className="mt-2 w-full rounded-sm border border-black/20 px-4 py-3 font-normal" value={form.education_level} onChange={(event) => setForm((current) => ({ ...current, education_level: event.target.value as LeadPayload["education_level"] }))}>
              <option>High school/GED</option>
              <option>Some college</option>
              <option>College degree</option>
              <option>Other</option>
            </select>
          </label>

          <label className="block text-sm font-semibold text-black/75 sm:col-span-2">
            When do you want to start?
            <select className="mt-2 w-full rounded-sm border border-black/20 px-4 py-3 font-normal" value={form.start_timeline} onChange={(event) => setForm((current) => ({ ...current, start_timeline: event.target.value as LeadPayload["start_timeline"] }))}>
              <option>Immediately</option>
              <option>1-3 months</option>
              <option>3+ months</option>
              <option>Just researching</option>
            </select>
          </label>
        </div>

        <label className="flex items-start gap-2 text-xs text-black/70">
          <input checked={form.consent} onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))} required type="checkbox" />
          I agree to be contacted by Switch Magazine and selected independent education partners about training options.
        </label>

        <button className="w-full rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(18,18,18,0.16)] transition hover:-translate-y-0.5 hover:bg-mutedRed disabled:opacity-50 sm:w-auto" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting..." : "Request Program Match"}
        </button>

        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        {success ? <p className="text-sm text-emerald-700">Thanks. Your match request was submitted successfully.</p> : null}
      </form>
    </main>
  );
}
