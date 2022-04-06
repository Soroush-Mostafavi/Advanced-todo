import React, { Fragment } from "react";
import { useTranslation } from 'react-i18next';
const Inputsvalidationtwo = ({setEmail,date,setDate,email}) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {" "}
      <div className="col-6 ">
        <div class="input-group ">
          <span
            class="input-group-text bg-success text-light"
            id="inputGroup-sizing-default"
            style={{width: "150px"}}
          >
            {t("Email.1")} :
          </span>
          <input
            value={email}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="col-6">
        <div class="input-group ">
          <span
            class="input-group-text text-light bg-success text-center "
            id="inputGroup-sizing-default"
            style={{width: "150px"}}
          >
            {t("Date.1")} :
          </span>
          <input
            value={date}
            type="date"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Inputsvalidationtwo;
