type SectionCardProps = {
  title: string;
  items: string[];
};

export function SectionCard({ title, items }: SectionCardProps) {
  return (
    <section className="group rounded-sm border border-black/15 bg-[#fffdfa] p-6 shadow-[0_18px_50px_rgba(18,18,18,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(18,18,18,0.1)]">
      <div className="mb-5 h-1 w-12 bg-mutedRed transition group-hover:w-20" />
      <h2 className="mb-4 font-serifDisplay text-2xl font-semibold leading-none">{title}</h2>
      <ul className="space-y-3 text-sm text-black/75">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 border-t border-black/10 pt-3 first:border-t-0 first:pt-0">
            <span className="font-serifDisplay text-lg leading-none text-mutedBlue">{String(index + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
