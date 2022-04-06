import React from "react";
import { useTranslation } from 'react-i18next';

const Educationcard = ({ todo }) => {
  const { t } = useTranslation();

  return (
    <div class="row">
      <div class="col-sm-8">
        <p class="m-b-10 f-w-600" style={{ color: "#363537" }}>
        {t("Education.1")}
        </p>
        <h6
          className={`text-muted f-w-400 todo-item ${
            todo.completed ? "completed" : ""
          }`}
        >
          {todo.education}
        </h6>
      </div>
    </div>
  );
};

export default Educationcard;
