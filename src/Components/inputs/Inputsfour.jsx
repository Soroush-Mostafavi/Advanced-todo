import React, { Fragment } from "react";
import { useTranslation } from 'react-i18next';
const InputsValidationfour = ({setCityTown,setEducation,cityTown,education}) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {" "}
      <div className="col-6 ">
        <div class="input-group ">
          <span
            class="input-group-text text-light bg-success text-center "
            id="inputGroup-sizing-default"
            style={{ width: "150px"}}
          >
            {t("City/Town.1")} :
          </span>
          <input
            value={cityTown}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setCityTown(e.target.value)}
          />
        </div>
      </div>
      <div className="col-6">
        <div class="input-group ">
          <span
            class="input-group-text text-light bg-success"
            id="inputGroup-sizing-default"
            style={{width: "150px" }}
          >
           {t("Education.1")} :
          </span>
          <input
            value={education}
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default InputsValidationfour;
