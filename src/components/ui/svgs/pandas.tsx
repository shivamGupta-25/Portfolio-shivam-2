import type { SVGProps } from "react";

const Pandas = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <rect x="16" y="8" width="8" height="14" rx="1" fill="#130754" />
    <rect x="16" y="26" width="8" height="6" rx="1" fill="#FFCA00" />
    <rect x="16" y="36" width="8" height="14" rx="1" fill="#130754" />
    <rect x="28" y="18" width="8" height="28" rx="1" fill="#130754" />
    <rect x="40" y="14" width="8" height="14" rx="1" fill="#130754" />
    <rect x="40" y="32" width="8" height="6" rx="1" fill="#FFCA00" />
    <rect x="40" y="42" width="8" height="14" rx="1" fill="#130754" />
  </svg>
);

export { Pandas };
