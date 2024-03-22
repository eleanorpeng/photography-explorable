import React, { useState } from "react";
import "./MultipleChoice.css";

export default function MultipleChoice(props) {
  const [ans, setAns] = useState(-1);
  const checkAns = (id) => {
    setAns(id);
  };

  return (
    <div>
      <h2>Scenario {props.scenario}</h2>
      <div className="multiple-choice-container">
        <p>{props.description}</p>
        <img
          src={props.img}
          style={{
            width: 400,
            objectFit: "contain",
            borderRadius: 16,
          }}
        />
      </div>

      <div className="multiple-choice">
        {props.choices.map((choice) => {
          return (
            <div
              key={choice.id}
              className="multiple-choice-button"
              onClick={() => checkAns(choice.id)}
              style={{
                backgroundColor:
                  ans !== -1
                    ? ans === choice.id
                      ? "#ccd5ae"
                      : "#e9edc9"
                    : "#e9edc9",
              }}
            >
              <p>{choice.options[0]}</p>
              <p>{choice.options[1]}</p>
              <p>{choice.options[2]}</p>
            </div>
          );
        })}
      </div>
      {ans !== -1 ? (
        <p style={{ color: parseInt(props.ans) === ans ? "green" : "red" }}>
          {props.choices[ans].rationale}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
