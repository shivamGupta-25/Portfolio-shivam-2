import type { SVGProps } from "react";

const Regression = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <line x1="10" y1="54" x2="10" y2="10" className="stroke-[#6C757D] dark:stroke-neutral-400" strokeWidth="2" />
    <line x1="10" y1="54" x2="54" y2="54" className="stroke-[#6C757D] dark:stroke-neutral-400" strokeWidth="2" />
    <line x1="12" y1="48" x2="52" y2="14" className="stroke-[#007BFF] dark:stroke-sky-400" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="16" cy="44" r="2.5" className="fill-[#28A745] dark:fill-green-400" />
    <circle cx="22" cy="40" r="2.5" className="fill-[#28A745] dark:fill-green-400" />
    <circle cx="26" cy="36" r="2.5" className="fill-[#28A745] dark:fill-green-400" />
    <circle cx="30" cy="34" r="2.5" className="fill-[#28A745] dark:fill-green-400" />
    <circle cx="36" cy="28" r="2.5" className="fill-[#28A745] dark:fill-green-400" />
    <circle cx="40" cy="22" r="2.5" className="fill-[#28A745] dark:fill-green-400" />
    <circle cx="46" cy="20" r="2.5" className="fill-[#28A745] dark:fill-green-400" />
    <circle cx="20" cy="46" r="2.5" className="fill-[#28A745] dark:fill-green-400" />
    <circle cx="34" cy="30" r="2.5" className="fill-[#28A745] dark:fill-green-400" />
    <circle cx="44" cy="18" r="2.5" className="fill-[#28A745] dark:fill-green-400" />
  </svg>
);

export { Regression };
