"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowUpRight, X, ZoomIn } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Markdown from "react-markdown";
import { Kbd } from "@/components/ui/kbd";

const SLIDE_INTERVAL_MS = 2800;

// ─── Single image ─────────────────────────────────────────────────────────────
function ProjectImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [error, setError] = useState(false);
  if (!src || error) return <div className={cn("w-full h-full bg-muted", className)} />;
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-full h-full object-contain p-1.5", className)}
      onError={() => setError(true)}
    />
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
interface LightboxProps {
  images: readonly string[];
  video?: string;
  alt: string;
  initialIndex: number;
  onClose: () => void;
}

function Lightbox({ images, video, alt, initialIndex, onClose }: LightboxProps) {
  const [idx, setIdx] = useState(initialIndex);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Keyboard: Escape to close, ← → to navigate
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && images.length > 1)
        setIdx((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight" && images.length > 1)
        setIdx((i) => (i + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, images.length]);

  // Prevent body scroll while open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  const content = (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm
                 animate-in fade-in duration-200"
      role="dialog"
      aria-modal
      aria-label={`Preview: ${alt}`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20
                   text-white p-2 transition-colors duration-150 focus-visible:outline-none"
      >
        <X className="size-5" />
      </button>

      {/* Media */}
      <div className="relative flex items-center justify-center w-[92vw] max-w-5xl h-[85vh]">
        {video ? (
          <video
            src={video}
            controls
            autoPlay
            loop
            playsInline
            className="max-w-full max-h-full rounded-sm shadow-2xl object-contain"
          />
        ) : images.length > 0 ? (
          <img
            key={idx}
            src={images[idx]}
            alt={`${alt} – ${idx + 1}`}
            className="max-w-full max-h-full rounded-sm shadow-2xl object-contain
                       animate-in fade-in zoom-in-95 duration-200"
          />
        ) : null}
      </div>

      {/* Keyboard hints */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 select-none">
        {images.length > 1 && (
          <span className="flex items-center gap-1.5 text-white/60 text-xs">
            <Kbd className="bg-white/10 text-white/70 border border-white/20">←</Kbd>
            <Kbd className="bg-white/10 text-white/70 border border-white/20">→</Kbd>
            <span>navigate</span>
          </span>
        )}
        {images.length > 1 && (
          <span className="text-white/30 text-xs">·</span>
        )}
        <span className="flex items-center gap-1.5 text-white/60 text-xs">
          <Kbd className="bg-white/10 text-white/70 border border-white/20">Esc</Kbd>
          <span>close</span>
        </span>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}

// ─── Auto-play carousel (card thumbnail) — no nav, no dots ───────────────────
interface CarouselResult {
  current: number;
  node: React.ReactNode;
}

function useAutoCarousel(images: readonly string[], alt: string): CarouselResult {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length]);

  const node = (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <ProjectImage src={src} alt={`${alt} – ${i + 1}`} />
        </div>
      ))}
    </div>
  );

  return { current, node };
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string | readonly string[];
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

// ─── Card ─────────────────────────────────────────────────────────────────────
export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Normalise image to flat array
  const imageArray: readonly string[] =
    !image || image === ""
      ? []
      : typeof image === "string"
        ? [image]
        : (image as readonly string[]).filter(Boolean);

  const hasMedia = !!video || imageArray.length > 0;

  const { current: carouselIdx, node: carouselNode } = useAutoCarousel(
    imageArray,
    title
  );

  const openLightbox = (e: React.MouseEvent) => {
    if (!hasMedia) return;
    e.preventDefault();
    e.stopPropagation();
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
          className
        )}
      >
        {/* ── Media area ── */}
        <div className="relative shrink-0 h-48 bg-muted/40 group/media">
          {/* Clickable media — opens lightbox */}
          <button
            onClick={openLightbox}
            disabled={!hasMedia}
            aria-label={`Preview ${title}`}
            className="block w-full h-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            ) : imageArray.length >= 1 ? (
              carouselNode
            ) : null}
          </button>

          {/* Zoom hint on hover */}
          {hasMedia && (
            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 group-hover/media:opacity-100 transition-opacity duration-200
                            bg-black/20 pointer-events-none z-20">
              <div className="rounded-full bg-black/50 border border-white/20 p-2.5 backdrop-blur-sm">
                <ZoomIn className="size-5 text-white" />
              </div>
            </div>
          )}

        </div>

        {/* ── Text content ── */}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold leading-snug">{title}</h3>
              <time className="text-xs text-muted-foreground">{dates}</time>
            </div>
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm flex-shrink-0"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>

          {/* ── Links row ── */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md
                             border border-border bg-background text-foreground
                             hover:bg-accent hover:text-accent-foreground
                             transition-colors duration-150 focus-visible:outline-none
                             focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-3.5"
                >
                  {link.icon}
                  <span>{link.type}</span>
                </Link>
              ))}
            </div>
          )}

          <Separator className="my-1" />

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-auto">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Lightbox portal ── */}
      {lightboxOpen && (
        <Lightbox
          images={imageArray}
          video={video}
          alt={title}
          initialIndex={carouselIdx}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
