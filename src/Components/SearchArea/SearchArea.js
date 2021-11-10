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
    <div className="container my-4">
      <div className="search__area">
        <div className="filter__form">
          <form className="d-flex align-items-center flex-wrap">
            <div className="search__item">
              <label className="text__dark" htmlFor="estate">
                Estate
              </label>
              <select className="form-control" name="estate">
                <option value="">Select</option>
              </select>
            </div>
            <div className="search__item">
              <label className="text__dark" htmlFor="state">
                State
              </label>
              <select className="form-control" name="state">
                <option value="">Select</option>
              </select>
            </div>
            <div className="search__item">
              <label className="text__dark" htmlFor="city">
                City
              </label>
              <select className="form-control" id="city" name="city">
                <option value="">Select</option>
              </select>
            </div>
            <button
              className="button-accent search__item__button"
              type="submit"
            >
              <i className="bx bx-search"></i> Search
            </button>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 mb-2">
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
      <div className="d-flex w-100 justify-content-center">
        <nav aria-label="property pagination">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
