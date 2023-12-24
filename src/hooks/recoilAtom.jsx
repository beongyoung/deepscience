import { atom } from "recoil";

export const termsAgreedState = atom({
  key: "termsAgreedState",
  default: false,
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {},
});
