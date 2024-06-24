import { css } from "../../../../styled-system/css";
import { flex } from "../../../../styled-system/patterns";
import { SignUpContent } from "./modules/components/SignUpContent";

export default function SignUpPage() {
  return (
    <main
      className={flex({
        marginTop: "9.7rem",
        flexDirection: "column",
        gap: "6.5rem",
        width: "full",
        align: "center",
      })}
    >
      <h1
        className={css({
          textAlign: "center",
          textStyle: "size25weight700bold",
          color: "yellow",
        })}
      >
        /*회원가입을 환영해*/
      </h1>
      <SignUpContent />
    </main>
  );
}
