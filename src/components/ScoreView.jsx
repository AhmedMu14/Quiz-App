import React from "react";
import "./ScoreView.css";

const ScoreView = ({ handleResetClick, score }) => {
  return (
    <div>
      <p>You scored {score} out of 15</p>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default ScoreView;
