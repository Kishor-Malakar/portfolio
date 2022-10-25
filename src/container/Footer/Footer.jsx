import React, {useState} from 'react';
import {images} from "../../constants";
import {client} from "../../client";
import './Footer.scss';

function Footer(props) {
  const [formData, setFormData] = useState({name:'', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {name, email, message} = formData;

  const handleChangeInput = (e) =>{
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  }

  const handleSubmit =()=>{
    setLoading(true); 

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(()=>{
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <div id='footerMain' style={{backgroundImage: props.mode==="light"? `url(${images.bgIMG})`:`url(${images.bgIMG7})`}}>
      <h2 className="head-text" style={{
          color:
            props.mode === "light" ? "var(--gray-color)" : "var(--white-color)",
        }}>Take a deep breath<span style={{
          color:
            props.mode === "light"
              ? "var(--secondary-color)"
              : "var(--lightblue-color)",
        }}> &</span> Chat with Me</h2>

        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:malakarkishor24@gmail.com" className='p-text'>malakarkishor24@gmail</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="mobile"/>
            <a href="tel: +91 (986) 357-7542" className='p-text'>+91 (986) 357-7542</a>
          </div>
        </div>
        {!isFormSubmitted? <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your Name' value={name} onChange={handleChangeInput} name="name"/>
          </div>
          <div className="app__flex">
            <input type="email" className="p-text" placeholder='Your Email' value={email} onChange={handleChangeInput} name="email"/>
          </div>
          <div className='app__flex'>
            <textarea className="p-text" placeholder='Your Message' value={message} name="message" onChange={handleChangeInput}/>
          </div>
          <button className='p-text' type='button' onClick={handleSubmit}>{loading? "Sending":"Send Message"}</button>
        </div> 
        :
        <div>
          <h3 className='head-text' style={{
          color:
            props.mode === "light" ? "var(--black-color)" : "var(--lightblue-color)",
        }}>Thank You for getting in touch.</h3>
        </div>
        }
    </div>
  )
}

export default Footer