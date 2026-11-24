import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppMessageBox from "@/components/whatsapp-message-box";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-slate-100">
            Let&apos;s build something.
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            I&apos;m open to internships, freelance work, collaborations, and
            interesting side projects.
          </p>
          <div className="mt-5 flex justify-center md:justify-start gap-3">
            <Link href="/contact">
              <Button variant="outline" className="inline-flex items-center gap-2 border-slate-700 bg-slate-900 hover:bg-slate-800">
                Contact Page
                <Mail className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <WhatsAppMessageBox />
      </div>
    </section>
  );
}
