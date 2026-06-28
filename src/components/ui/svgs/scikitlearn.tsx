import type { SVGProps } from "react";

const Scikitlearn = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <circle cx="22" cy="22" r="6" fill="#F7931E" />
    <circle cx="42" cy="22" r="6" fill="#29ABE2" />
    <circle cx="22" cy="44" r="6" fill="#29ABE2" />
    <circle cx="42" cy="44" r="6" fill="#F7931E" />
    <circle cx="32" cy="33" r="4" fill="#9B59B6" />
    <line x1="26" y1="25" x2="29" y2="30" stroke="#666" strokeWidth="1.5" />
    <line x1="38" y1="25" x2="35" y2="30" stroke="#666" strokeWidth="1.5" />
    <line x1="26" y1="41" x2="29" y2="36" stroke="#666" strokeWidth="1.5" />
    <line x1="38" y1="41" x2="35" y2="36" stroke="#666" strokeWidth="1.5" />
  </svg>
);

export { Scikitlearn };
