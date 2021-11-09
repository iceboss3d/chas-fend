import React from "react";
import "./Hero.scss";
import sprintCourt from "../../Assets/sprint-court.jpeg";
import sprintCourt1 from "../../Assets/sprint-court1.jpeg";
import useWindowDimensions from "../../Hooks/UseWindowDimensions";
import { Link } from "react-router-dom";


export default function Hero() {
  const { height } = useWindowDimensions();
  const heroHeight = height - 151;
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="carousel__indicator active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          className="carousel__indicator"
          aria-label="Slide 2"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={sprintCourt1}
            className="carousel__image d-block w-100"
            alt="..."
            style={{ height: `${heroHeight}px` }}
          />
          <div className="carousel-caption d-block">
            <h5 className="text__heading__light">Easy Buy</h5>
            <p className="text__description text__white">
              Pay Installment for a period of 12 Months and own a land for as
              low as 900k
            </p>
            <Link to="/easy-buy">
              <button type="button" className="button-accent mt-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={sprintCourt}
            className="carousel__image d-block w-100"
            alt="..."
            style={{ height: `${heroHeight}px` }}
          />
          <div className="carousel-caption d-block">
            <h5 className="text__heading__light">Easy Build</h5>
            <p className="text__description text__white">
              Pay 30% and be a step closer to owning your dream and desired
              home.
            </p>
            <Link to="easy-build">
              <button type="button" className="button-accent mt-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
