import type { Metadata } from "next";

const bookingUrl = "https://calendly.com/phaderaflash/15min";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a strategy call with Phadera Flash.",
};

export default function ContactPage() {
  return (
    <main className="relative mx-auto min-h-screen w-full max-w-4xl px-6 py-12 md:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white backdrop-blur md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-semibold md:text-5xl">
          Let&apos;s discuss your next property move
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Book a strategy call to review your goals, opportunities, and next
          steps with practical support tailored to your situation.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 text-base font-semibold text-white shadow-2xl shadow-violet-950/30 transition hover:scale-[1.02] sm:w-auto"
          >
            Book a Strategy Call
          </a>
          <a
            href="mailto:hello@phaderaflash.com"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Enquire by Email
          </a>
        </div>
      </div>
    </main>
  );
}
