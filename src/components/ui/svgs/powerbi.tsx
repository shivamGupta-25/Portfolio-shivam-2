import type { SVGProps } from "react";

const Powerbi = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <rect x="38" y="12" width="10" height="42" rx="3" fill="#F2C811" />
    <rect x="26" y="22" width="10" height="32" rx="3" fill="#F2C811" opacity="0.8" />
    <rect x="14" y="32" width="10" height="22" rx="3" fill="#F2C811" opacity="0.6" />
  </svg>
);

export { Powerbi };
