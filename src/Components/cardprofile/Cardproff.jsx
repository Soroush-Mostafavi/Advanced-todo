import React from 'react'
import { useTranslation } from 'react-i18next';

const CardProffetional = ({todo}) => {
  const { t } = useTranslation();
    return (     <div class="row">
    <div class="col-sm-6">
      <p class="m-b-10 f-w-600" style={{ color: "#363537" }}>
      {t("professional.1")}
      </p>
      <h6
        className={`text-muted f-w-400 todo-item ${
          todo.completed ? "completed" : ""
        }`}
      >
        {todo.professionaltitle}
      </h6>
    </div>
  </div> );
}
 
export default CardProffetional;