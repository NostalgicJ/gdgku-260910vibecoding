import type { Link } from "@/types/profile";

type Props = {
  links: Link[];
};

export default function LinkList({ links }: Props) {
  if (links.length === 0) return null;

  return (
    <nav>
      <ul className="flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-stone-300 px-4 py-2 text-sm font-medium transition-colors hover:border-amber-500 hover:text-amber-600 dark:border-stone-700"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
