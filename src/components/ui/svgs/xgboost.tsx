import type { SVGProps } from "react";

const Xgboost = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" overflow="hidden">
    <circle cx="32" cy="14" r="6" fill="#1E88E5" stroke="#1565C0" strokeWidth="1.5" />
    <circle cx="18" cy="34" r="5" fill="#43A047" stroke="#2E7D32" strokeWidth="1.5" />
    <circle cx="46" cy="34" r="5" fill="#E53935" stroke="#C62828" strokeWidth="1.5" />
    <circle cx="12" cy="52" r="4" fill="#43A047" stroke="#2E7D32" strokeWidth="1" />
    <circle cx="24" cy="52" r="4" fill="#E53935" stroke="#C62828" strokeWidth="1" />
    <circle cx="40" cy="52" r="4" fill="#43A047" stroke="#2E7D32" strokeWidth="1" />
    <circle cx="52" cy="52" r="4" fill="#E53935" stroke="#C62828" strokeWidth="1" />
    <line x1="28" y1="18" x2="20" y2="30" className="stroke-[#666] dark:stroke-neutral-400" strokeWidth="1.5" />
    <line x1="36" y1="18" x2="44" y2="30" className="stroke-[#666] dark:stroke-neutral-400" strokeWidth="1.5" />
    <line x1="15" y1="38" x2="13" y2="48" className="stroke-[#666] dark:stroke-neutral-400" strokeWidth="1.2" />
    <line x1="21" y1="38" x2="23" y2="48" className="stroke-[#666] dark:stroke-neutral-400" strokeWidth="1.2" />
    <line x1="43" y1="38" x2="41" y2="48" className="stroke-[#666] dark:stroke-neutral-400" strokeWidth="1.2" />
    <line x1="49" y1="38" x2="51" y2="48" className="stroke-[#666] dark:stroke-neutral-400" strokeWidth="1.2" />
  </svg>
);

export { Xgboost };