import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 9.778V16.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 21 15.88 21 14.2 21H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 18.72 5 17.88 5 16.2V9.778M21 12l-5.433-6.036c-1.236-1.373-1.854-2.06-2.581-2.312a3 3 0 0 0-1.974 0c-.728.253-1.345.94-2.58 2.313L3 12m9 0v4m2-2h-4"
    />
  </svg>
);
export default SvgHome;
