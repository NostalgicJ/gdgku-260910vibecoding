import type { Section } from "@/types/profile";
import SectionHeading from "@/components/SectionHeading";

export default function SayHiList({ emoji, title, items }: Section<string>) {
  return (
    <section>
      <SectionHeading emoji={emoji} title={title} />
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true">✔️</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
