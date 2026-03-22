import Link from "next/link"
import {
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Clapperboard,
  Crown,
  ExternalLink,
  Radar,
  Sparkles,
  Users,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  castWatch,
  castWhyItMatters,
  faqItems,
  footerCopy,
  heroContent,
  heroFacts,
  navItems,
  sectionCopy,
  siteConfig,
  sourceLinks,
  statusSnapshot,
  storyAngles,
  timelineItems,
} from "@/lib/site"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteConfig.title,
  url: siteConfig.url,
  description: siteConfig.description,
  dateModified: siteConfig.updatedIso,
  inLanguage: "en-US",
  about: ["Dune 3", "Dune: Part Three", "Dune Messiah", "Dune trailer"],
}

const sectionIcons = {
  book: BookOpenText,
  calendar: CalendarDays,
  clapperboard: Clapperboard,
  radar: Radar,
  users: Users,
} as const

const storyAngleIcons = [Sparkles, BookOpenText, Crown] as const

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#efca91]">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl leading-none text-white sm:text-5xl">
        {title}
      </h2>
      <p className="text-balance text-base leading-7 text-[#d7c6b6] sm:text-lg">
        {description}
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <div className="grain absolute inset-0 opacity-80" />
        <div className="animate-drift absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-[#efbc5c]/20 blur-3xl" />
        <div className="animate-drift absolute right-[-4rem] top-64 h-[28rem] w-[28rem] rounded-full bg-[#a06234]/22 blur-3xl [animation-delay:-4s]" />
        <div className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(255,221,170,0.12),transparent_60%)]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/8 bg-[#120d09]/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3 text-sm text-white">
            <span className="font-heading text-2xl tracking-[0.2em] text-[#f3d09b]">
              DUNE
            </span>
            <span className="rounded-full border border-white/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-[#ccb59a]">
              dune3.lol
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[#d3c2b2] md:flex">
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 sm:px-8 lg:px-10">
        <section className="relative grid gap-10 pb-18 pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-20">
          <div className="space-y-8">
            <div className="space-y-5">
              <Badge
                variant="outline"
                className="border-[#efbc5c]/25 bg-[#efbc5c]/10 px-3 py-1 text-[0.72rem] tracking-[0.18em] text-[#f7dbaa]"
              >
                Updated {siteConfig.lastUpdated}
              </Badge>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#a89179]">
                  {heroContent.eyebrow}
                </p>
                <h1 className="text-balance font-heading text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                  {heroContent.title}
                </h1>
              </div>

              <p className="text-balance max-w-2xl text-lg leading-8 text-[#dbcab9] sm:text-xl">
                {heroContent.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={heroContent.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#efbc5c] px-6 py-3 text-sm font-semibold text-[#170f0a] transition hover:bg-[#f4cb83]"
              >
                {heroContent.primaryCta.label}
                <ArrowRight className="size-4" />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {heroFacts.map((fact) => (
                <Card
                  key={fact.label}
                  className="surface-frame border border-white/8 bg-transparent"
                >
                  <CardHeader>
                    <CardDescription className="text-xs uppercase tracking-[0.26em] text-[#b49d83]">
                      {fact.label}
                    </CardDescription>
                    <CardTitle className="text-xl text-white">{fact.value}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-6 text-[#d6c4b5]">
                    {fact.detail}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="surface-frame relative overflow-hidden border border-[#efbc5c]/14 bg-transparent">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(239,188,92,0.18),transparent)]"
            />
            <CardHeader className="relative">
              <CardDescription className="text-xs uppercase tracking-[0.28em] text-[#efca91]">
                {statusSnapshot.eyebrow}
              </CardDescription>
              <CardTitle className="max-w-sm text-3xl text-white">
                {statusSnapshot.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative space-y-6 text-[#dccbbc]">
              <div className="grid gap-4 sm:grid-cols-2">
                {statusSnapshot.items.map((item) => {
                  const Icon = sectionIcons[item.icon]

                  return (
                    <div
                      key={item.label}
                      className="rounded-3xl border border-white/8 bg-black/16 p-4"
                    >
                      <Icon className="mb-3 size-5 text-[#efbc5c]" />
                      <p className="mb-2 text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-sm leading-6 text-[#ccb8a5]">{item.text}</p>
                    </div>
                  )
                })}
              </div>

              <div className="rounded-3xl border border-white/8 bg-white/4 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#efca91]">
                  {statusSnapshot.quickReadLabel}
                </p>
                <p className="mt-3 text-base leading-7 text-[#e1d0c0]">
                  {statusSnapshot.quickRead}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-white/8" />

        <section id="overview" className="space-y-10 py-18">
          <SectionHeading
            eyebrow={sectionCopy.overview.eyebrow}
            title={sectionCopy.overview.title}
            description={sectionCopy.overview.description}
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {storyAngles.map((item, index) => {
              const Icon = storyAngleIcons[index]

              return (
                <Card
                  key={item.title}
                  className="surface-frame border border-white/8 bg-transparent"
                >
                  <CardHeader>
                    <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-[#efbc5c]/12 text-[#efbc5c]">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-base leading-7 text-[#d7c6b6]">
                    {item.copy}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <Separator className="bg-white/8" />

        <section id="timeline" className="space-y-10 py-18">
          <SectionHeading
            eyebrow={sectionCopy.timeline.eyebrow}
            title={sectionCopy.timeline.title}
            description={sectionCopy.timeline.description}
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {timelineItems.map((item) => (
              <Card
                key={`${item.date}-${item.title}`}
                className="surface-frame border border-white/8 bg-transparent"
              >
                <CardHeader>
                  <CardDescription className="text-xs uppercase tracking-[0.28em] text-[#efca91]">
                    {item.date}
                  </CardDescription>
                  <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-base leading-7 text-[#d9c8b8]">
                  {item.copy}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="bg-white/8" />

        <section id="cast" className="space-y-10 py-18">
          <SectionHeading
            eyebrow={sectionCopy.cast.eyebrow}
            title={sectionCopy.cast.title}
            description={sectionCopy.cast.description}
          />

          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {castWatch.map((item) => (
              <Card
                key={item.actor}
                className="surface-frame border border-white/8 bg-transparent"
              >
                <CardHeader>
                  <CardDescription className="text-xs uppercase tracking-[0.26em] text-[#b99f83]">
                    {item.role}
                  </CardDescription>
                  <CardTitle className="text-2xl text-white">{item.actor}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Badge
                    variant="outline"
                    className="border-[#efbc5c]/25 bg-[#efbc5c]/10 text-[#f6dbad]"
                  >
                    {item.status}
                  </Badge>
                  <p className="text-base leading-7 text-[#d7c6b6]">{item.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="surface-frame border border-[#efbc5c]/14 bg-transparent">
            <CardHeader>
              <CardDescription className="text-xs uppercase tracking-[0.28em] text-[#efca91]">
                {castWhyItMatters.eyebrow}
              </CardDescription>
              <CardTitle className="text-3xl text-white">
                {castWhyItMatters.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-base leading-7 text-[#d8c7b7] lg:grid-cols-3">
              {castWhyItMatters.items.map((item) => {
                const Icon = sectionIcons[item.icon]

                return (
                  <div
                    key={item.copy}
                    className="rounded-3xl border border-white/8 bg-black/16 p-5"
                  >
                    <Icon className="mb-4 size-5 text-[#efbc5c]" />
                    {item.copy}
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-white/8" />

        <section id="faq" className="space-y-10 py-18">
          <SectionHeading
            eyebrow={sectionCopy.faq.eyebrow}
            title={sectionCopy.faq.title}
            description={sectionCopy.faq.description}
          />

          <Card className="surface-frame border border-white/8 bg-transparent">
            <CardContent className="pt-4">
              <Accordion defaultValue={[faqItems[0].question]}>
                {faqItems.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger className="py-5 text-base text-white hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base leading-7 text-[#d8c7b7]">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-white/8" />

        <section className="space-y-10 py-18">
          <SectionHeading
            eyebrow={sectionCopy.sources.eyebrow}
            title={sectionCopy.sources.title}
            description={sectionCopy.sources.description}
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {sourceLinks.map((item) => (
              <Card
                key={item.href}
                className="surface-frame border border-white/8 bg-transparent"
              >
                <CardHeader>
                  <CardDescription className="text-xs uppercase tracking-[0.28em] text-[#efca91]">
                    {item.meta}
                  </CardDescription>
                  <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-base leading-7 text-[#d8c7b7]">
                  {item.copy}
                </CardContent>
                <CardFooter className="border-white/8 bg-white/4">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#f3d09b] transition hover:text-white"
                  >
                    Open source
                    <ExternalLink className="size-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[#b7a28b] sm:px-8 lg:px-10">
          {footerCopy.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </footer>
    </div>
  )
}
