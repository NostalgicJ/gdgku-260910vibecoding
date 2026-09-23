import profileJson from "@/data/profile.json";
import type { Profile } from "@/types/profile";
import Hero from "@/components/Hero";
import Callout from "@/components/Callout";
import CardGrid from "@/components/CardGrid";
import WeekendTimeline from "@/components/WeekendTimeline";
import StrengthList from "@/components/StrengthList";
import SayHiList from "@/components/SayHiList";
import LinkList from "@/components/LinkList";

const profile: Profile = profileJson;

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-20">
      <Hero {...profile.hero} />
      <div className="space-y-16 [&>section+section]:border-t [&>section+section]:border-stone-200 [&>section+section]:pt-16 dark:[&>section+section]:border-stone-800">
        <Callout {...profile.routine} />
        <CardGrid {...profile.keywords} />
        <CardGrid {...profile.movies} />
        <CardGrid {...profile.playlist} />
        <WeekendTimeline {...profile.weekend} />
        <StrengthList {...profile.strengths} />
        <CardGrid {...profile.goals} />
        <SayHiList {...profile.sayHi} />
      </div>
      <footer className="mt-20 space-y-8 text-center">
        <LinkList links={profile.links} />
        <p className="text-3xl font-bold">{profile.closing}</p>
      </footer>
    </main>
  );
}
