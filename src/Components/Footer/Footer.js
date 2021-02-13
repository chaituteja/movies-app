import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-container">
        <div className="container ptb100">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-item">
              <h4 className="footer-item__header">Martin Movies</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, ducimus, atque. Praesentium suscipit provident explicabo
                dignissimos nostrum numquam deserunt earum accusantium et fugit.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-item">
              <h4 className="footer-item__header">Twitter Feed</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, ducimus, atque. Praesentium suscipit provident explicabo
                dignissimos.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-item">
              <h4 className="footer-item__header">Useful Links</h4>
              <ul className="footer-item__links">
                <li className="footer-item__link">About Martin Movies</li>
                <li className="footer-item__link">Blog</li>
                <li className="footer-item__link">Contact Us</li>
                <li className="footer-item__link">Testimonials</li>
                <li className="footer-item__link">Error 404</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-item">
              <h4 className="footer-item__header">Instagram</h4>
              <p>Follow us on Instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-cp">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex">
                <div>
                  <ul className="footer-item__links list-inline">
                    <li className="footer-item__link list-inline-item">
                      Privacy & Cookies
                    </li>
                    <li className="footer-item__link list-inline-item">
                      Terms & Conditions
                    </li>
                    <li className="footer-item__link list-inline-item">
                      Legal Disclaimer
                    </li>
                    <li className="footer-item__link list-inline-item">
                      Community
                    </li>
                  </ul>
                </div>
                <div className="ml-auto">
                  Copyright 2020 Martin Movies . All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
