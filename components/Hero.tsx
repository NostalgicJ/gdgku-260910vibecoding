import type { Hero as HeroData } from "@/types/profile";

export default function Hero({ eyebrow, title, name, nameEn, major }: HeroData) {
  return (
    <header className="pt-20 pb-4 sm:pt-28">
      <p className="font-mono text-xs tracking-[0.2em] text-meta uppercase">{eyebrow}</p>
      <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
        {title}
      </h1>
      <dl className="mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-xs tracking-[0.2em] text-meta uppercase">Name</dt>
          <dd className="mt-2 text-xl font-semibold">
            {name} <span className="ml-2 font-mono text-sm font-normal text-meta">{nameEn}</span>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs tracking-[0.2em] text-meta uppercase">Major</dt>
          <dd className="mt-2 text-xl font-semibold">{major}</dd>
        </div>
      </dl>
    </header>
  );
}
