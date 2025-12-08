
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center"
    >
      <h2 className="text-2xl font-semibold text-slate-100">
        Let&apos;s build something.
      </h2>
      <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
        I&apos;m open to internships, freelance work, collaborations, and
        interesting side projects.
      </p>
      <div className="mt-5 flex justify-center gap-3">
        <Link href="/contact">
          <Button className="inline-flex items-center gap-2">
            Contact Me
            <Mail className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
