import React from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left ">
            <div className="img">
              <img src="./assets/home.png" alt="" />
            </div>
          </div>
          <div className="right topMarign">
            <h1>
              HELLO, <br /> I AM ADRIAN KOLEV
            </h1>
            <h3>Software engeneer</h3>
            <div className="SocailIcon">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-instagram instagram"></i>
              <a
                href="https://www.linkedin.com/in/adrkolev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin linkedin"></i>
              </a>
              {/* <i className="fab fa-twitter twitter"></i> */}
              {/* <i className="fab fa-youtube youtube"></i> */}
              {/* <i className="fab fa-pinterest pinterest"></i> */}
              {/* <i className="fab fa-dribbble dribbble"></i> */}
            </div>
            <p>
              My passion is developing successfull projects. I achive it by
              specializing in Software Engineering, Marketing Strategy & User
              Experience.
            </p>
            <Link to="/contact">
              <button className="primary-btn">Contact Me</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
