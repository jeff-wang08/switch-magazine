import Link from "next/link";
import { SectionCard } from "@/components/section-card";

const fundingRoutes = [
  "Workforce training programs may depend on location, eligibility, and provider approval",
  "Employer-sponsored training can matter when a company wants to hire or upskill",
  "Provider payment options may include school-level plans, scholarships, or discounts",
  "Direct-pay programs can be faster when outside funding is not available",
];

const applicantQuestions = [
  "Where are you located in California?",
  "Are you employed, unemployed, self-employed, or studying?",
  "How quickly do you want to start?",
  "Are you open to direct-pay options if funding is not available?",
];

const boundaries = [
  "Switch Magazine is not a school, lender, or government agency",
  "We do not guarantee funding, admission, completion, employment, or certification",
  "Independent providers set their own costs, requirements, and program terms",
];

const notes = ["Ask early", "Match first", "Verify provider terms", "No guarantees"];

export default function FundingPage() {
  return (
    <main className="space-y-12">
      <section className="border-b border-black/15 bg-[#fffdfa]">
        <div className="border-b border-black/15 px-6 py-3">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/60">
            <span>Funding Notes</span>
            <span>Eligibility varies</span>
            <span>Provider terms apply</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-mutedBlue">Funding-aware matching</p>
            <h1 className="font-serifDisplay text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              Ask the money question before you pick a program.
            </h1>
            <p className="mt-6 max-w-2xl border-l-4 border-mutedRed pl-5 text-base leading-8 text-black/70">
              Program cost matters. We collect funding needs early so applicants can be routed toward providers and formats that are worth discussing before anyone wastes a week chasing the wrong option.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-[0_16px_30px_rgba(18,18,18,0.18)] transition hover:-translate-y-0.5 hover:bg-mutedRed" href="/apply">
                Check Fit
              </Link>
              <Link className="rounded-full border border-black/25 bg-white/70 px-6 py-3 text-sm font-bold transition hover:border-black hover:bg-[#f0d25b]" href="/programs">
                Compare Tracks
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-8 hidden h-[82%] w-8 bg-[#f0d25b] lg:block" />
            <div className="relative border border-black bg-[#111] p-5 text-white shadow-[-18px_18px_0_#3f5f8b]">
              <div className="flex items-start justify-between gap-5 border-b border-white/25 pb-4">
                <p className="font-serifDisplay text-5xl font-black leading-none">04</p>
                <p className="max-w-36 text-right text-xs font-bold uppercase tracking-[0.18em] text-white/70">Funding file</p>
              </div>
              <div className="mt-5 grid gap-0 text-sm">
                {fundingRoutes.map((route) => (
                  <p key={route} className="border-b border-white/20 py-4 font-semibold leading-6 last:border-0">
                    {route}
                  </p>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2 text-xs uppercase tracking-[0.12em] text-white/65">
                {notes.map((note) => (
                  <span key={note} className="border border-white/20 px-3 py-2">
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-3 border-y border-black/15 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/65 sm:grid-cols-3">
          <p>Eligibility varies</p>
          <p className="sm:text-center">Ask before applying</p>
          <p className="sm:text-right">Independent provider terms</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        <SectionCard title="Possible Routes" items={fundingRoutes} />
        <SectionCard title="What We Ask" items={applicantQuestions} />
        <SectionCard title="Boundaries" items={boundaries} />
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#f0d25b]">Plain English</p>
            <h2 className="font-serifDisplay text-4xl font-black leading-none">Funding-aware does not mean funding-guaranteed.</h2>
          </div>
          <p className="text-sm leading-7 text-white/75">
            The useful MVP is simpler: capture the applicant's situation, route them to providers that can discuss realistic options, and avoid pretending every student qualifies for the same path.
          </p>
        </div>
      </section>
    </main>
  );
}
