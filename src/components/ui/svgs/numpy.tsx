import type { SVGProps } from "react";

const Numpy = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none">
    <path
      d="M28.3 12L16 18.5V32l6.2-3.3V21.3L28.3 18l6.1 3.3v7.4L40.6 32V18.5L28.3 12z"
      fill="#4DABCF"
    />
    <path
      d="M35.7 52L48 45.5V32l-6.2 3.3v7.4L35.7 46l-6.1-3.3v-7.4L23.4 32v13.5L35.7 52z"
      fill="#4D77CF"
    />
    <path
      d="M16 32l12.3 6.5L40.6 32 28.3 25.5 16 32z"
      fill="#4DABCF"
      opacity="0.6"
    />
    <path d="M28 25.5V38.5" stroke="#306998" strokeWidth="1.5" />
    <path d="M48 32l-12.3-6.5L23.4 32l12.3 6.5L48 32z" fill="#4D77CF" opacity="0.6" />
  </svg>
);

export { Numpy };
