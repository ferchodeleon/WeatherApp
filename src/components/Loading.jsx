import { useTranslation } from "react-i18next";

import humidity_icon from "../assets/humidity.png";
import clear_day from "../assets/01d.png";
import wind_icon from "../assets/wind.png";

export const Loading = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <img className="weather-icon" src={clear_day} alt="Weather Icon" />
      <p className="temperature"></p>
      <p className="location">Cargando..</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="Weather Icon" />
          <div>
            <p>%</p>
            <span>{t("humidity")}</span>
          </div>
        </div>
        <div className="col">
          <span className="divider" />
          <div>
            <p></p>
          </div>
          <span className="divider" />
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>Km/h</p>
            <span>{t("windSpeed")}</span>
          </div>
        </div>
      </div>
    </>
  );
};
