type Props = {
  emoji: string;
  title: string;
};

export default function SectionHeading({ emoji, title }: Props) {
  return (
    <h2 className="mb-6 text-2xl font-bold tracking-tight">
      {title} <span aria-hidden="true">{emoji}</span>
    </h2>
  );
}
