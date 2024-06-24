import { flex } from "../../../../../../../styled-system/patterns";
import { css } from "../../../../../../../styled-system/css";
import { useState } from "react";
import { SignUpFormAction } from "../../interface";
import { NicknameInput } from "./NicknameInput";
import { EmailInput } from "./EmailInput";
import { SendAuthButton } from "./SendAuthButton";

interface NicknameEmailFormProps {
  formState: SignUpFormAction;
  formAction: (payload: FormData) => void;
  isPending: boolean;
}

export const NicknameEmailForm = ({
  formAction,
  formState,
  isPending,
}: NicknameEmailFormProps) => {
  const [isNicknameValid, setInNicknameValid] = useState(false);

  return (
    <div
      className={flex({
        width: "full",
        flexDirection: "column",
        gap: "1rem",
        px: "2.9rem",
      })}
    >
      <form
        action={formAction}
        className={flex({
          flexDirection: "column",
          gap: "4.1rem",
          width: "full",
          align: "end",
        })}
      >
        <NicknameInput
          onNicknameChange={(nickname) => setInNicknameValid(!!nickname)}
          nickname={formState.nickname}
          isNicknameValid={isNicknameValid}
          isSended={formState.successSendAuthCode === "success"}
        />
        {isNicknameValid ? (
          <>
            <EmailInput
              isSended={formState.successSendAuthCode === "success"}
              email={formState.email}
              error={formState.successSendAuthCode === "error"}
            />
            <SendAuthButton
              isSended={formState.successSendAuthCode === "success"}
              isPending={isPending}
            />
          </>
        ) : (
          <div
            className={css({
              backgroundColor: "gray",
              borderRadius: "2rem",
              width: "full",
              height: "6.3rem",
            })}
          />
        )}
      </form>
    </div>
  );
};
