type Props = {
  text: string;
};

export default function FilmStamp({ text }: Props) {
  return (
    <div className="film-strip py-6">
      <p className="overflow-hidden px-4 text-center font-mono text-[11px] tracking-[0.3em] whitespace-nowrap text-line uppercase">
        {text}
      </p>
    </div>
  );
}
