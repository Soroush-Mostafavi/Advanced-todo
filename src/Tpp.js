import React, { Fragment, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { GlobalStyles } from "./GlobalStyles";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Todo from "./components/todo/Todo";
import Todolist from "./components/todo/Todolist";
import Headerline from "./components/header/Header";
import MainMode from "./components/Main/Main";

const Tpp = () => {
  const { t } = useTranslation();

  /////////////////////////////////for theme provider//////////////////////////////////////
  const [theme, setTheme] = useState("light");
  /////////////////////////////////////Use four Name beacuse app have four inputs/////////////
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  ///////////////////////////////////Use from UseEffect and Filter Function////////////
  /////////////////////////////////Use from UseEffect and Filter Function////////////
  /////////////////////////////////Local Storage/////////////////////////////////////
  const [search, setSearch] = useState("");

  const savelocaltheme = () => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  const getlocalstoragetheme = () => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", JSON.stringify([]));
    } else {
      let themelocal = JSON.parse(localStorage.getItem("theme"));
      setTheme(themelocal);
    }
  };

  const savelocaltodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getlocalstorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todolocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todolocal);
    }
  };

  useEffect(() => {
    getlocalstorage();
  }, []);
  useEffect(() => {
    getlocalstoragetheme();
  }, []);
  useEffect(() => {
    savelocaltheme();
  }, [theme]);
  useEffect(() => {
    savelocaltodos();
  }, [todos]);

  ///////////////////////////////////Local Storage/////////////////////////////////////

  ///////////////////////////////////Dark&Lifht Function///////////////////////////////

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const toggleName = () => {
    if (theme === "light") {
      return <h6 className="font-weight-bolder m-2" style={{width:"100px"}}>{t("Light Mode.1")}</h6>;
    } else {
      return <h6 className="font-weight-bolder m-2" style={{width:"100px"}}>{t("Dark Mode.1")}</h6>;
    }
  };
  const toggleMode = () => {
    if (theme === "light") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          fill="currentColor"
          class="bi bi-sun-fill"
          viewBox="0 0 16 16"
          className="text-warning"
        >
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          fill="currentColor"
          class="bi bi-moon-stars-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </svg>
      );
    }
  };

  const toggleImage = () => {
    //Elyas: return does not need any else or else if
    if (theme === "light") {
      return (
        <Fragment>
          {" "}
          <div class="image-container">
            <h2>Soroush </h2>
            <img
              src="img/undraw_attached_file_re_0n9b.svg"
              alt="Proud Coder"
              id="image1"
              width="200px"
              height="200px"
            />
          </div>
          <div class="image-container">
            <h2> {t("looks happy")}</h2>
            <img
              src="img/undraw_Design_notes_re_eklr.svg"
              alt="Proud Coder"
              id="image2"
              width="200px"
              height="200px"
            />
          </div>
          <div class="image-container">
            <h2 className="text-center" style={{ color: "black" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                class="bi bi-emoji-smile"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
            </h2>
            <img
              src="img/undraw_Push_notifications_re_t84m.svg"
              alt="Idea"
              id="image3"
              width="200px"
              height="200px"
            />
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {" "}
          <div class="image-container">
            <h2>Soroush</h2>
            <img
              src="img/undraw_attached_file_re_0n9b(3).svg"
              alt="Proud Coder"
              id="image1"
              width="200px"
              height="200px"
            />
          </div>
          <div class="image-container">
            <h2>{t("LOoks Sad")}</h2>
            <img
              src="img/undraw_Design_notes_re_eklr(3).svg"
              alt="Proud Coder"
              id="image2"
              width="200px"
              height="200px"
            />
          </div>
          <div class="image-container">
            <h2 className="text-center" style={{ color: "white" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                class="bi bi-emoji-frown"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
            </h2>
            <img
              src="img/undraw_Push_notifications_re_t84m(3).svg"
              alt="Idea"
              id="image3"
              width="200px"
              height="200px"
            />
          </div>
        </Fragment>
      );
    }
  };
  /////////////////////////////////Dark&Lifht Function///////////////////////////////

  return (
    //Elyas: duplicate code (ThemeProvider and Global style)
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <div className="container">
        <div className="row">
          {" "}
          <div className="col-12">
            <Headerline />{" "}
          </div>
        </div>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  {" "}
                  <div className="mt-5 ">
                    <Navbar />
                    <img
                      style={{ borderRadius: "70px" }}
                      src="img/Online resume-rafiki.png"
                      alt="resume"
                      width="200rem"
                      height="200rem"
                    />
                    <img
                      style={{ borderRadius: "70px" }}
                      src="img/Resume folder-bro.png"
                      alt="resume"
                      width="200rem"
                      height="200rem"
                    />
                    <MainMode
                      toggleMode={toggleMode}
                      toggleName={toggleName}
                      toggleTheme={toggleTheme}
                    />
                  </div>
                </div>
                <div className="col-6 ">
                  <img
                    style={{ borderRadius: "70px" }}
                    src="img/Profiling.gif"
                    alt="resume"
                    width="400rem"
                    height="400rem"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-flex mt-5">
          <div className="imagetogglemode" style={{ width: "100%" }}>
            {toggleImage()}
          </div>
        </div>
        <div className="container">
          <div className="row ">
            {" "}
            <div className="col-12">
              <h3 className="text-center">
               {t("Enter your information and then click the submit button.1")}
             <h4><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg></h4> </h3>
              <Todo
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
                setSearch={setSearch}
                search={search}
              />
            </div>
          </div>{" "}
        </div>
        <div className="container">
          {" "}
          <div className="row">
            {" "}
            <div className="col-12">
              <Todolist
                setTodos={setTodos}
                todos={todos}
                status={status}
                search={search}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Tpp;
