import { atom } from "recoil"

export const collapsedState = atom({
  key: "collapsedState",
  default: true,
})

export const languageState = atom({
  key: "languageState",
  default: "fr",
})
