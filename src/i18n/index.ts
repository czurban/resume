import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enContacts from "../locales/en/contacts.json";
import enMain from "../locales/en/main.json";
import enProjects from "../locales/en/projects.json";
import plContacts from "../locales/pl/contacts.json";
import plMain from "../locales/pl/main.json";
import plProjects from "../locales/pl/projects.json";
import uaContacts from "../locales/ua/contacts.json";
import uaMain from "../locales/ua/main.json";
import uaProjects from "../locales/ua/projects.json";

export const supportedLangs = ["en", "pl", "ua"] as const;
export type Lang = (typeof supportedLangs)[number];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { main: enMain, projects: enProjects, contacts: enContacts },
      pl: { main: plMain, projects: plProjects, contacts: plContacts },
      ua: { main: uaMain, projects: uaProjects, contacts: uaContacts },
    },
    fallbackLng: "en",
    supportedLngs: supportedLangs,
    ns: ["main", "projects", "contacts"],
    defaultNS: "main",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
