import type { SVGProps } from "react";

const Excel = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <rect x="8" y="8" width="48" height="48" rx="6" fill="#217346" />
    <path
      d="M22 20L32 32L22 44"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M42 20L32 32L42 44"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export { Excel };
