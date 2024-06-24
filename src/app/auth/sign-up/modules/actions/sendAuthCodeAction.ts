"use server";

import { SignUpFormAction } from "../interface";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const sendAuthCodeAction = async (
  prevState: SignUpFormAction,
  formData: FormData
): Promise<SignUpFormAction> => {
  const nickname = formData.get("nickname") as string;
  const email = formData.get("email") as string;

  return {
    successSendAuthCode: EMAIL_REGEX.test(email) ? "success" : "error",
    nickname,
    email,
  };
};
