import type { Metadata } from "next";
import Image from "next/image";

const seo = {
  title: "Phadera Flash | Property Strategy, Deal Sourcing and Advisory",
  description:
    "Phadera Flash is a London based property strategist with 30+ years of experience in deal sourcing, property advisory, negotiation support, and legacy building through structured opportunities.",
  keywords:
    "property strategist London, deal sourcer UK, property advisory, property consultant London, buy to let strategy, property investment mentor, deal negotiation, property legacy planning",
  canonical: "https://www.phaderaflash.com",
};
const bookingUrl = "https://calendly.com/phaderaflash/15min";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords.split(", "),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: { canonical: seo.canonical },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    url: seo.canonical,
    images: [
      {
        url: "/phadera-flash.png",
        alt: "Phadera Flash, property strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/phadera-flash.png"],
  },
};

const stats = [
  { value: "30+ Years", label: "Property experience" },
  { value: "15+ Properties", label: "Portfolio built and managed" },
  { value: "£100M+", label: "Estimated transaction influence" },
  { value: "1987", label: "First property secured" },
];

const services = [
  "Property strategy and opportunity structuring",
  "Deal sourcing and negotiation support",
  "Refurbishment oversight and project coordination",
  "Business and legal positioning guidance",
  "Investor introductions and strategic connections",
  "Support for individuals seeking clarity in complex situations",
];

const highlights = [
  "Built a portfolio of more than 15 properties through strategic structuring and creative acquisition methods.",
  "Supported others into ownership through sourcing, introductions, negotiation, and practical property guidance.",
  "Worked across London, Liverpool, Hull, Florida, and prime Central London markets.",
  "Bridged gaps where traditional professionals often leave clients needing more practical clarity and direction.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Phadera Flash",
  description: seo.description,
  areaServed: "United Kingdom",
  serviceType: "Property Strategy and Advisory",
  url: seo.canonical,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: seo.canonical },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${seo.canonical}/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: `${seo.canonical}/services`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Book a Call",
        item: `${seo.canonical}/book`,
      },
    ],
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: bookingUrl,
    name: "Book a strategy call",
  },
};

export default function PhaderaFlashWebsite() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(147,51,234,0.18),_transparent_25%),linear-gradient(to_bottom,_rgba(15,23,42,1),_rgba(2,6,23,1))]" />

      <main className="relative mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300"
        >
          <ol className="flex flex-wrap gap-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>/</li>
            <li className="text-white">Book a Call</li>
          </ol>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-2.5 font-semibold text-white shadow-xl shadow-violet-950/30 transition hover:scale-[1.02] sm:w-auto"
          >
            Book a Strategy Call
          </a>
        </nav>
        <section className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm tracking-wide text-blue-200 backdrop-blur">
              Property strategist • Deal sourcer • Opportunity architect
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Phadera Flash
              <span className="mt-3 block bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Building possibilities through property, strategy, and
                influence
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              With over three decades of experience in property and strategic
              transactions, Phadera helps people move from uncertainty to
              ownership with clarity, confidence, and structure.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 text-base font-semibold shadow-2xl shadow-violet-900/30 transition hover:scale-[1.02]"
              >
                Book a Strategy Call
              </a>
              <a
                href="#book"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-slate-100 backdrop-blur transition hover:bg-white/10"
              >
                Book Coming Out Soon
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-950/30 backdrop-blur">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] ring-1 ring-inset ring-white/10">
                <Image
                  src="/phadera-flash.png"
                  alt="Phadera Flash, property strategist, engaging in consultation"
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-3xl font-semibold text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Her story
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              A vision planted early. A legacy built with strategy.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                Phadera&apos;s journey into property began at the age of 14
                during a visit to America, where she watched her aunts build
                wealth through property across Brooklyn, Long Island, Florida,
                and beyond. That exposure reshaped her understanding of what
                property could mean: freedom, control, and legacy.
              </p>
              <p>
                At 22, while training to become a solicitor and working in a
                criminal law firm in Brixton, she saw professionals around her
                investing in property and recognised that ownership was
                achievable. Soon after, she secured her first property in
                Camberwell in 1987.
              </p>
              <p>
                She did not begin with abundant cash. She began with vision,
                credit strength, strategic thinking, and the ability to
                structure opportunity. That foundation went on to shape a
                portfolio of more than 15 properties and decades of hands on
                experience in acquisitions, negotiations, sourcing,
                refurbishment oversight, and strategic positioning.
              </p>
              <p>
                Life also brought major challenges, including financial hardship
                and bankruptcy. Rather than defining her, those seasons refined
                her. They deepened her understanding of systems, resilience,
                and what people truly need when navigating complex decisions.
              </p>
              <p>
                Today, she brings together property experience, practical
                wisdom, legal awareness, and business acumen to help clients
                move forward with clarity and strength.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-8 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
                What sets her apart
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                She does not just talk about opportunity. She activates it.
              </h3>
              <div className="mt-5 space-y-4 text-slate-300">
                <p>
                  Phadera is often described as a Property Magnet because people
                  around her move from curiosity to action. Over the years,
                  brokers, accountants, legal professionals, business owners,
                  friends, and clients have stepped into property because of the
                  conversations, insight, and opportunities that emerged through
                  her influence.
                </p>
                <p>
                  Her value lies not only in what she has built personally, but
                  in how many others she has helped unlock what was possible for
                  themselves.
                </p>
              </div>
            </div>

            <div
              id="services"
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 scroll-mt-24 backdrop-blur"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
                Services
              </p>
              <ul className="mt-5 space-y-3 text-slate-300">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <span className="mt-1 text-violet-300">✦</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Impact and credibility
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            From London to international opportunities
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-5xl text-base leading-8 text-slate-300">
            Through direct acquisitions, sourcing, negotiations, joint
            ventures, introductions, and strategic collaboration, the overall
            contribution linked to Phadera&apos;s work is estimated to exceed
            £100 million in today&apos;s market value. More importantly, many of
            those she has influenced have gone on to build portfolios, complete
            developments, and create opportunities for others.
          </p>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/12 to-blue-500/12 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-200">
              Positioning statement
            </p>
            <blockquote className="mt-4 text-2xl font-medium leading-10 text-white md:text-3xl md:leading-[1.4]">
              “I do not replace solicitors or advisors. I bridge the gap.”
            </blockquote>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Whether the issue is property, legal strategy, deal structure, or
              business positioning, the focus remains the same: to empower
              clients with knowledge, position them with strength, and help them
              move forward with confidence.
            </p>
          </div>

          <div
            id="book"
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 scroll-mt-24 backdrop-blur"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Coming soon
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              A new book is on the way
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              A forthcoming book will share deeper lessons on property,
              resilience, structuring opportunity, and building legacy through
              strategic thinking.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Join the Book Interest List
            </a>
          </div>
        </section>

        <section className="mt-14 mb-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-600/20 via-slate-900 to-violet-600/20 p-8 text-center backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Ready to begin
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            Step into your next property move with greater clarity, stronger
            positioning, and real strategic support
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 font-semibold shadow-2xl shadow-violet-950/40 transition hover:scale-[1.02]"
            >
              Book a Strategy Call
            </a>
            <a
              href="mailto:hello@phaderaflash.com"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Enquire by Email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
