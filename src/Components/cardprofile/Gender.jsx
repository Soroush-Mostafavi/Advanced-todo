import React, { Fragment } from "react";
const GenderMOde = ({ toggleProfGender, todo }) => {
  return (
    <Fragment>
      {" "}
      <label class="switch mt-4 ml-5" style={{ marginTop: "25px" }}>
        <input
          type="checkbox"
          onClick={() => toggleProfGender()}
          checked={todo.gender === "woman" ? true : false}
        />
        <span class="slider round"></span>
      </label>
      <div>
        Gender Mode
        <div className="rounded-circle ">
          {" "}
          <img
            src={`img/${todo.gender}.jpg`}
            alt="soroush"
            width="80px"
            height="80px"
            style={{ borderRadius: "50px" }}
          />
        </div>
      </div>{" "}
    </Fragment>
  );
};

export default GenderMOde;
