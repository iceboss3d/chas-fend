import React, { useState } from "react";
import LargePropertyCard from "../Cards/LargePropertyCard";
import "./SearchArea.scss";
import SprintCourt1 from "../../Assets/sprint-court1.jpeg";

export default function SearchArea() {
  const [filter, setFilter] = useState({
    state: "",
    city: "",
    estate: "",
  });
  return (
    <div className="container">
      <div className="search__area">
        <div className="filter__form">
          <form className="row align-items-center">
            <div className="col">
              <select className="form-control" name="estate">
                <option value="">Select</option>
              </select>
            </div>
            <div className="col">
              <select className="form-control" name="state">
                <option value="">Select</option>
              </select>
            </div>
            <div className="col">
              <select className="form-control" id="city" name="city">
                <option value="">Select</option>
              </select>
            </div>
            <div className="col">
              <button className="button-accent" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
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
    </div>
  );
}
