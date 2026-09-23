import type { Section, Strength } from "@/types/profile";
import SectionHeading from "@/components/SectionHeading";

export default function StrengthList({ emoji, title, items }: Section<Strength>) {
  return (
    <section>
      <SectionHeading emoji={emoji} title={title} />
      <ol className="space-y-5">
        {items.map((item, index) => (
          <li key={item.title} className="flex gap-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
              {index + 1}
            </span>
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-1 leading-relaxed text-stone-700 dark:text-stone-300">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
