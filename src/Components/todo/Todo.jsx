import React, { useMemo, useState } from "react";
import InputsValidationfour from "../inputs/Inputsfour";
import InputsValidation from "../inputs/Inputsone";
import InputsValidationthree from "../inputs/Inputsthree";
import Inputsvalidationtwo from "../inputs/Inputstwo";
import SearchInput from "../searchinput/Searchinput";
import Emoji from "./emoji/EmoJi";
import { useTranslation } from 'react-i18next';
const Todo = ({todos, setTodos, setStatus, setSearch}) => {
  /////////////////////////////////////Use four Name beacuse app have four inputs/////////////
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [professionaltitle, setProfessionaltitle] = useState("");
  const [codeAddress, setCodeAddress] = useState("");
  const [education, setEducation] = useState("");
  const [cityTown, setCityTown] = useState("");

  const completedTodosCount = useMemo(() => {
    return todos.filter((t) => t.completed === true).length;
  }, [todos]);
  const totalTodosCount = todos.length;
  const statusHandle = (e) => {
    setStatus(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (email && phone && name && date&&professionaltitle&&codeAddress&&education&&cityTown) {
      const newData = {
        id: Math.random() * 1000,
        email,
        phone,
        name,
        date,
        professionaltitle,
        codeAddress,
        education,
        cityTown,
        completed: false,
        theme: "light",
        gender: "man",
      };
      setTodos([...todos, newData]);
      setEmail("");
      setPhone("");
      setName("");
      setDate("");
      setProfessionaltitle("");
      setCodeAddress("");
      setEducation("");
      setCityTown("");
    } else {
      alert("please fill the fields");
    }
  };
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row">
        <InputsValidation
          name={name}
          phone={phone}
          setName={setName}
          setPhone={setPhone}
        />
      </div>
      <hr />
      <div className="row">
        <Inputsvalidationtwo
          date={date}
          email={email}
          setDate={setDate}
          setEmail={setEmail}
        />
      </div>
      <hr />
      <div className="row">
        <InputsValidationthree
         professionaltitle={professionaltitle}
          codeAddress={codeAddress}
          setProfessionaltitle={setProfessionaltitle}
          setCodeAddress={setCodeAddress}
        />
      </div>
      <hr />
      <div className="row">
        <InputsValidationfour
         cityTown={cityTown}
         education={education}
          setEducation={setEducation}
          setCityTown={setCityTown}
        />
      </div>
      <hr />
      <div className="row">
        {/* //////////////////////////////////////////////////////////////////////////// */}
        <div className="col-12">
          <Emoji />
        </div>
        {/* //////////////////////////////////////////////////////////////////////////// */}
        <hr />
        <div className="container mt-3">
          <div className="row">
            <div className="col-6 d-flex">
              <button onClick={submitHandler} className="btn btn-primary">
                {t("Send.1")}{" "}
              </button>
              <div className="ml-5 mt-2">
                <h6>
                  {t("The work done.1")} :{" "}
                  <span
                    className={`badge ${
                      completedTodosCount === 0
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {completedTodosCount}
                  </span>
                </h6>
              </div>
              <div className="ml-5 mt-2">
                <h6>
                  {" "}
                  {t("Unworked.1")} :{" "}
                  <span
                    className={`badge ${
                      totalTodosCount - completedTodosCount === 0
                        ? "badge-danger"
                        : "badge-warning"
                    }`}
                  >
                    {totalTodosCount - completedTodosCount}
                  </span>
                </h6>
              </div>
            </div>

            <div className="col-6 d-flex">
              <form class="form-inline">
                <div className="form-control">
                  <select
                    onChange={statusHandle}
                    name="todos"
                    className="filter-todo"
                  >
                    <option value="all">{t("All.1")}</option>
                    <option value="completed">{t("Completed.1")}</option>
                    <option value="uncompleted">{t("Uncompleted.1")}</option>
                  </select>{" "}
                </div>
              </form>{" "}
              <div className="ml-5 mt-2">
                <h6>
                  {t("Registered works.1")} :{" "}
                  <span
                    className={`badge ${
                      totalTodosCount === 0 ? "badge-danger" : "badge-warning"
                    }`}
                  >
                    {totalTodosCount}
                  </span>
                </h6>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <hr />
            <SearchInput
            setSearch={setSearch}
          
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
