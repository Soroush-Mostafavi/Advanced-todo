import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import ModalSignin from "./modal/Modalsign";
const Signin = () => {
  const [openmodal, setOpenmodal] = useState(false);
  const { t} = useTranslation();
  return (
    <div className="log">
      <button
        className="btn  btn-danger p-3 ml-2"
        style={{ borderRadius: "100px" , width:"120px",fontWeight:"bold",fontSize:"11px"}}
        onClick={() => setOpenmodal(true)}
      >
        {t("SIGN IN.1")}
      </button>
      {openmodal && <ModalSignin closemodal={setOpenmodal} />}
    </div>
  );
};

export default Signin;
