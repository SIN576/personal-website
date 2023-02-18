import React from "react";
import service from "../../static/data/service";
import "./style.css";
import FlatList from "flatlist-react";

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
    <div className="container-service">
      <h3 className="color-yellow">Skills</h3>
      <div className="list">
        <FlatList
          list={service}
          renderItem={Item}
          renderWhenEmpty={() => <div>List is empty!</div>}
        />
      </div>
    </div>
  );
}

export default Service;
