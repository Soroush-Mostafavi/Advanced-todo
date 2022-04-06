import React from 'react';
import { useTranslation } from 'react-i18next';

function ModalSignin({ closemodal }) {
 
  return (
    <div className="modalBackground">
      <div className="modalcontainersign">
     <h2 className="text-center">SIGN IN  </h2>
        <div className="title"></div>
        <div className="body container">

        <div className="mt-4 ">
            <label for="uname" className="mr-4">
              <b>Email :</b>
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
              <b>Username :</b>
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
              <b>Password : </b>
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
              <input type="checkbox" name="remember" />Remember me
            </label>
            <button
            className="btn btn-danger mr-3 btnform"
            onClick={() => closemodal(false)}
          >
            Cancel{" "}
          </button>
          <button className="btn btn-success btnform">Continue</button>
          </div>
        </div>
   
      </div>
    </div>
  );
}

export default ModalSignin;
