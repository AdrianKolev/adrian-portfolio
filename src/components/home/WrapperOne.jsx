import React from "react";

const WrapperOne = () => {
  const data = [
    {
      id: 1,
      num: "520%",
      text: "AWARDS WINNING",
    },
    {
      id: 2,
      num: "99%",
      text: "SATISFIED CLIENTS",
    },
    {
      id: 3,
      num: "3325",
      text: "CREATIVE PROJECTS",
    },
    {
      id: 4,
      num: "54380",
      text: "LINES OF CODE ",
    },
  ];
  return (
    <>
      <section className="Branding wrapperOne">
        <div className="container grid1">
          {data.map((value) => {
            return (
              <div key={value.id} className="box">
                <h1>{value.num}</h1>
                <p>{value.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WrapperOne;
