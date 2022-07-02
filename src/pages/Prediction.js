import React from "react";
import { Typography, TextField } from "@material-ui/core";

function Prediction() {
  return (
    <>
      <div className="prediction-container">
        <Typography variant="h4" className="prediction-heading">
          Fake News Detection
        </Typography>
        <Typography variant="body1" className="prediction-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nostrum non voluptatem saepe deserunt. Cupiditate accusamus minus
          facilis, aliquid fuga placeat eaque nihil vitae consequatur,
          temporibus saepe ad obcaecati fugit.
        </Typography>
      </div>
      <div className="prediction-input">
        <Typography variant="h5" className="prediction-input-heading">
          Enter News Headlines Here
        </Typography>
        <TextField variant="filled" autoComplete="off" fullWidth />
      </div>
    </>
  );
}

export default Prediction;
