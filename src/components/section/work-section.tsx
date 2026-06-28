/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA, SHOW_WORK_BY_CATEGORY } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

type WorkEntry = {
  company: string;
  href?: string;
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
};

function WorkItem({ work }: { work: WorkEntry }) {
  return (
    <AccordionItem
      key={work.company}
      value={work.company}
      className="w-full border-b-0 grid gap-2"
    >
      <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
        <div className="flex items-center gap-x-3 justify-between w-full text-left">
          <div className="flex items-center gap-x-3 flex-1 min-w-0">
            {work.href && work.href !== "#" ? (
              <Link
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none block hover:scale-105 transition-transform"
                onClick={(e) => e.stopPropagation()}
              >
                <LogoImage src={work.logoUrl} alt={work.company} />
              </Link>
            ) : (
              <LogoImage src={work.logoUrl} alt={work.company} />
            )}
            <div className="flex-1 min-w-0 gap-1 flex flex-col">
              <div className="font-semibold leading-none flex items-center flex-wrap gap-x-2 gap-y-1.5">
                <span>{work.company}</span>
                <span className="relative inline-flex items-center w-3.5 h-3.5">
                  <ChevronRight
                    className={cn(
                      "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                      "translate-x-0 opacity-0",
                      "group-hover:translate-x-1 group-hover:opacity-100",
                      "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                    )}
                  />
                  <ChevronDown
                    className={cn(
                      "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                      "opacity-0 rotate-0",
                      "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                    )}
                  />
                </span>
              </div>
              <div className="font-sans text-sm text-muted-foreground">
                {work.title}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
            <span>
              {work.start} - {work.end ?? "Present"}
            </span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
        {work.description}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function WorkSection() {
  if (SHOW_WORK_BY_CATEGORY) {
    // ── Grouped layout ─────────────────────────────────────────────
    return (
      <div className="w-full flex flex-col gap-8">
        {DATA.workByCategory.map((group) => (
          <div key={group.heading} className="flex flex-col gap-3">
            {/* Category heading */}
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70 border-b pb-1.5">
              {group.heading}
            </h3>
            <Accordion type="single" collapsible className="w-full grid gap-6">
              {group.entries.map((work) => (
                <WorkItem key={work.company} work={work} />
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    );
  }

  // ── Flat layout (original) ──────────────────────────────────────
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <WorkItem key={work.company} work={work} />
      ))}
    </Accordion>
  );
}
