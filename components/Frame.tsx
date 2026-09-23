import type { Frame as FrameData, Group } from "@/types/profile";
import ContactSheet from "@/components/ContactSheet";
import EntryList from "@/components/EntryList";
import Timeline from "@/components/Timeline";

type Props = FrameData & {
  total: number;
};

function renderGroup(group: Group, frame: string) {
  switch (group.layout) {
    case "sheet":
      return <ContactSheet items={group.items} frame={frame} />;
    case "list":
      return <EntryList items={group.items} />;
    case "timeline":
      return <Timeline items={group.items} />;
  }
}

export default function Frame({ frame, label, title, groups, total }: Props) {
  return (
    <section className="py-16">
      <header className="mb-10 border-t border-ink pt-4">
        <div className="flex items-baseline justify-between gap-4 font-mono text-xs tracking-[0.2em] text-meta uppercase">
          <p>
            <span className="text-accent">Frame {frame}</span> — {label}
          </p>
          <p className="shrink-0">
            {frame}/{String(total).padStart(2, "0")}
          </p>
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      </header>
      <div className={groups.length > 1 ? "grid gap-12 md:grid-cols-2" : undefined}>
        {groups.map((group, index) => (
          <div key={group.label ?? index}>
            {group.label && (
              <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-meta uppercase">
                ▸ {group.label}
              </h3>
            )}
            {renderGroup(group, frame)}
          </div>
        ))}
      </div>
    </section>
  );
}
