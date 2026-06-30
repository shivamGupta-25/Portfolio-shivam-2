import type { SVGProps } from "react";

const Tableau = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 64 64" fill="none" overflow="hidden">
    <line x1="32" y1="8" x2="32" y2="26" stroke="#E97627" strokeWidth="4" />
    <line x1="23" y1="17" x2="41" y2="17" stroke="#E97627" strokeWidth="4" />
    <line x1="32" y1="38" x2="32" y2="56" stroke="#E97627" strokeWidth="4" />
    <line x1="23" y1="47" x2="41" y2="47" stroke="#E97627" strokeWidth="4" />
    <line x1="8" y1="23" x2="8" y2="41" stroke="#C72037" strokeWidth="3" />
    <line x1="2" y1="32" x2="14" y2="32" stroke="#C72037" strokeWidth="3" />
    <line x1="56" y1="23" x2="56" y2="41" stroke="#C72037" strokeWidth="3" />
    <line x1="50" y1="32" x2="62" y2="32" stroke="#C72037" strokeWidth="3" />
    <line x1="20" y1="26" x2="20" y2="38" stroke="#5B879B" strokeWidth="3" />
    <line x1="14" y1="32" x2="26" y2="32" stroke="#5B879B" strokeWidth="3" />
    <line x1="44" y1="26" x2="44" y2="38" stroke="#5B879B" strokeWidth="3" />
    <line x1="38" y1="32" x2="50" y2="32" stroke="#5B879B" strokeWidth="3" />
  </svg>
);

export { Tableau };