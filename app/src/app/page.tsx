import Link from "next/link";
import { SectionCard } from "@/components/section-card";

const programTracks = [
  "IT support",
  "Cybersecurity fundamentals",
  "Data analytics",
  "Bookkeeping and payroll",
  "Project management",
  "Digital marketing",
  "Tech sales",
];

const fitSignals = [
  "Online and hybrid options",
  "California-focused programs",
  "Adult career switchers",
  "Funding-aware school partners",
];

const issueNotes = ["No degree-first filter", "Practical tracks", "Provider-matched", "California issue"];

export default function Home() {
  return (
    <main className="space-y-12">
      <section className="border-b border-black/15 bg-[#fffdfa]">
        <div className="border-b border-black/15 px-6 py-3">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/60">
            <span>Issue 01 / Career Mobility</span>
            <span>California / Online-Friendly Training</span>
            <span>Updated weekly</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-mutedBlue">California career training match</p>
            <h1 className="max-w-4xl font-serifDisplay text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              Find a practical training program without guessing where to start.
            </h1>
            <p className="mt-6 max-w-2xl border-l-4 border-mutedRed pl-5 text-base leading-8 text-black/70">
              Switch Magazine helps career switchers get matched with independent training providers in California. Tell us your goals, preferred format, and funding needs, then we route qualified applicants to programs that fit.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-[0_16px_30px_rgba(18,18,18,0.18)] transition hover:-translate-y-0.5 hover:bg-mutedRed" href="/apply">
                Get Matched
              </Link>
              <a className="rounded-full border border-black/25 bg-white/70 px-6 py-3 text-sm font-bold transition hover:border-black hover:bg-[#f0d25b]" href="mailto:partners@switchmagazine.com">
                Partner With Us
              </a>
            </div>
            <p className="mt-5 max-w-2xl text-xs leading-5 text-black/55">
              Switch Magazine is not a school and does not award certificates. Program availability, admissions decisions, pricing, and funding options are handled by independent education partners.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-[82%] w-8 bg-mutedBlue lg:block" />
            <div className="relative border border-black bg-[#111] p-5 text-white shadow-[18px_18px_0_#f0d25b]">
              <div className="flex items-start justify-between gap-5 border-b border-white/25 pb-4">
                <p className="font-serifDisplay text-5xl font-black leading-none">01</p>
                <p className="max-w-36 text-right text-xs font-bold uppercase tracking-[0.18em] text-white/70">Best-fit tracks</p>
              </div>
              <ul className="mt-5 grid gap-0 text-sm">
                {programTracks.slice(0, 5).map((track) => (
                  <li key={track} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/20 py-4 last:border-0">
                    <span className="font-semibold">{track}</span>
                    <span className="text-xs uppercase tracking-[0.14em] text-[#f0d25b]">Online</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-2 text-xs uppercase tracking-[0.12em] text-white/65">
                {issueNotes.map((note) => (
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
          <p>Applicant-first matching</p>
          <p className="sm:text-center">Independent school partners</p>
          <p className="sm:text-right">Funding-aware routing</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        <SectionCard
          title="How It Works"
          items={[
            "Share your career goals",
            "Tell us your location and format needs",
            "Get routed to relevant partner programs",
          ]}
        />
        <SectionCard title="Program Areas" items={programTracks} />
        <SectionCard title="What We Prioritize" items={fitSignals} />
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#f0d25b]">Provider desk</p>
            <h2 className="font-serifDisplay text-4xl font-black leading-none">For training providers</h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              We are building a small California partner network for providers that want qualified adult applicants in practical, job-aligned programs.
            </p>
          </div>
          <div className="grid gap-0 border-y border-white/20 text-sm font-semibold text-white/80">
            {["Qualified applicant routing", "Employer-aligned demand signals", "Performance-first partnership conversations"].map((item) => (
              <p key={item} className="border-b border-white/20 py-4 last:border-0">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 rounded-sm border border-black/15 bg-[#fffdfa] p-6 shadow-[0_22px_70px_rgba(18,18,18,0.08)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-mutedRed">Start here</p>
            <h2 className="font-serifDisplay text-4xl font-black leading-none">Ready to compare options?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-black/70">
              The application takes about two minutes. We use it to understand your fit before introducing you to selected education partners.
            </p>
          </div>
          <Link className="inline-block rounded-full bg-mutedBlue px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-ink" href="/apply">
            Start Matching Form
          </Link>
        </div>
      </section>
    </main>
  );
}
