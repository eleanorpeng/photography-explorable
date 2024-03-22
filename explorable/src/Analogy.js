import { useState } from "react";
import "./Analogy.css";
export default function Analogy(props) {
  const handleSelected = (id) => {
    props.handleSelected(id);
  };
  return (
    <div
      className="analogy-button"
      onClick={() => handleSelected(props.id)}
      style={{ backgroundColor: props.background }}
    >
      <img src={props.img}></img>
      <p>
        {props.description}
        <br />({props.subDescription})
      </p>
    </div>
  );
}
