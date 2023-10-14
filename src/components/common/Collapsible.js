import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default Collapsible = ({ children, title }) => {
  const [collapse, setCollpase] = useState(false);

  const toggle = () => setCollpase(!collapse);

  return (
    <div className="collapsible">
      <button onClick={toggle}>
        <div className="title">{title}</div>
        <div>
          <FontAwesomeIcon icon={collapse ? faAngleDown : faAngleUp} />
        </div>
      </button>
      <div className={collapse ? "content hide" : "content"}>{children}</div>
    </div>
  );
};
