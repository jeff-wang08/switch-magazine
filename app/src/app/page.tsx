import Link from "next/link";
import { SectionCard } from "@/components/section-card";

const trades = ["HVAC", "Electrical", "Plumbing", "Medical Assistant", "Bookkeeping", "Tech Sales", "IT Support"];
const cities = ["Los Angeles", "San Francisco", "Dallas", "Houston"];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-6 py-8">
      <section className="rounded-xl border border-black/10 bg-white p-8">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-mutedBlue">Modern training marketplace</p>
        <h1 className="font-serifDisplay text-4xl font-semibold leading-tight">Switch careers. Find training. Get hired.</h1>
        <p className="mt-3 max-w-3xl text-black/70">Search programs by city and career path, compare funding options, and connect with employers hiring entry-level talent.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <input className="rounded-lg border border-black/15 px-4 py-3" placeholder="Search by career" />
          <input className="rounded-lg border border-black/15 px-4 py-3" placeholder="Search by city" />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="rounded-lg bg-ink px-4 py-2 text-white">Find Programs</button>
          <button className="rounded-lg border border-black/20 px-4 py-2">I&apos;m Hiring</button>
          <button className="rounded-lg border border-black/20 px-4 py-2">Partner With Us</button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <SectionCard
          title="Today&apos;s Opportunities"
          items={[
            "Program • Dallas • $48k–$62k • 12 weeks",
            "Program • Houston • $52k–$71k • 16 weeks",
            "Program • Los Angeles • Funding available",
          ]}
        />
        <SectionCard title="Browse by Trade" items={trades} />
        <SectionCard title="Browse by City" items={cities} />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <SectionCard title="For Career Switchers" items={["Find funded programs", "Compare durations", "Apply quickly"]} />
        <SectionCard title="For Employers" items={["Post entry-level roles", "Access candidate flow", "Build hiring pipelines"]} />
        <SectionCard title="For Schools" items={["Generate qualified leads", "Promote accredited programs", "Add employer partners"]} />
      </section>

      <section className="rounded-xl border border-black/10 bg-white p-6">
        <h2 className="font-serifDisplay text-2xl font-semibold">Editorial / Guides</h2>
        <ul className="mt-3 space-y-2 text-sm text-black/80">
          <li>How to switch careers in under 12 months</li>
          <li>Best jobs without a degree</li>
          <li>How funding works for training programs</li>
          <li>Apprenticeships vs certificates</li>
        </ul>
      </section>

      <section className="rounded-xl border border-black/10 bg-white p-6">
        <h2 className="font-serifDisplay text-2xl font-semibold">Trust</h2>
        <p className="mt-2 text-sm text-black/70">Partner schools • Employer partners • Cities served • Programs listed</p>
        <Link className="mt-4 inline-block rounded-lg bg-mutedBlue px-4 py-2 text-white" href="/apply">
          Start Application
        </Link>
      </section>
    </main>
  );
}
