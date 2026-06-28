import type { SVGProps } from "react";

const Matplotlib = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="20" stroke="#11557C" strokeWidth="3" fill="none" />
    <path d="M32 12 A20 20 0 0 1 52 32L32 32Z" fill="#E8E8E8" />
    <path d="M52 32 A20 20 0 0 1 42 49L32 32Z" fill="#1F77B4" />
    <path d="M42 49 A20 20 0 0 1 22 49L32 32Z" fill="#FF7F0E" />
    <path d="M22 49 A20 20 0 0 1 12 32L32 32Z" fill="#2CA02C" />
    <path d="M12 32 A20 20 0 0 1 22 15L32 32Z" fill="#D62728" />
    <path d="M22 15 A20 20 0 0 1 32 12L32 32Z" fill="#9467BD" />
    <circle cx="32" cy="32" r="7" fill="white" />
  </svg>
);

export { Matplotlib };
