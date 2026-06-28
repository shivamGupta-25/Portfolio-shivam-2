import type { SVGProps } from "react";

const Plotly = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <rect x="12" y="36" width="6" height="18" rx="1" className="fill-[#3F4F75] dark:fill-slate-300" />
    <rect x="20" y="28" width="6" height="26" rx="1" className="fill-[#3F4F75] dark:fill-slate-300" />
    <rect x="28" y="16" width="6" height="38" rx="1" className="fill-[#3F4F75] dark:fill-slate-300" />
    <rect x="36" y="22" width="6" height="32" rx="1" className="fill-[#3F4F75] dark:fill-slate-300" />
    <rect x="44" y="32" width="6" height="22" rx="1" className="fill-[#3F4F75] dark:fill-slate-300" />
    <polyline
      points="15,34 23,26 31,14 39,20 47,30"
      stroke="#AB63FA"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="15" cy="34" r="2.5" fill="#AB63FA" />
    <circle cx="23" cy="26" r="2.5" fill="#AB63FA" />
    <circle cx="31" cy="14" r="2.5" fill="#AB63FA" />
    <circle cx="39" cy="20" r="2.5" fill="#AB63FA" />
    <circle cx="47" cy="30" r="2.5" fill="#AB63FA" />
  </svg>
);

export { Plotly };
