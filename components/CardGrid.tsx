import type { Card, Section } from "@/types/profile";
import SectionHeading from "@/components/SectionHeading";

export default function CardGrid({ emoji, title, items }: Section<Card>) {
  return (
    <section>
      <SectionHeading emoji={emoji} title={title} />
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((card) => (
          <li
            key={card.title}
            className="rounded-2xl border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900"
          >
            <p className="mb-3 text-2xl" aria-hidden="true">
              {card.emoji}
            </p>
            <h3 className="font-bold">{card.title}</h3>
            {card.subtitle && (
              <p className="text-sm text-stone-500 dark:text-stone-400">{card.subtitle}</p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
              {card.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
