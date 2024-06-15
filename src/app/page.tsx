import { Button } from "@/common/ui/Button";
import { css } from "../../styled-system/css";
import SvgHome from "@/common/icons/Home";

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
      <Button color="black">123</Button>
      <Button color="yellow">123</Button>
      <Button size="medium">123</Button>
      <Button size="small">123</Button>
      <Button>123</Button>
      <SvgHome className={css({ width: "10rem", height: "10rem" })} />
    </div>
  );
}
