export const signUpFormInitValue: SignUpFormAction = {
  successSendAuthCode: "init",
  nickname: "",
  email: "",
};

export interface SignUpFormAction {
  successSendAuthCode: "init" | "success" | "error";
  nickname: string;
  email: string;
}
