import React from "react";
import "./About.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <motion.img src="/images/makl.png" alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-7 col-lg-7 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Hi, I'm Minhaz Ashraf, a dedicated software developer passionate
              about crafting engaging digital experiences. With expertise in
              both website and app design and development, I bring ideas to life
              with a touch of innovation and functionality. My journey in the
              tech realm is fueled by a commitment to turning visions into
              reality, ensuring each project is a seamless blend of aesthetics
              and performance. Leveraging the latest industry trends, I
              specialize in creating solutions that not only meet but exceed
              client expectations. Join me on this digital journey,
              where your ideas become interactive and your online presence
              becomes an experience. Let's build something exceptional together!
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default About;
