import type { SVGProps } from "react";

const Vba = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" overflow="hidden">
    <rect x="8" y="8" width="48" height="48" rx="6" fill="#867DB1" />
    <text
      x="32"
      y="38"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="white"
      fontSize="16"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      VBA
    </text>
    <path d="M16 48h32" stroke="white" strokeWidth="1.5" opacity="0.4" />
    <path d="M20 16h6v4h-6z" fill="white" opacity="0.3" />
    <path d="M28 16h6v4h-6z" fill="white" opacity="0.3" />
  </svg>
);

export { Vba };