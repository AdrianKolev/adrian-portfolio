import React from "react";

const About = () => {
  const data = [
    {
      title: "Who I Am And What I Do",
      desc1:
        "My name is Adrian and I'm a full stack developer with a passion for creating clean, functional, and user-friendly web applications. ",
      desc2:
        "With experience in both front-end and back-end development, I specialize in using a variety of programming languages and frameworks to build responsive and dynamic websites.",
      desc3:
        "I am committed to staying up-to-date with the latest trends and best practices in web development, and I am constantly seeking out new challenges and opportunities to expand my skills and knowledge.",
      cover: "./assets/about2.jpg",
    },
  ];
  return (
    <>
      <section className="about topMarign">
        <div className="container flex">
          {data.map((value) => {
            return (
              <>
                <div className="left mtop">
                  <div className="heading">
                    <h3>About Me</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>
                  <button className="primary-btn">Download CV</button>
                </div>
                <div className="right">
                  <div className="img">
                    <img src={value.cover} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
