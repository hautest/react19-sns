import { Input } from "@/common/ui/Input";
import { css } from "../../../../../../../styled-system/css";
import { flex } from "../../../../../../../styled-system/patterns";

interface NicknameInputProps {
  nickname: string;
  onNicknameChange: (nickname: string) => void;
  isNicknameValid: boolean;
  isSended: boolean;
}

export const NicknameInput = ({
  nickname,
  onNicknameChange,
  isNicknameValid,
  isSended,
}: NicknameInputProps) => {
  return (
    <div
      className={flex({
        flexDirection: "column",
        width: "full",
      })}
    >
      <p
        className={css({
          px: "1.9rem",
          textStyle: "size15weight700bold",
          color: "success",
          position: "relative",
          bottom: "1rem",
          visibility: isNicknameValid ? "hidden" : "visible",
        })}
      >
        /*6글자까지 가능합니다*/
      </p>
      <Input
        disabled={isSended}
        defaultValue={nickname || ""}
        name="nickname"
        maxLength={6}
        placeholder="닉네임을 입력해주세요"
        onChange={(e) => onNicknameChange(e.target.value)}
      />
    </div>
  );
};
