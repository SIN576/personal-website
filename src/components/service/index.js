import React from "react";
import service from "../../static/data/service";
import "./style.css";

function Service() {
  const Item = (item, index) => {
    return (
      <button className="card" key={index}>
        <span className="text-white title">{item.title}</span>
        <br></br>
        <span className="text-gray">{item.description}</span>
      </button>
    );
  };

  return (
    <div className="container-p">
      <div className="container-service">
        <h3 className="color-yellow">Skills</h3>
        <div className="list">
          {service.map((item, index) => Item(item, index))}
        </div>
      </div>
    </div>
  );
}

export default Service;
