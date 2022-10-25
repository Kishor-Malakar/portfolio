import React from "react";
import { BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://in.linkedin.com/in/kishor-malakar-757045203"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href="https://www.instagram.com/_oo.ge_/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>
      <a
        href="https://www.youtube.com/c/MrClueless"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsYoutube />
        </div>
      </a>
      <a
        href=" https://wa.me/+919863577542"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsWhatsapp />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
