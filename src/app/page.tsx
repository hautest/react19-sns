import Image from "next/image";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div>
      <div className={css({ fontFamily: "light" })}>개light</div>
      <div className={css({ fontFamily: "bold" })}>light</div>
      <div className={css({ fontFamily: "bold" })}>한국기계연구원 bold</div>
      <div
        className={css({
          // fontSize: "18px",/
          // fontWeight: 700,
        })}
      >
        개발자 준비중인데
      </div>
      <div
        className={css({
          // fontFamily: "var(--font-light)",
          fontFamily: "bold",
          // fontSize: "18px",/
          // fontWeight: 700,
          color: "yellow",
        })}
      >
        개발자 준비중인데
      </div>
    </div>
  );
}
