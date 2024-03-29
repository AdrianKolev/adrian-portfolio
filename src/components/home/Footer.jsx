import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid1">
          <div className="box">
            <img src="./assets/logo1.png" alt="" />
            <p>
              If you're looking for a full stack developer who has worked
              extensively with both front-end and back-end development and has a
              strong interest in creating sleek, high-quality, and user-friendly
              web applications, please feel free to get in touch with me.
            </p>
            <div className="SocailIcon">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-instagram instagram"></i>
              <i className="fab fa-twitter twitter"></i>
              <i className="fab fa-youtube youtube"></i>
            </div>
          </div>

          <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
          </div>

          <div className="box">
            <h2>Recent Post</h2>
            <div className="text">
              <p>3 WooCommerce Plugins to Boost Sales</p>
              <span> 28 Feb 2019</span>
            </div>
            <div className="text">
              <p>3 WooCommerce Plugins to Boost Sales</p>
              <span> 28 Feb 2019</span>
            </div>
            <div className="text">
              <p>3 WooCommerce Plugins to Boost Sales</p>
              <span> 28 Feb 2019</span>
            </div>
          </div>

          <div className="box">
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
              <label>Location:27 Division St, New York, NY 10002, USA</label>
            </div>
            <div className="icon">
              <i className="fa fa-phone"></i>
              <label>Phone:+44 014799584</label>
            </div>
            <div className="icon">
              <i className="fa fa-envelope"></i>
              <label>Email:support@fleja.com</label>
            </div>
          </div>
        </div>
        <div className="legal container">
          <p>Copyright @2023. All rights reserved.</p>
          <label>
            Design & Developed by <span>Adrian Kolev</span>
          </label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
