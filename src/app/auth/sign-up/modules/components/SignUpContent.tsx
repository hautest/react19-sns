"use client";

import { useActionState } from "react";
import { AuthCodeForm } from "./AuthCodeForm/AuthCodeForm";
import { NicknameEmailForm } from "./NicknameEmailForm/NicknameEmailForm";
import { SignUpFormAction, signUpFormInitValue } from "../interface";
import { sendAuthCodeAction } from "../actions/sendAuthCodeAction";

export const SignUpContent = () => {
  const [formState, formAction, isPending] = useActionState<
    SignUpFormAction,
    FormData
  >(sendAuthCodeAction, signUpFormInitValue);

  return (
    <>
      <NicknameEmailForm
        formState={formState}
        formAction={formAction}
        isPending={isPending}
      />
      {formState.successSendAuthCode === "success" && <AuthCodeForm />}
    </>
  );
};
