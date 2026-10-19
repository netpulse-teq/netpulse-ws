import { useRecoilValue } from "recoil"
import { languageState } from "./recoil-atoms"
import en from "../locales/en.json"
import fr from "../locales/fr.json"

const translations = { en, fr }

export const useTranslation = () => {
  const lang = useRecoilValue(languageState)
  const dictionary = translations[lang] || en

  const t = key => {
    return dictionary[key] || en[key] || key
  }

  return { t, lang }
}
