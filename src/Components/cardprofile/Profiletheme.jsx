import React, { Fragment } from "react";
const ThemeProfile = ({toggleprofTheme}) => {
  return (
    <Fragment>
      {" "}
      <label class="switch mt-4 ml-2" style={{ marginTop: "25px" }}>
        <input type="checkbox" onClick={toggleprofTheme} />
        <span class="slider round "></span>
      </label>{" "}
      Theme Mode{" "}
    </Fragment>
  );
};

export default ThemeProfile;
