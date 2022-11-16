import React from "react";

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Digital Branding",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "02",
      heading: "Team Management",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
    {
      id: "03",
      heading: "Creative Mind",
      desc: "Lorem ipsum dolor sit amet, provid adipisicing elit. Aliquam dolorum nu illo similique! Impedit.",
    },
  ];
  return (
    <>
      <section className="branding">
        <div className="container grid">
          {data.map((val) => {
            return (
              <div className="box flex">
                <div className="text">
                  <h1>{val.id}</h1>
                </div>
                <div className="para">
                  <h2>{val.heading}</h2>
                  <p>{val.desc}</p>
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
