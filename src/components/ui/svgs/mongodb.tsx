import type { SVGProps } from "react";

const Mongodb = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <path
      d="M32 8c0 0-2 6-6 12s-8 12-8 20c0 10 6.27 16 14 16s14-6 14-16c0-8-4-14-8-20S32 8 32 8z"
      fill="#00ED64"
    />
    <path
      d="M32 8c0 0-2 6-6 12s-8 12-8 20c0 10 6.27 16 14 16"
      fill="#00AA45"
    />
    <rect x="30.5" y="30" width="3" height="24" rx="1.5" fill="#001E2B" opacity="0.3" />
  </svg>
);

export { Mongodb };
