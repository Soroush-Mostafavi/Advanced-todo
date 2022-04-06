import React, { useState } from "react";
import Modal from "./modal/Modal";

const Login = () => {
  const [openmodal, setOpenmodal] = useState(false);
 
  return (
    <div className="log">
      <button
        className="btn  btn-primary "
        style={{ borderRadius: "100px" ,width:"120px",fontWeight:"bold",fontSize:"11px" }}
        onClick={() => setOpenmodal(true)}
      >
      LOG IN
      </button>
      {openmodal && <Modal closemodal={setOpenmodal} />}
    </div>
  );
};

export default Login;
