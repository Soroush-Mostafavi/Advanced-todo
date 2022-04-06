import React, { Fragment } from "react";
import { useTranslation } from 'react-i18next';

const CardInformationtwo = ({ todo }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
    <div class="row">
      <div class="col-sm-12">
        <p class="m-b-10 f-w-600" style={{ color: "#363537" }}>
         {t("Email.1")}
        </p>
        <h6
          className={`text-muted f-w-400 todo-item ${
            todo.completed ? "completed" : ""
          }`}
        >
          {todo.email}
        </h6>
      </div></div>
      <div class="row">
      <div class="col-sm-6">
        <p class="m-b-10 f-w-600" style={{ color: "#363537" }}>
          {t("Date.1")}
        </p>
        <h6
          className={`text-muted f-w-400 todo-item ${
            todo.completed ? "completed" : ""
          }`}
        >
          {todo.date}
        </h6>
      </div>
    </div></Fragment>
  );
};

export default CardInformationtwo;
