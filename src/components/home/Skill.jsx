import React from "react";
import { Link } from "react-router-dom";

const Skill = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className="progresss">
        <div
          className="progresss-done"
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          <h4> {title}</h4>
          <h4> {done}%</h4>
        </div>
      </div>
    );
  };

  const data = [
    {
      title: "Every Day is a New Challenge",
      para: "As a developer, every day is a new challenge, and that's part of what makes the job exciting and rewarding.",
      para1:
        "Whether it's working on a new project, troubleshooting an issue, or learning a new technology, there is always something new to tackle. While this can be intimidating at times, it also presents opportunities for growth and development. By embracing each new challenge with a positive attitude and a willingness to learn, developers can continually improve their skills and become more versatile and adaptable. Additionally, the fast-paced and ever-changing nature of the industry means that there is never a dull moment, and developers have the opportunity to make a real impact by creating innovative solutions and pushing the boundaries of what is possible.",
    },
  ];
  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="heading">
            <h3> WHY CHOOSE US</h3>
            <h1>Some Of My Skills</h1>
          </div>

          <div className="content flex">
            <div className="left topMarign">
              <Progress done="70" title="HTML" />
              <Progress done="80" title="CSS" />
              <Progress done="90" title="JAVASCRIPT" />
              <Progress done="70" title="REACT JS" />
            </div>
            <div className="right mtop">
              {data.map((val) => {
                return (
                  <>
                    <h1>{val.title}</h1>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                    <Link to="/contact">
                      <button className="primary-btn">Contact Me</button>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
