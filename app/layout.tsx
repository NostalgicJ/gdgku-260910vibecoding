import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import profile from "@/data/profile.json";
import "./globals.css";

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.hero.name} — ${profile.hero.nameEn}`,
  description: profile.hero.title,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${courierPrime.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
