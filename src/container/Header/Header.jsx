import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";


// import { SocialMedia } from "../../components";
 

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header(props) {
  return ( 
    <div
      id="homeMain"
      className="app__header app__flex "
      style={{
        backgroundImage:
          props.mode === "light"
            ? `url(${images.bgIMG3})`
            : `url(${images.bgIMG2})`,
      }}
    >
      {/* <SocialMedia /> */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div
            className="badge-cmp app__flex"
            style={{
              border: props.mode === "light" ? "0px" : "2px white inset",
            }}
          >
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p
                className="p-text p-first"
                style={{
                  color: props.mode === "light" ? "var(--gray-color)" : "white",
                }}
              >
                Hello, I am
              </p>
              <h1
                className="head-text"
                style={{
                  color: props.mode === "light" ? "var(--gray-color)" : "white",
                }}
              >
                Kishor
              </h1>
            </div>
          </div>
          <div
            className="tag-cmp app__flex"
            style={{
              border: props.mode === "light" ? "0px" : "2px white outset",
            }}
          >
            <p
              className="p-text"
              style={{
                color:
                  props.mode === "light"
                    ? "var(--secondary-color)"
                    : "var(--lightblue-color)",
              }}
            >
             {"< Web Designer >"}
            </p>
            <p
              className="p-text"
              style={{
                color:
                  props.mode === "light"
                    ? "var(--secondary-color)"
                    : "var(--lightblue-color)",
              }}
            >
              {"< Web Developer >"}
            </p>
            <p
              className="p-text"
              style={{
                color:
                  props.mode === "light"
                    ? "var(--secondary-color)"
                    : "var(--lightblue-color)",
              }}
            >
              {"< Java Developer >"}
            </p>
          </div>
          <a href="https://drive.google.com/file/d/1yMxAAcJg2z9Xbau3PNEHNQO1HNbhh_fp/view?usp=sharing" target="_blank" className="resume">
            <div
              className="tag-cmp app__flex"
              style={{
                border: props.mode === "light" ? "0px" : "2px white dotted",
              }}
            >
              <p
                className="p-text resumeFont"
                style={{
                  color:
                    props.mode === "light"
                      ? "black"
                      : "white",
                }}
              >
              {" - DOWNLOAD RESUME  - "}
              </p>
            </div>
          </a>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="Profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay__circle"
          src={images.circle}
          alt="Circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.sass, images.react, images.java].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Header;
