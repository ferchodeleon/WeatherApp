import { useTranslation } from "react-i18next";

import "../css/Header.css";
import Spanish from "../assets/spanish.png";
import English from "../assets/english.png";

export const Header = () => {
  const [t, i18n] = useTranslation("global");
  const iconSpanish = t("iconSpanish");
  const iconEnglish = t("iconEnglish");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    console.log(lang);
  };

  return (
    <header>
      {i18n.language === "es" ? (
        <img
          src={Spanish}
          alt={iconSpanish}
          onClick={() => handleChangeLanguage("en")}
        />
      ) : (
        <img
          src={English}
          alt={iconEnglish}
          onClick={() => handleChangeLanguage("es")}
        />
      )}
    </header>
  );
};
