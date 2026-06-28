import type { SVGProps } from "react";

const PowerQuery = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <rect x="8" y="8" width="48" height="48" rx="6" fill="#31752F" />
    <path
      d="M20 22h24v4H20zM20 30h18v4H20zM20 38h22v4H20z"
      fill="white"
      opacity="0.9"
    />
    <path
      d="M40 34l8-6v12l-8-6z"
      fill="#FFD700"
    />
  </svg>
);

export { PowerQuery };
