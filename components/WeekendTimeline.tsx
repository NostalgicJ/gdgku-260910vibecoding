import type { Section, WeekendItem } from "@/types/profile";
import SectionHeading from "@/components/SectionHeading";

export default function WeekendTimeline({ emoji, title, items }: Section<WeekendItem>) {
  return (
    <section>
      <SectionHeading emoji={emoji} title={title} />
      <ol className="space-y-6 border-l-2 border-stone-200 pl-6 dark:border-stone-800">
        {items.map((item) => (
          <li key={item.time} className="relative">
            <span
              className="absolute top-1.5 -left-[31px] size-3 rounded-full bg-amber-500"
              aria-hidden="true"
            />
            <p className="font-bold">
              {item.time} <span aria-hidden="true">{item.emoji}</span>
            </p>
            <p className="mt-1 leading-relaxed text-stone-700 dark:text-stone-300">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
