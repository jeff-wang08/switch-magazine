import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

type AdminLeadsPageProps = {
  searchParams: Promise<{
    token?: string;
  }>;
};

type LeadRecord = {
  _id: string;
  _creationTime: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  program_interest: string;
  format_preference: string;
  funding_interest: string;
  employment_status: string;
  education_level: string;
  start_timeline: string;
  consent: boolean;
  consent_timestamp: number;
  source: string;
};

const leadColumns: Array<{ key: keyof LeadRecord; label: string }> = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "city", label: "City" },
  { key: "program_interest", label: "Program" },
  { key: "format_preference", label: "Format" },
  { key: "funding_interest", label: "Funding" },
  { key: "employment_status", label: "Employment" },
  { key: "education_level", label: "Education" },
  { key: "start_timeline", label: "Timeline" },
  { key: "consent_timestamp", label: "Consent timestamp" },
  { key: "source", label: "Source" },
];

function escapeCsvValue(value: unknown) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function formatDate(value: number) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function buildCsv(leads: LeadRecord[]) {
  const header = leadColumns.map((column) => escapeCsvValue(column.label)).join(",");
  const rows = leads.map((lead) =>
    leadColumns
      .map((column) => {
        const value = column.key === "consent_timestamp" ? formatDate(lead.consent_timestamp) : lead[column.key];
        return escapeCsvValue(value);
      })
      .join(","),
  );

  return [header, ...rows].join("\n");
}

function AccessMessage({ title, message }: { title: string; message: string }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-mutedRed">Admin desk</p>
      <h1 className="mt-3 font-serifDisplay text-5xl font-black leading-none">{title}</h1>
      <p className="mt-5 border-l-4 border-mutedBlue pl-5 text-sm leading-7 text-black/70">{message}</p>
    </main>
  );
}

export default async function AdminLeadsPage({ searchParams }: AdminLeadsPageProps) {
  const params = await searchParams;
  const adminToken = process.env.ADMIN_ACCESS_TOKEN;
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (!adminToken) {
    return <AccessMessage title="Admin token is not configured." message="Set ADMIN_ACCESS_TOKEN in the environment before using the private leads desk." />;
  }

  if (params.token !== adminToken) {
    return <AccessMessage title="Private leads desk." message="Add the correct admin token to the URL to view applicant leads. No lead data is shown without authorization." />;
  }

  if (!convexUrl) {
    return <AccessMessage title="Convex is not configured." message="Set NEXT_PUBLIC_CONVEX_URL in the environment before loading applicant leads." />;
  }

  const client = new ConvexHttpClient(convexUrl);
  const leads = (await client.query(api.leads.recent, { limit: 100 })) as LeadRecord[];
  const csvData = buildCsv(leads);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-wrap items-end justify-between gap-5 border-b border-black/15 pb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-mutedBlue">Private admin desk</p>
          <h1 className="mt-3 font-serifDisplay text-5xl font-black leading-none">Applicant leads</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-black/65">
            Recent Switch Magazine applications from Convex. Keep exports private because they include contact and consent details.
          </p>
        </div>
        <a
          className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-[0_16px_30px_rgba(18,18,18,0.18)] transition hover:-translate-y-0.5 hover:bg-mutedRed"
          download={`switch-magazine-leads-${new Date().toISOString().slice(0, 10)}.csv`}
          href={`data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`}
        >
          Export CSV
        </a>
      </div>

      <section className="mt-8 rounded-sm border border-black/15 bg-[#fffdfa] shadow-[0_22px_70px_rgba(18,18,18,0.08)]">
        <div className="flex items-center justify-between gap-4 border-b border-black/15 px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mutedRed">Lead file</p>
          <p className="font-serifDisplay text-3xl font-black leading-none">{String(leads.length).padStart(2, "0")}</p>
        </div>

        {leads.length === 0 ? (
          <p className="px-5 py-10 text-sm text-black/65">No leads yet. Submit a test application to confirm the pipeline.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[1200px] border-collapse text-left text-xs">
              <thead className="bg-ink text-white">
                <tr>
                  {leadColumns.map((column) => (
                    <th key={column.key} className="border-r border-white/15 px-4 py-3 font-bold uppercase tracking-[0.12em] last:border-r-0">
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead._id} className="border-b border-black/10 last:border-b-0">
                    {leadColumns.map((column) => (
                      <td key={column.key} className="max-w-56 border-r border-black/10 px-4 py-3 align-top text-black/75 last:border-r-0">
                        {column.key === "consent_timestamp" ? formatDate(lead.consent_timestamp) : String(lead[column.key] ?? "")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
