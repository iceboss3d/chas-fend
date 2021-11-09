import React from "react";
import "./Footer.scss";
import chasLogo from "../../Assets/CHASLogo.png";

export default function Footer() {
  return (
    <div className="footer__background">
      <div className="footer__background container py-5">
        <div className="row">
          <div className="col-md-4 p-4">
            <img className="img-fluid transparent__logo" src={chasLogo} />
          </div>
          <div className="col-md-4 p-4">
            <h3>About Us</h3>
            <p className="text__light mb-2">
              Contemporary Homes and Style is a real estate company engaged in
              the design, development and management of luxurious contemporary
              homes across Nigeria.
            </p>
            <p className="text__light mb-2">
              We build smart homes using the finest automated systems with high
              level finishes that tailor fit our client's needs.
            </p>
          </div>
          <div className="col-md-4 p-4">
            <h3>Contact Us</h3>
            <p className="text__light mb-2">
              <i className="bx bx-map"></i> Helen Plaza, 56 Baybridge Road,
              Kpansia, Yenagoa, Bayelsa State.
            </p>
            <p className="text__light mb-2">
              <i className="bx bx-phone"></i>{" "}
              <a href="tel:+2348162052158">08162052158</a>
            </p>
            <p className="text__light mb-2">
              <i className="bx bx-envelope"></i>{" "}
              <a href="mailto:hello@chas.ng">hello@chas.ng</a>
            </p>
            <div className="d-flex">
              <p className="social__icon">
                <a href="http://www.instagram.com/contemporaryhome_">
                  <i className="bx bxl-instagram"></i>
                </a>
              </p>
              <p className="social__icon">
                <a href="http://www.facebook.com/contemporaryhomeandstyle">
                  <i className="bx bxl-facebook"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
