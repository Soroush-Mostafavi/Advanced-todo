import React,{Suspense} from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './i18next';
import App from "./App";
render(
  <BrowserRouter>
   <Suspense  fallback={(<div>Loading....</div>)}>
    <App />
    </Suspense >
  </BrowserRouter>,
  document.getElementById("root")
);