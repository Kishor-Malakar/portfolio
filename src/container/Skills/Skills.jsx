import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";

function Skills(props) {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div
      id="skillMain"
      style={{
        backgroundImage:
          props.mode === "light"
            ? `url(${images.bgIMG6})`
            : `url(${images.bgIMG7})`,
      }}
    >
      <h2
        className="head-text"
        style={{
          color:
            props.mode === "light" ? "var(--gray-color)" : "var(--white-color)",
        }}
      >
        Skills{" "}
        <span
          style={{
            color:
              props.mode === "light"
                ? "var(--secondary-color)"
                : "var(--lightblue-color)",
          }}
        >
          &
        </span>{" "}
        Experience
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.3 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p
                className="p-text"
                style={{
                  color:
                    props.mode === "light"
                      ? "var(--secondary-color)"
                      : "var(--lightblue-color)",
                }}
              >
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p
                  className="bold-text"
                  style={{
                    color:
                      props.mode === "light"
                        ? "var(--secondary-color)"
                        : "var(--lightblue-color)",
                  }}
                >
                  {experience.year}
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.3 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4
                        className="bold-text"
                        style={{
                          color:
                            props.mode === "light"
                              ? "var(--black-color)"
                              : "var(--white-color)",
                        }}
                      >
                        {work.name}
                      </h4>
                      <p
                        className="p-text"
                        style={{
                          color:
                            props.mode === "light"
                              ? "var(--gray-color)"
                              : "var(--white-color)",
                        }}
                      >
                        {work.company}
                      </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
