import React, {useState, useEffect} from 'react'

import './About.scss';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { urlFor, client} from '../../client'
// import {AppWrap} from "../../wrapper"
// const abouts = [
//   {title: "Web Designer", description: "Hello I am a Web Designer", imgUrl: images.about01},
//   {title: "Web Developer", description: "Hello I am a Web Developer", imgUrl: images.about02},
//   {title: "Java Developer", description: "Hello I am a Java Designer", imgUrl: images.about04},
//   {title: "Competitive Coder", description: "Hello I am a Competitive Coder", imgUrl: images.about03}
// ]


function About(props) {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) =>setAbouts(data))
  }, []); 
  

  return (
    <div id='aboutMain' style={{backgroundImage: props.mode==="light"? `url(${images.bgIMG})`:`url(${images.bgIMG4})`}}>
    <h1 className="head-text"  style={{
                  color:
                    props.mode === "light"
                      ? "var(--gray-color)"
                      : "var(--white-color)"
                }}>I Know That <span  style={{
                  color:
                    props.mode === "light"
                      ? "var(--secondary-color)"
                      : "var(--lightblue-color)"
                }}>Good Development </span>Means <span  style={{
                  color:
                    props.mode === "light"
                      ? "var(--secondary-color)"
                      : "var(--lightblue-color)"
                }}>Good Business</span></h1>
      <div className="app__profile" >
      {abouts.map((about,index)=>(
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title}/>  
              <h2 className='bold-text'  style={{
                  color:
                    props.mode === "light"
                      ? "var(--secondary-color)"
                      : "var(--lightblue-color)",
                      marginTop: "20px"
                }}>{about.title}</h2>
              <p className='p-text'  style={{
                  color:
                    props.mode === "light"
                      ? "var(--black-color)"
                      : "var(--white-color)",
                      marginTop: "10px"
                }}>{about.description}</p>

          </motion.div>
          
        ))}
      </div>
    </div>
  )
} 

// export default AppWrap(About)
export default About;