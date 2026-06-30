import type { SVGProps } from "react";

const Macros = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" overflow="hidden">
    <rect x="8" y="8" width="48" height="48" rx="6" fill="#2D572C" />
    <path
      d="M18 22l6 10-6 10"
      stroke="#FFD700"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line x1="28" y1="42" x2="46" y2="42" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
    <circle cx="44" cy="18" r="4" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <path d="M42 18l4 0" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <path d="M44 16l0 4" stroke="white" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

export { Macros };