import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import profile from "@/data/profile.json";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.hero.name} ${profile.hero.highlight}`,
  description: profile.routine.title,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
