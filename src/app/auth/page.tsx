import { MAX_WIDTH } from "@/common/ui/constants";
import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import { LinkButton } from "@/common/ui/LinkButton";

export default function AuthPage() {
  return (
    <main
      className={flex({
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "maxWidth",
        width: "full",
        px: "2.9rem",
        direction: "column",
        gap: "3.6rem",
      })}
    >
      <p
        className={css({
          fontSize: "2.5rem",
          fontWeight: "700",
          fontFamily: "bold",
          color: "yellow",
        })}
      >
        print(“Hello 갭잘알”)
      </p>
      <div className={flex({ direction: "column", gap: "2.4rem" })}>
        <LinkButton href="/auth/sign-in">로그인</LinkButton>
        <LinkButton href="/auth/sign-up">회원가입</LinkButton>
      </div>
    </main>
  );
}
