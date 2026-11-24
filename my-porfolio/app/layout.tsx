import type { Metadata } from "next";
import "./globals.css";
import SplashCursor from "@/components/ui/SplashCursor";
export const metadata: Metadata = {
  title: "Mayank Gupta | Software Development Engineer",
  description:
    "Software Development Engineer specializing in Python, Backend, Full Stack, and AI-powered applications using Django, FastAPI, Next.js, Node.js, and PostgreSQL.",
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
