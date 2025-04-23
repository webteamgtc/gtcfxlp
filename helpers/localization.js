import { AppLanguage } from "../middleware";

export const supportedLanguages = {
  [AppLanguage.English]: {
    code: AppLanguage.English,
    name: "English",
    shortName: "EN",
    direction: "ltr",
    isLeftDirection: true,
  },
};
