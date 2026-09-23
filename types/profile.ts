export type Stamp = {
  top: string;
  bottom: string;
};

export type Hero = {
  eyebrow: string;
  title: string;
  name: string;
  nameEn: string;
};

export type Entry = {
  title: string;
  meta?: string;
  description: string;
};

export type GroupLayout = "sheet" | "list" | "timeline";

export type Group = {
  label?: string;
  layout: GroupLayout;
  items: Entry[];
};

export type Frame = {
  frame: string;
  label: string;
  title: string;
  groups: Group[];
};

export type SayHello = {
  label: string;
  title: string;
  items: string[];
};

export type Link = {
  label: string;
  url: string;
};

export type Profile = {
  stamp: Stamp;
  hero: Hero;
  frames: Frame[];
  sayHello: SayHello;
  links: Link[];
  closing: string;
};
