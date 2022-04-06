adimport React, { Fragment } from "react";
const MainMode = ({
    toggleMode,
    toggleName,
    toggleTheme
}) => {
  return (
    <Fragment>
      {" "}<div className="container mt-2 d-flex">
      <div className="mt-4 mr-3" style={{ marginTop: "15px" }}>
        {toggleName()}
      </div>
      <label class="switch mt-4" style={{ marginTop: "25px" }}>
        <input type="checkbox" onClick={toggleTheme} />
        <span class="slider round"></span>
      </label>
      <div className="mt-3 ml-4">{toggleMode()}</div></div>
    </Fragment>
  );
};

export default  MainMode ;
