import type { SVGProps } from "react";

const PivotTable = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <rect x="8" y="8" width="48" height="48" rx="4" fill="none" className="stroke-[#217346] dark:stroke-green-400" strokeWidth="2.5" />
    <rect x="8" y="8" width="48" height="12" rx="4" className="fill-[#217346] dark:fill-green-400" />
    <rect x="8" y="8" width="16" height="48" rx="4" className="fill-[#217346] dark:fill-green-400" opacity="0.6" />
    <line x1="24" y1="20" x2="24" y2="56" className="stroke-[#217346] dark:stroke-green-400" strokeWidth="1" opacity="0.3" />
    <line x1="40" y1="20" x2="40" y2="56" className="stroke-[#217346] dark:stroke-green-400" strokeWidth="1" opacity="0.3" />
    <line x1="24" y1="32" x2="56" y2="32" className="stroke-[#217346] dark:stroke-green-400" strokeWidth="1" opacity="0.3" />
    <line x1="24" y1="44" x2="56" y2="44" className="stroke-[#217346] dark:stroke-green-400" strokeWidth="1" opacity="0.3" />
    <path d="M36 36l6-4v8l-6-4z" className="fill-[#217346] dark:fill-green-400" />
    <path d="M34 28v6h-4l6-8 6 8h-4v-6h-4z" className="fill-[#217346] dark:fill-green-400" opacity="0.5" />
  </svg>
);

export { PivotTable };
