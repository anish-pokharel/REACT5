import React from "react";

const Skill = () => {
  const data = [
    {
      title: "Every Day is a New Challenge",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.",
      para1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.",
    },
  ];

  const Progress = () => {};

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
              <Progress />
            </div>
            <div className="right"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
