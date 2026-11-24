"use client";

import { useState, FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "916306671439";

interface WhatsAppMessageBoxProps {
  title?: string;
  subtitle?: string;
  showEmailFallback?: boolean;
}

export default function WhatsAppMessageBox({
  title = "Direct Message on WhatsApp",
  subtitle = "Enter your name and message to start a WhatsApp chat directly.",
  showEmailFallback = false,
}: WhatsAppMessageBoxProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      setError("Please enter both your name and a message.");
      return;
    }

    setError("");
    const text = `Hi Mayank, I'm ${trimmedName}.\n\n${trimmedMessage}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur p-5 sm:p-6 shadow-lg shadow-emerald-500/5 text-left">
      <div className="flex items-center gap-2">
        <MessageCircle className="h-4 w-4 text-emerald-400" />
        <h2 className="text-sm font-semibold text-slate-100">{title}</h2>
      </div>
      <p className="mt-1.5 text-sm text-slate-400">{subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <label
            htmlFor="wa-name"
            className="mb-1 block text-xs font-medium text-slate-300"
          >
            Your Name
          </label>
          <input
            id="wa-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="wa-message"
            className="mb-1 block text-xs font-medium text-slate-300"
          >
            Message
          </label>
          <textarea
            id="wa-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        {error && <p className="text-xs text-rose-400">{error}</p>}

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button
            type="submit"
            className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-medium"
          >
            <Send className="h-4 w-4" />
            Send on WhatsApp
          </Button>

          {showEmailFallback && (
            <a
              href="mailto:mayankgupta270606@gmail.com?subject=Let%27s%20work%20together"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 transition"
            >
              Email instead
            </a>
          )}
        </div>
      </form>
    </div>
  );
}
