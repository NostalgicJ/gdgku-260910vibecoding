import type { RoutineItem, Section } from "@/types/profile";

export default function Callout({ emoji, title, items }: Section<RoutineItem>) {
  return (
    <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/60 dark:bg-amber-950/30">
      <p className="mb-4 flex items-center gap-2 text-lg font-bold">
        <span aria-hidden="true">{emoji}</span>
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.text} className="flex gap-3">
            <span aria-hidden="true">{item.emoji}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
