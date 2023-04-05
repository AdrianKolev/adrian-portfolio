import React from "react";
import { Link } from "react-router-dom";

const Wrapper = () => {
  const data = [
    {
      title: "LOOKING FOR EXCLUSIVE SERVICES?",
      heading: "Get The Best For Your Business",
      desc: "Take your business to the next level with top-notch web development services. Partner with a full stack developer who is passionate about creating clean, user-friendly web applications. Contact me today to learn more.",
    },
  ];
  return (
    <>
      <section className="Branding wrapper">
        <div className="container">
          {data.map((value) => {
            return (
              <div key={1} className="box">
                <h3>{value.title}</h3>
                <h2>{value.heading}</h2>
                <p>{value.desc}</p>
                <Link to="/contact">
                  <button className="primary-btn">Contact Me</button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
