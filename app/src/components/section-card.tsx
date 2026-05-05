type SectionCardProps = {
  title: string;
  items: string[];
};

export function SectionCard({ title, items }: SectionCardProps) {
  return (
    <section className="rounded-xl border border-black/10 bg-white p-6">
      <h2 className="mb-3 font-serifDisplay text-2xl font-semibold">{title}</h2>
      <ul className="space-y-2 text-sm text-black/80">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
