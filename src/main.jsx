import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import "./index.css";
import global_en from "./translate/en/global.json";
import global_es from "./translate/es/global.json";
import { Header } from "./components/Header.jsx";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <Header />
      <App />
    </I18nextProvider>
  </StrictMode>
);
