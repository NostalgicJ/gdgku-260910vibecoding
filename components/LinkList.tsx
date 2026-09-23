import type { Link } from "@/types/profile";

type Props = {
  links: Link[];
};

export default function LinkList({ links }: Props) {
  if (links.length === 0) return null;

  return (
    <nav>
      <ul className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm tracking-[0.1em] uppercase">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-paper/40 pb-0.5 hover:border-paper"
            >
              {link.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
