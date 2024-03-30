import React, { useState } from "react";
import { accordionData as data } from "./accordionData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [selectedID, setSelectedID] = useState(null);

  const selectedFn = (id) => {
    if (id) {
      setSelectedID(id);
      setSelected(true);
    }
  };

  return (
    <div className="accordion container">
      {data.map((data) => (
        <div className="acc-block">
          <div className="d-flex justify-content-between header">
            <h1>{data.title}</h1>
            <span onClick={() => selectedFn(data.id)} id="expand">
              +
            </span>
          </div>
          {selectedID === data.id && selected === true && <p>{data.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
