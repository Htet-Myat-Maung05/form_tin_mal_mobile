import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import mm from "./locales/mm";
import { getLocales } from "expo-localization";

const deviceLang = getLocales()[0].languageCode;
export const lng =
    deviceLang === "my" ? "mm"
        : deviceLang === "en" ? "en"
            : "en";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            mm: { translation: mm }
        },
        lng,
        fallbackLng: "en",
        supportedLngs: ["en", "mm"],

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;