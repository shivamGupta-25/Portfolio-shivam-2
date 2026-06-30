import type { SVGProps } from "react";

const Kmeans = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" overflow="hidden">
    {/* Cluster 1 */}
    <circle cx="18" cy="20" r="3" fill="#E53935" />
    <circle cx="14" cy="16" r="2" fill="#E53935" opacity="0.7" />
    <circle cx="22" cy="16" r="2" fill="#E53935" opacity="0.7" />
    <circle cx="16" cy="24" r="2" fill="#E53935" opacity="0.7" />
    <circle cx="22" cy="24" r="2.5" fill="#E53935" opacity="0.7" />
    {/* Cluster 2 */}
    <circle cx="46" cy="22" r="3" fill="#1E88E5" />
    <circle cx="42" cy="18" r="2" fill="#1E88E5" opacity="0.7" />
    <circle cx="50" cy="18" r="2" fill="#1E88E5" opacity="0.7" />
    <circle cx="44" cy="26" r="2.5" fill="#1E88E5" opacity="0.7" />
    <circle cx="50" cy="26" r="2" fill="#1E88E5" opacity="0.7" />
    {/* Cluster 3 */}
    <circle cx="30" cy="46" r="3" fill="#43A047" />
    <circle cx="26" cy="42" r="2" fill="#43A047" opacity="0.7" />
    <circle cx="34" cy="42" r="2.5" fill="#43A047" opacity="0.7" />
    <circle cx="26" cy="50" r="2" fill="#43A047" opacity="0.7" />
    <circle cx="34" cy="50" r="2" fill="#43A047" opacity="0.7" />
    {/* Centroids */}
    <circle cx="18" cy="20" r="1.5" fill="white" />
    <circle cx="46" cy="22" r="1.5" fill="white" />
    <circle cx="30" cy="46" r="1.5" fill="white" />
  </svg>
);

export { Kmeans };