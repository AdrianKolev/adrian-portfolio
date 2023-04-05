import React from "react";

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Define",
      desc: "In this phase, we will define the purpose and scope of your project",
    },
    {
      id: "02",
      heading: "Develop",
      desc: "In this phase, I will develop your project by building out the design and functionality based on the requirements and plan you defined in the previous phase.",
    },
    {
      id: "03",
      heading: "Deliver",
      desc: "In this final phase, I will deliver your completed project to the public by deploying it to a web hosting service and making it accessible to your target audience",
    },
  ];
  return (
    <>
      <section className="Branding">
        <div className="container grid">
          {data.map((value) => {
            return (
              <div key={value.id} className="box flex">
                <div className="text">
                  <h1>{value.id}</h1>
                </div>
                <div className="para">
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Branding;
