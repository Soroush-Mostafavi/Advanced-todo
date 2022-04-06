import React from "react";
import { FaCheck, FaRegSave, FaTrashAlt } from "react-icons/fa";

const IconsProfile = ({ CompleteHandler , DeleteHandler , todo }) => {
 
  return (
    <ul class="social-link list-unstyled m-t-40 m-b-10">
      <li>
        {!todo.completed && (
          <a
            onClick={CompleteHandler}
            href="#!"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="facebook"
            data-abc="true"
          >
            {" "}
            <FaCheck style={{ color: "green" }} />
          </a>
        )}
      </li>
      <li>
        <a
          onClick={DeleteHandler}
          href="#!"
          data-toggle="tooltip"
          data-placement="bottom"
          title=""
          data-original-title="twitter"
          data-abc="true"
        >
          {" "}
          <FaTrashAlt style={{ color: "red" }} />
        </a>
      </li>
      <li>
        <a
          onClick={CompleteHandler}
          href="#!"
          data-toggle="tooltip"
          data-placement="bottom"
          title=""
          data-original-title="instagram"
          data-abc="true"
        >
          {" "}
          <FaRegSave style={{ color: "blue", fontSize: "20px" }} />
        </a>
      </li>
    </ul>
  );
};

export default IconsProfile;
