import { Typography, Button } from "@material-ui/core";
import React from "react";
import "./HeroComponent.css";
import fakeImg from "../images/fake_news.png";
import { useNavigate } from "react-router-dom";

function HeroComponent() {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <Typography variant="h4" className="hero-text">
          Fake News Detection Using Machine Learning
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          className="hero-btn"
          onClick={() => navigate("prediction", { replace: true })}
        >
          Prediction
        </Button>
      </div>
      <div className="hero-image-container">
        <img src={fakeImg} alt="Fake News Img" className="hero-image" />
      </div>
    </div>
  );
}

export default HeroComponent;
