import { Input } from "@/common/ui/Input";
import { css } from "../../../../../../../styled-system/css";

interface EmailInputProps {
  email: string;
  error: boolean;
  isSended: boolean;
}

export const EmailInput = ({ email, error, isSended }: EmailInputProps) => {
  return (
    <Input
      disabled={isSended}
      defaultValue={email || ""}
      placeholder="이메일을 입력해주세요"
      containerProps={{
        className: css({
          borderColor: error ? "warning" : "white",
          borderWidth: "0.2rem",
        }),
      }}
      name="email"
      type="email"
    />
  );
};
