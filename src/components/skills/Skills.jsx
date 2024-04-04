import React from "react";
import "./skills.css";
import Languages from "./Languages";
import Tools from "./Tools";
import Softskills from "./Softskills";

const Skills = () => {
  return (
    <section className="skill section" id="skills">
      <h2 className="section__title1">Skills</h2>
      {/* <span className="section__subtitle">My Technical level</span> */}

      <div className="skills__container container grid">
        <Languages />
        <Tools />
        <Softskills />
      </div>
    </section>
  );
};

export default Skills;
