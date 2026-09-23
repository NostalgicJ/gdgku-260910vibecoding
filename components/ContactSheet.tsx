import type { Entry } from "@/types/profile";

type Props = {
  items: Entry[];
  frame: string;
};

// 밀착 인화지처럼 얇은 선을 공유하는 격자. 칸마다 필름 컷 번호(01A, 01B …)를 붙인다.
export default function ContactSheet({ items, frame }: Props) {
  return (
    <ul className="grid border-t border-l border-line sm:grid-cols-3">
      {items.map((item, index) => (
        <li key={item.title} className="border-r border-b border-line p-6">
          <p className="font-mono text-[11px] tracking-[0.2em] text-meta uppercase">
            {frame}
            {String.fromCharCode(65 + index)}
            {item.meta && <span className="ml-2">/ {item.meta}</span>}
          </p>
          <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-meta">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
