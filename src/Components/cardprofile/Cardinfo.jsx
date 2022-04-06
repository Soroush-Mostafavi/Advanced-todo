import React from "react";
import { useTranslation } from 'react-i18next';
const CardInformation = ({ todo }) => {
  const { t } = useTranslation();
  return (
    <div class="row">
      <div class="col-sm-6">
        <p class="m-b-10 f-w-600" style={{ color: "#363537" }}>
          {t("Name.1")}
        </p>
        <h6
          className={`text-muted f-w-400 todo-item ${
            todo.completed ? "completed" : ""
          }`}
        >
          {todo.name}
        </h6>
      </div>
      <div class="col-sm-6">
        <p class="m-b-10 f-w-600" style={{ color: "#363537" }}>
          {t("Phone.1")}
        </p>
        <h6
          className={`text-muted f-w-400 todo-item ${
            todo.completed ? "completed" : ""
          }`}
        >
          {todo.phone}
        </h6>
      </div>
    </div>
  );
};

export default CardInformation;
