import { atom } from "recoil";

export const allAgreedState = atom({
  key: "allAgreedState",
  default: false,
});

export const agreementsState = atom({
  key: "agreementsState",
  default: {
    termsAgreed: false,
    personalInfoAgreed: false,
    provisionAgreed: false,
    locationAgreed: false,
    eventAlarmAgreed: false,
    serviceAlarmAgreed: false,
  },
});
