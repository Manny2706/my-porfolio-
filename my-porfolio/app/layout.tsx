import type { Metadata } from "next";
import "./globals.css";
import SplashCursor from "@/components/ui/SplashCursor"; 
export const metadata: Metadata = {
  title: "Mayank Gupta | Portfolio",
  description: "Full Stack Developer portfolio built with Next.js.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-slate-950 text-slate-100">
        {/* fancy cursor */}
        <SplashCursor />

        <main className="mx-auto max-w-5xl px-4 pb-16 pt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
