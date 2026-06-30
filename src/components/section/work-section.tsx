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
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

/* ─── types ───────────────────────────────────────────────────────────────── */

type Role = {
  title: string;
  start: string;
  end: string;
  badge?: string | null;
  description: string;
};

type WorkEntry = {
  company: string;
  href?: string;
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
  roles?: Role[];
};

/* ─── logo helper ─────────────────────────────────────────────────────────── */

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

/* ─── badge chip (for role progression) ──────────────────────────────────── */

function RoleBadge({ text }: { text: string }) {
  const isActive = text === "Current";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide leading-none shrink-0",
        isActive
          ? "bg-primary/15 text-primary ring-1 ring-primary/30"
          : "bg-muted text-muted-foreground ring-1 ring-border"
      )}
    >
      {text}
    </span>
  );
}

/* ─── inline role-progression timeline ───────────────────────────────────── */

function RoleTimeline({ roles }: { roles: Role[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // first role open by default

  return (
    <div className="flex flex-col">
      {roles.map((role, idx) => {
        const isOpen = openIdx === idx;
        const isLast = idx === roles.length - 1;

        return (
          <div key={`${role.title}-${role.start}`} className="flex gap-3 group/role">
            {/* connector column */}
            <div className="flex flex-col items-center w-4 flex-none">
              {/* dot */}
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-label={`${isOpen ? "Collapse" : "Expand"} ${role.title}`}
                className={cn(
                  "size-3 rounded-full border-2 flex-none mt-1 z-10 transition-colors duration-200 cursor-pointer",
                  isOpen
                    ? "border-primary bg-primary"
                    : "border-muted-foreground/40 bg-background hover:border-primary"
                )}
              />
              {/* line below dot */}
              {!isLast && (
                <div className="w-px flex-1 bg-border mt-1 min-h-3" />
              )}
            </div>

            {/* content */}
            <div className={cn("flex-1 min-w-0", !isLast && "pb-4")}>
              {/* header row */}
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left flex items-start justify-between gap-2 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 leading-snug">
                    <span className="font-medium text-sm text-foreground">
                      {role.title}
                    </span>
                    {role.badge && <RoleBadge text={role.badge} />}
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {role.start} — {role.end}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "size-3.5 text-muted-foreground flex-none mt-1 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {/* collapsible description */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                )}
              >
                <div className="prose dark:prose-invert max-w-full text-xs text-muted-foreground font-sans leading-relaxed prose-p:my-0.5 prose-strong:text-foreground/80">
                  <Markdown rehypePlugins={[rehypeRaw]}>{role.description}</Markdown>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── work accordion item ─────────────────────────────────────────────────── */

function WorkItem({ work }: { work: WorkEntry }) {
  const hasProgression = Array.isArray(work.roles) && work.roles.length > 1;

  return (
    <AccordionItem
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
                {/* Company name + chevron kept together — never splits across lines */}
                <span className="inline-flex items-center gap-x-1.5">
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
                </span>
                {/* "N roles" chip — allowed to wrap independently */}
                {hasProgression && (
                  <span className="text-[10px] font-semibold bg-primary/10 text-primary ring-1 ring-primary/25 rounded-full px-2 py-0.5 leading-none">
                    {work.roles!.length} roles
                  </span>
                )}
              </div>
              <div className="font-sans text-sm text-muted-foreground">
                {/* for progression entries show the most-recent title */}
                {hasProgression ? work.roles![0].title : work.title}
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

      <AccordionContent className="p-0 ml-13">
        {hasProgression ? (
          /* ── role-progression timeline ── */
          <RoleTimeline roles={work.roles!} />
        ) : (
          /* ── flat description (original) ── */
          <div className="text-xs sm:text-sm text-muted-foreground prose dark:prose-invert max-w-full text-pretty font-sans leading-relaxed prose-p:my-1">
            <Markdown rehypePlugins={[rehypeRaw]}>{work.description}</Markdown>
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

/* ─── section export ──────────────────────────────────────────────────────── */

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
                <WorkItem key={work.company} work={work as WorkEntry} />
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
        <WorkItem key={work.company} work={work as WorkEntry} />
      ))}
    </Accordion>
  );
}
