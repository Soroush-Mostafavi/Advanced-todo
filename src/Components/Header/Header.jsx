import React from "react";
import DateTime from "../date/Datetime";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Headerline = () => {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }
  return (
    <div className="text-center">
      <h2 className="text-primary font-weight-bold mt-4">{t("cv.1")}</h2>
      <h1 className="d-flex justify-content-center font-weight-bold ">
       {t("CV")} <h4>{t("Builder.1")}</h4>{" "}
      </h1>
      <div className="mt-3">
        {" "}
       <DateTime />
      </div>
      <div className="d-flex">
        <h4 style={{ width: "200px" }}>{t("Language.1")} :  </h4>
        <button onClick={() => handleClick("en")} className="btn">
          <img
            src="img/1200px-Flag_of_the_United_Kingdom.svg.png"
            height="20px"
            width="30px"
            alt="gkughj"
          />
        </button>
        <button onClick={() => handleClick("fr")} className="btn">
          <img src="img/france.png" height="20px" width="30px" alt="gkughj"/>
        </button>
        <button onClick={() => handleClick("ar")} className="btn">
          <img
            src="img/2560px-Flag_of_the_United_Arab_Emirates_(3-2).svg.png"
            height="20px"
            width="30px"
            alt="gkughj"
          />
        </button>
        <button onClick={() => handleClick("esp")} className="btn">
          <img
            src="img/1200px-Flag_of_Spain.svg.png"
            height="20px"
            width="30px"
            alt="gkughj"
          />
        </button>
        <button onClick={() => handleClick("ita")} className="btn">
          <img
            src="img/2560px-Flag_of_Italy.svg.png"
            height="20px"
            width="30px"
            alt="gkughj"
          />
        </button>
        <button onClick={() => handleClick("jap")} className="btn">
          <img src="img/download.jpg" alt="gkughj" height="20px" width="30px" />
        </button>
        <button onClick={() => handleClick("rus")} className="btn">
          <img src="img/1280px-Flag_of_Russia.svg.png" alt="gkughj" height="20px" width="30px" />
        </button>
        <button onClick={() => handleClick("hol")} className="btn">
          <img src="img/1280px-Flag_of_the_Netherlands.svg.png" alt="gkughj" height="20px" width="30px" />
        </button>
        <button onClick={() => handleClick("ko")} className="btn">
          <img src="img/Flag_of_South_Korea.svg.png" alt="gkughj" height="20px" width="30px" />
        </button>
        <button onClick={() => handleClick("ger")} className="btn">
          <img src="img/1200px-Flag_of_Germany.svg.png" alt="gkughj" height="20px" width="30px" />
        </button>
      </div>
    </div>
  );
};

export default Headerline;
