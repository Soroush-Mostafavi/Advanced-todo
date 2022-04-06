import React, { Fragment } from "react";
import { useTranslation } from 'react-i18next';
const InputsValidationthree = ({
  professionaltitle,
  setProfessionaltitle,
  codeAddress,
  setCodeAddress,
}) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {" "}
      <div className="col-6 ">
        <div class="input-group ">
          <span
            class="input-group-text text-light bg-success text-center  "
            id="inputGroup-sizing-default"
            style={{ width: "150px"}}
          >
            {t("professional.1")} :
          </span>
          <input
            value={professionaltitle}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setProfessionaltitle(e.target.value)}
          />
        </div>
      </div>
      <div className="col-6">
        <div class="input-group ">
          <span
            class="input-group-text text-light bg-success"
            id="inputGroup-sizing-default"
            style={{width: "150px"}}
          >
            {t("Code Address.1")} :
          </span>
          <input
            value={codeAddress}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setCodeAddress(e.target.value)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default InputsValidationthree;
