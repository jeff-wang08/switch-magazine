import Link from "next/link";

const programs = [
  {
    title: "IT Support",
    tag: "Online-friendly",
    summary: "Help desk, device setup, basic networking, troubleshooting, and support workflows for entry-level technical roles.",
  },
  {
    title: "Cybersecurity Fundamentals",
    tag: "Online-friendly",
    summary: "Security operations basics, risk concepts, networks, identity, monitoring, and the language of modern security teams.",
  },
  {
    title: "Data Analytics",
    tag: "Online-friendly",
    summary: "Spreadsheets, dashboards, SQL foundations, reporting, and turning messy business questions into readable insights.",
  },
  {
    title: "Bookkeeping and Payroll",
    tag: "Online-friendly",
    summary: "Business records, payroll workflows, accounting software, invoices, reconciliations, and back-office operating habits.",
  },
  {
    title: "Project Management",
    tag: "Online-friendly",
    summary: "Planning, coordination, documentation, Agile and Scrum basics, stakeholder communication, and delivery discipline.",
  },
  {
    title: "Digital Marketing",
    tag: "Online-friendly",
    summary: "Campaign planning, content operations, analytics, search, paid media basics, email, and social marketing workflows.",
  },
  {
    title: "Tech Sales",
    tag: "Online-friendly",
    summary: "SaaS sales language, discovery, pipeline habits, demos, CRM hygiene, follow-up, and customer conversation practice.",
  },
];

const filters = ["No degree-first filter", "Practical tracks", "Provider-matched", "California issue"];

export default function ProgramsPage() {
  return (
    <main className="space-y-12">
      <section className="border-b border-black/15 bg-[#fffdfa]">
        <div className="border-b border-black/15 px-6 py-3">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/60">
            <span>Program Index</span>
            <span>Remote-first categories</span>
            <span>California applicants</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-mutedBlue">Practical training tracks</p>
            <h1 className="font-serifDisplay text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              Compare career tracks built for real-world work.
            </h1>
            <p className="mt-6 max-w-2xl border-l-4 border-mutedRed pl-5 text-base leading-8 text-black/70">
              We focus on online-friendly and low-compliance categories first: technical support, business operations, analytics, marketing, project coordination, and sales.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-white shadow-[0_16px_30px_rgba(18,18,18,0.18)] transition hover:-translate-y-0.5 hover:bg-mutedRed" href="/apply">
                Get Matched
              </Link>
              <Link className="rounded-full border border-black/25 bg-white/70 px-6 py-3 text-sm font-bold transition hover:border-black hover:bg-[#f0d25b]" href="/funding">
                Review Funding
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-[82%] w-8 bg-mutedBlue lg:block" />
            <div className="relative border border-black bg-[#111] p-5 text-white shadow-[18px_18px_0_#f0d25b]">
              <div className="flex items-start justify-between gap-5 border-b border-white/25 pb-4">
                <p className="font-serifDisplay text-5xl font-black leading-none">03</p>
                <p className="max-w-36 text-right text-xs font-bold uppercase tracking-[0.18em] text-white/70">Track file</p>
              </div>
              <ul className="mt-5 grid gap-0 text-sm">
                {programs.slice(0, 5).map((program) => (
                  <li key={program.title} className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/20 py-4 last:border-0">
                    <span className="font-semibold">{program.title}</span>
                    <span className="text-xs uppercase tracking-[0.14em] text-[#f0d25b]">Online</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-2 text-xs uppercase tracking-[0.12em] text-white/65">
                {filters.map((filter) => (
                  <span key={filter} className="border border-white/20 px-3 py-2">
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-3 border-y border-black/15 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/65 sm:grid-cols-3">
          <p>Online-friendly first</p>
          <p className="sm:text-center">Career switcher readable</p>
          <p className="sm:text-right">Provider terms vary</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2">
        {programs.map((program, index) => (
          <article key={program.title} className="group rounded-sm border border-black/15 bg-[#fffdfa] p-6 shadow-[0_18px_50px_rgba(18,18,18,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(18,18,18,0.1)]">
            <div className="mb-5 flex items-start justify-between gap-4 border-b border-black/10 pb-4">
              <p className="font-serifDisplay text-3xl font-black leading-none text-mutedBlue">{String(index + 1).padStart(2, "0")}</p>
              <p className="text-right text-xs font-bold uppercase tracking-[0.16em] text-mutedRed">{program.tag}</p>
            </div>
            <h2 className="font-serifDisplay text-3xl font-black leading-none">{program.title}</h2>
            <p className="mt-4 text-sm leading-7 text-black/70">{program.summary}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 rounded-sm border border-black/15 bg-[#fffdfa] p-6 shadow-[0_22px_70px_rgba(18,18,18,0.08)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-mutedRed">Start here</p>
            <h2 className="font-serifDisplay text-4xl font-black leading-none">Not sure which track fits?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-black/70">
              Send your goals, preferred format, timeline, and funding needs. We use that context before introducing you to selected education partners.
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
