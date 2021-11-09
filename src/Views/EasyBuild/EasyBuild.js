import React, { useState } from "react";
import PageHero from "../../Components/PageHero/PageHero";
import SprintCourt1 from "../../Assets/sprint-court1.jpeg";
import Featured from "../../Components/Featured/Featured";
import LargePropertyCard from "../../Components/Cards/LargePropertyCard";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Footer from "../../Components/Footer/Footer";

export default function EasyBuild() {
  const [active, setActive] = useState("All");

  const handleActive = (name) => {
    setActive(name);
  };

  const featureList = () => {
    for (let index = 0; index <= 8; index++) {
      return (
        <div className="col-md-4">
          <LargePropertyCard
            title="2 Bedroom Semi-Detached"
            summary="2 Bedroom Semi-Detached"
            price={20000000}
            features={[{ title: "Bedroom", icon: "bed", detail: "2" }]}
            image={SprintCourt1}
          />
        </div>
      );
    }
  };

  return (
    <div>
      <PageHero
        title="Easy Build"
        subTitle="Introducing Easy Access to Owning your Dream Home."
        coverImg={SprintCourt1}
        description="Pay 30% and be a step closer to owning your dream and desired home."
      />
      <Featured
        heading="Featured Designs"
        subtitle="Find your dream home, browse our collection of beautifully designed homes"
      >
        <ul className="nav nav-pills justify-content-center mt-4">
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link nav__link ${
                active == "All" ? "active button__active" : null
              }`}
              onClick={() => handleActive("All")}
            >
              All
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link nav__link ${
                active == "Bungalow" ? "active button__active" : null
              }`}
              onClick={() => handleActive("Bungalow")}
            >
              Bungalow
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link nav__link ${
                active == "Duplex" ? "active button__active" : null
              }`}
              onClick={() => handleActive("Duplex")}
            >
              Duplex
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link nav__link ${
                active == "Detached" ? "active button__active" : null
              }`}
              onClick={() => handleActive("Detached")}
            >
              Detached
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className={`nav-link nav__link ${
                active == "Semi-Detached" ? "active button__active" : null
              }`}
              onClick={() => handleActive("Semi-Detached")}
            >
              Semi-Detached
            </button>
          </li>
        </ul>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <LargePropertyCard
              title="2 Bedroom Semi-Detached"
              summary="2 Bedroom Semi-Detached"
              price={20000000}
              features={[{ title: "Bedroom", icon: "bed", detail: "2" }]}
              image={SprintCourt1}
            />
          </div>
          <div className="col-md-4 mb-4">
            <LargePropertyCard
              title="2 Bedroom Semi-Detached"
              summary="2 Bedroom Semi-Detached"
              price={20000000}
              features={[{ title: "Bedroom", icon: "bed", detail: "2" }]}
              image={SprintCourt1}
            />
          </div>
          <div className="col-md-4 mb-4">
            <LargePropertyCard
              title="2 Bedroom Semi-Detached"
              summary="2 Bedroom Semi-Detached"
              price={20000000}
              features={[{ title: "Bedroom", icon: "bed", detail: "2" }]}
              image={SprintCourt1}
            />
          </div>
          <div className="col-md-4 mb-4">
            <LargePropertyCard
              title="2 Bedroom Semi-Detached"
              summary="2 Bedroom Semi-Detached"
              price={20000000}
              features={[{ title: "Bedroom", icon: "bed", detail: "2" }]}
              image={SprintCourt1}
              featured
            />
          </div>
        </div>
      </Featured>
      <CallToAction message="Begin your journey to owning your dream home" />
      <Footer/>
    </div>
  );
}
