import React, { useState } from "react";
import ModalSignin from "./modal/Modalsign";
const Signin = () => {
  const [openmodal, setOpenmodal] = useState(false);
  return (
    <div className="log">
      <button
        className="btn  btn-danger p-3 ml-2"
        style={{ borderRadius: "100px" , width:"120px",fontWeight:"bold",fontSize:"11px"}}
        onClick={() => setOpenmodal(true)}
      >
        SIGN IN
      </button>
      {openmodal && <ModalSignin closemodal={setOpenmodal} />}
    </div>
  );
};

export default Signin;
