import type { SVGProps } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.657 17H7v-3m-.898.897L17.411 3.59a2 2 0 0 1 2.828 2.828L8.764 17.893c-.536.536-.804.804-1.1 1.034a6 6 0 0 1-.838.545c-.331.178-.685.315-1.392.588L3 21l.783-2.35c.267-.802.401-1.203.587-1.577q.248-.5.584-.945c.252-.334.55-.633 1.148-1.23"
    />
  </svg>
);
export default SvgPencil;
