import React from "react";

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Define",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "02",
      heading: "Develop",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "03",
      heading: "Deliver",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
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
