import type { SVGProps } from "react";

const SqlServer = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <ellipse cx="32" cy="16" rx="16" ry="6" fill="#CC2131" />
    <path d="M16 16v32c0 3.31 7.16 6 16 6s16-2.69 16-6V16" fill="#CC2131" opacity="0.2" />
    <ellipse cx="32" cy="48" rx="16" ry="6" fill="none" stroke="#CC2131" strokeWidth="1.5" />
    <ellipse cx="32" cy="16" rx="16" ry="6" fill="none" stroke="#A0001C" strokeWidth="1.5" />
    <line x1="16" y1="16" x2="16" y2="48" stroke="#A0001C" strokeWidth="1.5" />
    <line x1="48" y1="16" x2="48" y2="48" stroke="#A0001C" strokeWidth="1.5" />
    <ellipse cx="32" cy="26" rx="16" ry="6" fill="none" stroke="#A0001C" strokeWidth="1" opacity="0.5" />
    <ellipse cx="32" cy="36" rx="16" ry="6" fill="none" stroke="#A0001C" strokeWidth="1" opacity="0.5" />
  </svg>
);

export { SqlServer };
