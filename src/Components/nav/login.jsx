import React, { useState } from "react";
import Modal from "./modal/Modal";
import { useTranslation } from 'react-i18next';
const Login = () => {
  const [openmodal, setOpenmodal] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="log">
      <button
        className="btn  btn-primary "
        style={{ borderRadius: "100px" ,width:"120px",fontWeight:"bold",fontSize:"11px" }}
        onClick={() => setOpenmodal(true)}
      >
      {t("LOG IN.1")}
      </button>
      {openmodal && <Modal closemodal={setOpenmodal} />}
    </div>
  );
};

export default Login;
