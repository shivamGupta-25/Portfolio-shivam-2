/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex flex-row items-center gap-8 mt-4 md:mt-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-6xl md:text-7xl font-serif text-primary leading-none h-10 md:h-12">“</span>
                    <span className="text-muted-foreground text-xl md:text-2xl font-medium tracking-tight mb-2">At the Intersection of</span>
                    <span className="text-2xl md:text-3xl font-bold text-primary tracking-tighter">Data Science,</span>
                    <span className="text-2xl md:text-3xl font-bold text-primary tracking-tighter">Machine Learning,</span>
                    <span className="text-2xl md:text-3xl font-bold text-primary tracking-tighter">Optimization,</span>
                    <span className="text-2xl md:text-3xl font-bold text-primary tracking-tighter">& Data Analytics</span>
                    <span className="text-muted-foreground text-xl md:text-2xl font-medium tracking-tight mt-1">to drive Better Decisions.</span>
                    <div className="h-1.5 w-16 bg-primary mt-6 rounded-full"></div>
                  </div>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div className="group relative size-24 md:size-32 rounded-full shadow-lg ring-4 ring-muted cursor-pointer flex-shrink-0">
                {/* Bottom image */}
                <img
                  src={DATA.hoverAvatarUrl}
                  alt={`${DATA.name} casual`}
                  className="absolute inset-0 size-full rounded-full object-cover object-top"
                />
                {/* Top image: fades out on hover */}
                <img
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  className="absolute inset-0 size-full rounded-full object-cover object-top transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert text-justify">
              <Markdown rehypePlugins={[rehypeRaw]}>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {DATA.skills.map((category, catIdx) => (
              <BlurFade key={category.category} delay={BLUR_FADE_DELAY * 10 + catIdx * 0.1}>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-muted-foreground">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <div key={skill.name} className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                        {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                        <span className="text-foreground text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
