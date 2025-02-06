import type { Metadata } from "next";
import { Concert_One } from "next/font/google";
import "./globals.css";

const ConcertOne = Concert_One({
  weight: "400",
  variable: "--font-concert-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eggsactly - Perfect Eggs Every Time",
  description:
    "Learn how to cook eggs perfectly every time with our detailed recipes and instructions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ConcertOne.variable}>
      <body>{children}</body>
    </html>
  );
}
