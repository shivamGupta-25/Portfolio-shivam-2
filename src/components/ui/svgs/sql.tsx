import type { SVGProps } from "react";

const Sql = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <ellipse cx="32" cy="18" rx="18" ry="7" fill="#E8A820" />
    <path d="M14 18v10c0 3.87 8.06 7 18 7s18-3.13 18-7V18" stroke="#E8A820" strokeWidth="0" fill="#E8A820" opacity="0.7" />
    <ellipse cx="32" cy="28" rx="18" ry="7" fill="none" stroke="#CC8800" strokeWidth="1.5" />
    <path d="M14 28v10c0 3.87 8.06 7 18 7s18-3.13 18-7V28" stroke="#E8A820" strokeWidth="0" fill="#E8A820" opacity="0.5" />
    <ellipse cx="32" cy="38" rx="18" ry="7" fill="none" stroke="#CC8800" strokeWidth="1.5" />
    <path d="M14 38v10c0 3.87 8.06 7 18 7s18-3.13 18-7V38" stroke="#E8A820" strokeWidth="0" fill="#E8A820" opacity="0.3" />
    <ellipse cx="32" cy="48" rx="18" ry="7" fill="none" stroke="#CC8800" strokeWidth="1.5" />
    <ellipse cx="32" cy="18" rx="18" ry="7" fill="none" stroke="#CC8800" strokeWidth="1.5" />
    <line x1="14" y1="18" x2="14" y2="48" stroke="#CC8800" strokeWidth="1.5" />
    <line x1="50" y1="18" x2="50" y2="48" stroke="#CC8800" strokeWidth="1.5" />
  </svg>
);

export { Sql };
