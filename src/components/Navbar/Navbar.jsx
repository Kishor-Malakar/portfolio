import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  if (props.mode==="dark") {
    var navStyle = 
      {
        // backgroundColor: "rgb(2,86,199)",
        background: "linear-gradient(0deg, rgba(2,86,199,1) 0%, rgba(0,6,46,1) 100%)"
      }
    }
  else{
     navStyle = 
      {
        // backgroundColor: "rgb(213,250,255)",
        background: "linear-gradient(0deg, rgba(213,250,255,1) 0%, rgba(110,244,255,1) 100%)"
      }
    }  
  return (
    <nav
      className="app__navbar"
      // style={{
      //   backgroundColor:
      //     props.mode === "light" ? "#dae7f7" : "hsl(240deg 73% 13%)",
      // }}
      style={navStyle}
    >
      <div className="app__navbar-logo">
        <img
          src={props.mode === "light" ? images.logo : images.logo2}
          alt="logo"
        />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <Link
              style={{
                color: props.mode === "light" ? "var(--gray-color)" : "white",
              }}
              to={`/${item}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div 
          style={{backgroundImage: props.mode==="light"? `url(${images.bgIMG})`:`url(${images.bgIMG2})`}}
            animate={{ width: "300px" }}
            // whileInView={{ x: [0, 0] }}
            // transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    style={{
                      color:
                        props.mode === "light" ? "var(--gray-color)" : "white",
                    }}
                    to={`/${item}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
