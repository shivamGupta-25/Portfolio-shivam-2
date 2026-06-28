import type { SVGProps } from "react";

const Seaborn = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <rect x="10" y="40" width="8" height="14" rx="2" fill="#4C72B0" />
    <rect x="20" y="30" width="8" height="24" rx="2" fill="#55A868" />
    <rect x="30" y="20" width="8" height="34" rx="2" fill="#C44E52" />
    <rect x="40" y="26" width="8" height="28" rx="2" fill="#8172B2" />
    <rect x="50" y="34" width="8" height="20" rx="2" fill="#CCB974" />
    <line x1="8" y1="54" x2="60" y2="54" stroke="#4C72B0" strokeWidth="2" />
    <line x1="8" y1="10" x2="8" y2="54" stroke="#4C72B0" strokeWidth="2" />
  </svg>
);

export { Seaborn };
