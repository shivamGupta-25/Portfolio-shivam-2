import type { SVGProps } from "react";

const Seaborn = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" overflow="hidden">
    <rect x="10" y="40" width="8" height="14" rx="2" className="fill-[#4C72B0] dark:fill-sky-400" />
    <rect x="20" y="30" width="8" height="24" rx="2" className="fill-[#55A868] dark:fill-green-400" />
    <rect x="30" y="20" width="8" height="34" rx="2" className="fill-[#C44E52] dark:fill-red-400" />
    <rect x="40" y="26" width="8" height="28" rx="2" className="fill-[#8172B2] dark:fill-violet-400" />
    <rect x="50" y="34" width="8" height="20" rx="2" className="fill-[#CCB974] dark:fill-amber-300" />
    <line x1="8" y1="54" x2="60" y2="54" className="stroke-[#4C72B0] dark:stroke-sky-400" strokeWidth="2" />
    <line x1="8" y1="10" x2="8" y2="54" className="stroke-[#4C72B0] dark:stroke-sky-400" strokeWidth="2" />
  </svg>
);

export { Seaborn };