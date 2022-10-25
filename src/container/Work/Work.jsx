import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";
import {AiFillEye, AiFillGithub} from "react-icons/ai";
import {urlFor, client} from "../../client";
import "./Work.scss"
import { images } from '../../constants';

import './Work.scss';

function Work(props) {
  const [works, setWorks] = useState([]);        

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) =>{
        setWorks(data);
      })
  }, []); 
   
   
  return (
    <div id='workMain' style={{backgroundImage: props.mode==="light"? `url(${images.bgIMG6})`:`url(${images.bgIMG7})`}}>
      <h1 className="head-text"  style={{
                  color:
                    props.mode === "light"
                      ? "var(--gray-color)"
                      : "var(--white-color)"
                }}>My Creative <span  style={{
                  color:
                    props.mode === "light"
                      ? "var(--secondary-color)"
                      : "var(--lightblue-color)"
                }}>Project </span>Section</h1>
      <motion.div
      transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__work-portfolio">
        {works.map((work, index)=>(
          <div className="app__work-item app__flex" style={{
            backgroundColor:
              props.mode === "light"
                ? "var(--white-color)"
                : "rgba(25,25,112,0.9)"
          }} key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
              whileHover={{opacity: [0,1]}}
              transition={{duration: 0.25, staggerChildren: 0.5, ease: 'easeInOut'}}
              className= "app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel='noreferrer'>
                  <motion.div
                  whileInView={{scale: [0,1]}}
                  whileHover={{opacity: [1,0.7]}}
                  transition={{duration: 0.25}}
                  className= "app__flex"
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel='noreferrer'>
                  <motion.div
                  whileInView={{scale: [0,1]}}
                  whileHover={{opacity: [1,0.7]}}
                  transition={{duration: 0.25}}
                  className= "app__flex"
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" style={{
                  color:
                    props.mode === "light"
                      ? "var(--secondary-color)"
                      : "var(--lightblue-color)"
                }}>{work.title}</h4>
              <p className="p-text" style={{
                  color:
                    props.mode === "light"
                      ? "var(--black-color)"
                      : "var(--white-color)",
                      marginTop: "10p "
                }}>{work.description}</p>

            </div>
            <div
              className= "app__work-hover-phone app__flex">
                <a href={work.projectLink} target="_blank" rel='noreferrer'>
                  <motion.div
                  whileInView={{scale: [0,1]}}
                  transition={{duration: 0.25}}
                  className= "app__flex"
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel='noreferrer'>
                  <motion.div
                  whileInView={{scale: [0,1]}}
                  transition={{duration: 0.25}}
                  className= "app__flex"
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </div>
          </div>
          
        ))}

      </motion.div>
    </div>
  )
} 

export default Work