import Link from "next/link";
import { SectionCard } from "@/components/section-card";

const partnerSignals = [
  "Approved or approval-aware career programs",
  "Online or hybrid delivery for California adults",
  "Admissions team ready to qualify prospects",
  "Interest in a small prepaid pilot before larger commitments",
];

const pilotSteps = [
  "Define what a qualified applicant means for your admissions team",
  "Review a small sample profile or fit conversation",
  "Use a prepaid pilot credit/package for qualified lead delivery",
];

const bestFits = [
  "IT support and computer technician programs",
  "Cybersecurity, data, and software fundamentals",
  "Bookkeeping, payroll, and business operations",
  "Project management, digital marketing, and tech sales",
];

const firstPassExclusions = [
  "Clinical healthcare programs with heavy licensing complexity",
  "Beauty, barbering, and cosmetology programs",
  "CDL, trucking, and facility-heavy trades",
  "Programs that need guaranteed enrollment volume on day one",
];

const deskItems = ["Qualified applicant routing", "California adult learners", "Prepaid pilot package", "No school ownership"];

export default function ProvidersPage() {
  return (
    <main className="space-y-12">
      <section className="border-b border-black/15 bg-[#fffdfa]">
        <div className="border-b border-black/15 px-6 py-3">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/60">
            <span>Provider Desk</span>
            <span>California / Practical Training</span>
            <span>Pilot partners</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-mutedBlue">For training providers</p>
            <h1 className="font-serifDisplay text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              Add qualified applicant flow without building a new funnel.
            </h1>
            <p className="mt-6 max-w-2xl border-l-4 border-mutedRed pl-5 text-base leading-8 text-black/70">
              Switch Magazine is assembling a small California partner network for independent education providers that want career-minded adult applicants in practical, job-aligned programs, starting with focused prepaid pilots.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-[0_16px_30px_rgba(18,18,18,0.18)] transition hover:-translate-y-0.5 hover:bg-mutedRed" href="mailto:partners@switchmagazine.com?subject=Switch%20Magazine%20provider%20pilot">
                Discuss Pilot
              </a>
              <Link className="rounded-full border border-black/25 bg-white/70 px-6 py-3 text-sm font-bold transition hover:border-black hover:bg-[#f0d25b]" href="/programs">
                View Program Focus
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-8 hidden h-[82%] w-8 bg-[#f0d25b] lg:block" />
            <div className="relative border border-black bg-[#111] p-5 text-white shadow-[-18px_18px_0_#3f5f8b]">
              <div className="flex items-start justify-between gap-5 border-b border-white/25 pb-4">
                <p className="font-serifDisplay text-5xl font-black leading-none">02</p>
                <p className="max-w-40 text-right text-xs font-bold uppercase tracking-[0.18em] text-white/70">Partner filter</p>
              </div>
              <div className="mt-5 grid gap-0 text-sm">
                {partnerSignals.map((signal) => (
                  <p key={signal} className="border-b border-white/20 py-4 font-semibold last:border-0">
                    {signal}
                  </p>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2 text-xs uppercase tracking-[0.12em] text-white/65">
                {deskItems.map((item) => (
                  <span key={item} className="border border-white/20 px-3 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-3 border-y border-black/15 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/65 sm:grid-cols-3">
          <p>Admissions-ready leads</p>
          <p className="sm:text-center">Low-friction pilot</p>
          <p className="sm:text-right">Clear category focus</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        <SectionCard title="Pilot Shape" items={pilotSteps} />
        <SectionCard title="Best Fit" items={bestFits} />
        <SectionCard title="Not First" items={firstPassExclusions} />
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#f0d25b]">Commercial note</p>
            <h2 className="font-serifDisplay text-4xl font-black leading-none">Start with fit, then package the pilot.</h2>
          </div>
          <p className="text-sm leading-7 text-white/75">
            The first goal is to define qualified applicant criteria and prove fit before larger commitments. Admissions decisions, program requirements, pricing, funding conversations, completion, certification, and employment outcomes remain with each education partner.
          </p>
        </div>
      </section>
    </main>
  );
}
