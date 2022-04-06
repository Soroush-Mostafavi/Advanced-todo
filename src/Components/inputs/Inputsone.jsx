import React, { Fragment } from "react";
import { useTranslation } from 'react-i18next';
const InputsValidation = ({phone,setName,setPhone,name}) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {" "}
      <div className="col-6 ">
        <div class="input-group ">
          <span
            class="input-group-text text-light bg-success text-center "
            id="inputGroup-sizing-default"
            style={{ width: "150px" }}
          >
            {t("Name.1")} :
          </span>
          <input
            value={name}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="col-6">
        <div class="input-group ">
          <span
            class="input-group-text text-light bg-success"
            id="inputGroup-sizing-default"
            style={{ width: "150px"  }}
          >
            {t("Phone.1")} :
          </span>
          <input
            value={phone}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default InputsValidation;
