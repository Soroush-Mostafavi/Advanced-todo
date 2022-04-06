import React from 'react';
import { useTranslation } from 'react-i18next';

function ModalSignin({ closemodal }) {
  const { t } = useTranslation();

  return (
    <div className="modalBackground">
      <div className="modalcontainersign">
     <h2 className="text-center">{t("SIGN IN.1")}  </h2>
        <div className="title"></div>
        <div className="body container">

        <div className="mt-4 ">
            <label for="uname" className="mr-4">
              <b>{t("Email.1")} :</b>
            </label>
            <input
               style={{borderRadius:"10px"}}
              type="email"
              placeholder="Enter Username"
              name="uname"
              required
            />
          </div>
          <div className="mt-4 ">
            <label for="uname" className="mr-4">
              <b>{t("Username.2")} :</b>
            </label>
            <input
               style={{borderRadius:"10px"}}
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
          </div>

          <div className="mt-4">
            <label for="psw" className="mr-4">
              <b>{t("Password.2")} : </b>
            </label>
            <input
               style={{borderRadius:"10px"}}
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </div>

          <div className="mt-2">
            <label className="mr-4" style={{fontSize:"10px" , fontWeight:"bold"}}>
              <input type="checkbox" name="remember" />{t("Remember me.1")}
            </label>
            <button
            className="btn btn-danger mr-3 btnform"
            onClick={() => closemodal(false)}
          >
            {t("Cancel.1")}{" "}
          </button>
          <button className="btn btn-success btnform"> {t("Continue.1")}</button>
          </div>
        </div>
   
      </div>
    </div>
  );
}

export default ModalSignin;
