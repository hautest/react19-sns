import type { SVGProps } from "react";
const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.004 12a9 9 0 0 1-9 9h-9s1.56-3.744.936-5a9 9 0 1 1 17.064-4"
    />
  </svg>
);
export default SvgMessage;
