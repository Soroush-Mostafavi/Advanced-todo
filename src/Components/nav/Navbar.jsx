import React from "react";
import Login from "./login";
import Signin from "./signin";
function Navbar() {
  return (
    <div
      className="container d-flex"
      style={{ borderRadius: "15px", justifyContent: "center" }}
    >
 
      <Login />
      <Signin />
    
    
    </div>
  );
}
export default Navbar;
