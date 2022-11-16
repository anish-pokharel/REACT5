import React from "react";

const WrapperTwo = () => {
  const data = [
    {
      title: "My work",
      heading: "Some of My Completed Projects",
    },
  ];
  return (
    <section className="branding wrapper">
      <div className="container">
        {data.map((val) => {
          return (
            <>
              <div className="box">
                <h3>{val.title}</h3>
                <h2>{val.heading}</h2>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default WrapperTwo;
