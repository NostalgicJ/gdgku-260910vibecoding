import type { Entry } from "@/types/profile";

type Props = {
  items: Entry[];
};

export default function Timeline({ items }: Props) {
  return (
    <ol className="grid gap-8 sm:grid-cols-3 sm:gap-0">
      {items.map((item, index) => (
        <li key={item.title} className="border-t border-ink pt-4 sm:pr-6">
          <p className="font-mono text-xs tracking-[0.2em] text-meta uppercase">
            {item.meta}
            {index < items.length - 1 && <span aria-hidden="true"> →</span>}
          </p>
          <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-meta">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
