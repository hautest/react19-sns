import { Button } from "@/common/ui/Button";
import { css } from "../../../../../../../styled-system/css";

interface SendAuthButtonProps {
  isPending: boolean;
  isSended: boolean;
}

export const SendAuthButton = ({
  isPending,
  isSended,
}: SendAuthButtonProps) => {
  return (
    <Button
      color="yellow"
      size="small"
      className={css({
        px: "2.2rem",
      })}
      disabled={isPending || isSended}
    >
      인증코드발송
    </Button>
  );
};
