export type Section<T> = {
  emoji: string;
  title: string;
  items: T[];
};

export type Hero = {
  greeting: string;
  name: string;
  highlight: string;
  tagline: string;
};

export type RoutineItem = {
  emoji: string;
  text: string;
};

export type Card = {
  emoji: string;
  title: string;
  subtitle?: string;
  description: string;
};

export type WeekendItem = {
  time: string;
  emoji: string;
  description: string;
};

export type Strength = {
  title: string;
  description: string;
};

export type Link = {
  label: string;
  url: string;
};

export type Profile = {
  hero: Hero;
  routine: Section<RoutineItem>;
  keywords: Section<Card>;
  movies: Section<Card>;
  playlist: Section<Card>;
  weekend: Section<WeekendItem>;
  strengths: Section<Strength>;
  goals: Section<Card>;
  sayHi: Section<string>;
  links: Link[];
  closing: string;
};
