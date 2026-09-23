import type { SayHello as SayHelloData } from "@/types/profile";

export default function SayHello({ label, title, items }: SayHelloData) {
  return (
    <section>
      <p className="font-mono text-xs tracking-[0.2em] text-line/70 uppercase">▸ {label}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <ul className="mt-10 border-b border-paper/15">
        {items.map((item) => (
          <li key={item} className="flex gap-4 border-t border-paper/15 py-4">
            <span className="font-mono text-line/70" aria-hidden="true">
              +
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
