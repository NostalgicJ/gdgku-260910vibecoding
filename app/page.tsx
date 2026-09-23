import profileJson from "@/data/profile.json";
import type { Profile } from "@/types/profile";
import FilmStamp from "@/components/FilmStamp";
import Hero from "@/components/Hero";
import Frame from "@/components/Frame";
import SayHello from "@/components/SayHello";
import LinkList from "@/components/LinkList";

// JSON import는 layout 값을 string으로 넓혀 추론하므로 Profile로 단언한다.
const profile = profileJson as Profile;

export default function Home() {
  return (
    <>
      <FilmStamp text={profile.stamp.top} />
      <main className="mx-auto w-full max-w-5xl px-4 sm:px-8">
        <Hero {...profile.hero} />
        {profile.frames.map((frame) => (
          <Frame key={frame.frame} {...frame} total={profile.frames.length} />
        ))}
      </main>
      <footer className="bg-night text-paper">
        <div className="mx-auto max-w-5xl space-y-12 px-4 py-20 sm:px-8">
          <SayHello {...profile.sayHello} />
          <LinkList links={profile.links} />
          <p className="font-mono text-2xl">{profile.closing}</p>
        </div>
        <FilmStamp text={profile.stamp.bottom} />
      </footer>
    </>
  );
}
