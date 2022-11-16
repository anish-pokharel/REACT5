import React from "react";

const Skill = () => {
  const data = [
    {
      tit: "Every Day is a New Challenge",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.",
      para1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.",
    },
  ];

  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{ opacity: 1, width: `${done}%` }}
        >
          <h4>{title}</h4>
          <h4>{done}%</h4>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="skills">
        <div className="container">
          <div className="heading">
            <h3>Why Choose Us</h3>
            <h1> Some Of My Skills</h1>
          </div>
          <div className="content flex">
            <div className="left topMargin">
              <Progress done="70" title="HTML" />
              <Progress done="80" title="CSS" />
              <Progress done="80" title="JAVASCRIPT" />
              <Progress done="90" title="REACT" />
            </div>
            <div className="right"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
