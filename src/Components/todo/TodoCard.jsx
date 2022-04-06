import React, { Fragment, useState } from "react";
import "./Addnewtodo.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { darkThemeprof, lightThemeprof } from "./theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import ThemeProfile from "../cardprofile/Profiletheme";
import GenderMOde from "../cardprofile/Gender";
import CardInformation from "../cardprofile/Cardinfo";
import CardInformationtwo from "../cardprofile/Cardinfotwo";
import IconsProfile from "../cardprofile/Iconprofile";
import Educationcard from "../cardprofile/Cardeducationpart";
import CardADDRESS from "../cardprofile/Cardaddress";
import CardProffetional from "../cardprofile/Cardproff";
import { useTranslation } from 'react-i18next';
const TodoCard = ({ setTodos, todos, todo, search }) => {
  //Events
  const [themeprof, setThemeprof] = useState("light");

  function toggleProfGender() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, gender: item.gender === "woman" ? "man" : "woman" };
        }
        return item;
      })
    );
  }
  const toggleprofTheme = () => {
    if (themeprof === "light") {
      setThemeprof("dark");
    } else {
      setThemeprof("light");
    }
  };
  const DeleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const CompleteHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const { t } = useTranslation();
  return (
    <ThemeProvider
      theme={themeprof === "light" ? lightThemeprof : darkThemeprof}
    >
      <GlobalStyle />

      <div
        className="container todo mt-3 card-body mt-5"
        style={{ borderRadius: "10px" }}
      >
        <div className="row ">
          <div className="col-6">
            <ThemeProfile toggleprofTheme={toggleprofTheme} />
          </div>
          <div className="col-6 d-flex">
            <GenderMOde toggleProfGender={toggleProfGender} todo={todo} />
          </div>
        </div>
        <div class="page-content page-container" id="page-content" >
          <div class="padding">
            <div class="row container d-flex justify-content-center" >
              <div class="col-xl-8 col-md-12" >
                {/* /////////////////////////////////zoom/////////////////////////////////////////////// */}
                <TransformWrapper
                  defaultScale={1}
                  defaultPositionX={200}
                  defaultPositionY={100}
                >
                  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <Fragment>
                      <button
                        className="btn btn-primary m-1"
                        style={{ borderRadius: "45px" ,fontWeight:"bold", fontSize:"10px"}}
                        onClick={() => zoomIn()}
                      >
                        + 
                      </button>
                      <button
                        className="btn btn-danger m-1"
                        style={{ borderRadius: "45px" , fontWeight:"bold", fontSize:"10px"}}
                        onClick={() => zoomOut()}
                      >
                        - 
                      </button>
                      <button
                        className="btn btn-success m-1"
                        style={{ borderRadius: "25px" , fontWeight:"bold", fontSize:"10px"}}
                        onClick={() => resetTransform()}
                      >
                        x
                      </button>

                      <TransformComponent>
                        <div class="card user-card-full" style={{width:"40vw"}}>
                          <div class="row m-l-0 m-r-0">
                            <div class="col-sm-4 bg-c-lite-green user-profile">
                              <div class="card-block text-center text-white">
                                <h6 class="f-w-600">Soroush Mostafavi</h6>
                                <p>{t("Web Designer.1")}</p>{" "}
                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                <img
                                  src="img/r.png"
                                  className="img-radius"
                                  alt="soroush"
                                  width="60px"
                                  height="60px"
                                />
                                <div className="mt-3">
                                  <h6>
                                    {t("MAN.1")}{" "}
                                    <input
                                      type="checkbox"
                                      checked={
                                        todo.gender === "man" ? true : false
                                      }
                                    />
                                  </h6>{" "}
                                </div>
                                <div>
                                  <h6>
                                    {t("WOMAN.1")}{" "}
                                    <input
                                      type="checkbox"
                                      checked={
                                        todo.gender === "woman" ? true : false
                                      }
                                    />
                                  </h6>{" "}
                                </div>
                              </div>
                            </div>

                            <div class="col-sm-8">
                              <div class="card-block">
                                <h6
                                  class="m-b-20 p-b-5 b-b-default f-w-600"
                                  style={{ color: "#363537" }}
                                >
                                  {t("Information.1")}
                                </h6>

                                <CardInformation
                                  todo={todo}
                                  todos={todos}
                                  search={search}
                                  setTodos={setTodos}
                                />
                                <CardInformationtwo todo={todo} />

                                <h6
                                  class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"
                                  style={{ color: "#363537" }}
                                >
                                  {t("Education.1")}
                                </h6>
                                <Educationcard todo={todo} />
                                <h6
                                  class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"
                                  style={{ color: "#363537" }}
                                >
                                 {t("Address.1")}
                                </h6>
                                <CardADDRESS todo={todo} />
                                <h6
                                  class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"
                                  style={{ color: "#363537" }}
                                >
                                  {t("the profession.1")}
                                </h6>
                                <CardProffetional todo={todo} />
                                <IconsProfile
                                  todo={todo}
                                  DeleteHandler={DeleteHandler}
                                  CompleteHandler={CompleteHandler}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </TransformComponent>
                    </Fragment>
                  )}
                </TransformWrapper>
                {/* /////////////////////////////////zoom/////////////////////////////////////////////// */}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </ThemeProvider>
  );
};

export default TodoCard;
