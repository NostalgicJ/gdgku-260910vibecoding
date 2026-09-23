import type { Entry } from "@/types/profile";

type Props = {
  items: Entry[];
};

export default function EntryList({ items }: Props) {
  return (
    <ol className="border-b border-line">
      {items.map((item, index) => (
        <li key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-line py-5">
          <span className="font-mono text-sm text-meta">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h4 className="font-bold">
              {item.title}
              {item.meta && (
                <span className="ml-2 font-mono text-xs font-normal text-meta">{item.meta}</span>
              )}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-meta">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
