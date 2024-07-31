import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import PageTranstion from "@/components/animation/PageTranstion";
import StairEffect from "@/components/animation/StairEffect";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "600", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Luka",
  description: "web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairEffect />
        <PageTranstion>{children}</PageTranstion>
      </body>
    </html>
  );
}
