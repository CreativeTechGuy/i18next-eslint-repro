import { TFunction, default as i18next } from "i18next";

function doTranslation(t: TFunction): string {
    return t("abc");
}

doTranslation(i18next.t);