import React from "react";

function Modal({ closemodal }) {

  return (
    <div className="modalBackground">
      <div className="modalcontainer">
        <h2 className="text-center">{t("LOG IN.1")} </h2>
        <div className="title"></div>
        <div className="body container">
          <form>
            <div className="mt-4 ">
              <label for="uname" className="mr-4">
                <b>Username :</b>
              </label>
              <input
                style={{ borderRadius: "10px" }}
                type="text"
                placeholder="Enter Username"
                name="username"
              />
            </div>

            <div className="mt-4">
              <label for="psw" className="mr-4">
                <b>Password : </b>
              </label>
              <input
                style={{ borderRadius: "10px" }}
                type="password"
                placeholder="Enter Password"
                name="password"
              />
            </div>
          </form>
        </div>
        <div className="footer d-flex">
          <button
            className="btn btn-danger mr-3 btnform"
            onClick={() => closemodal(false)}
          >
          Cancel
          </button>
          <button type="submit" className="btn btn-success btnform">
            {" "}
           Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
