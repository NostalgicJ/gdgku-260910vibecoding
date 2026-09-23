import type { Hero as HeroData } from "@/types/profile";

export default function Hero({ greeting, name, highlight, tagline }: HeroData) {
  return (
    <header className="pt-20 pb-12 sm:pt-28">
      <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        {greeting} {name} <span className="text-amber-500">{highlight}</span>,
        <span className="mt-2 block text-2xl font-medium text-stone-500 sm:text-3xl dark:text-stone-400">
          {tagline}
        </span>
      </h1>
    </header>
  );
}
