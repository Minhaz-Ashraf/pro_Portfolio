import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import "./home.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { useTheme } from "../../Context/ThemeContext";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsFacebook,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import Bounce from "react-reveal/Bounce";
import Design from "../../components/Design";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>

        <div className="container home-content">
          <h1>Hi I'm a</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "Web Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              // href="https://api.whatsapp.com/send?phone=7319647009"
              href="https://calendly.com/minhazashraf/1-1-meeting"
              rel="noreferrer"
              target="_blank"
            >
              Book a Discovery Call
            </a>
            <a className="btn btn-cv" href={Resume} download="your_name.pdf">
              My Resume
            </a>
            </div>
            <div className="home-icons">
              <a
                href="https://www.linkedin.com/in/minhaz-ashraf-117975267/"
                target="_blank"
                rel="noopener"
              >
                <BsLinkedin size={30} className="ms-2" />
              </a>
              <a
                href="https://twitter.com/Minhaz_A1"
                target="_blank"
                rel="noopener"
              >
                {" "}
                <AiFillTwitterCircle size={35} className="ms-2" />
              </a>
              <a
                href="https://www.facebook.com/minhaz.ashraf.1"
                target="_blank"
                rel="noopener"
              >
                {" "}
                <BsFacebook size={30} className="ms-2" />
              </a>
              <a
                href="https://www.instagram.com/its_minhaz_ashraf/"
                target="_blank"
                rel="noopener"
              >
                {" "}
                <FaInstagramSquare size={30} className="ms-2" />
              </a>
              <a
                href="https://github.com/Minhaz-Ashraf?tab=repositories"
                target="_blank"
                rel="noopener"
              >
                {" "}
                <BsGithub size={30} className="ms-2" />
              </a>
              <a
                href="https://github.com/Minhaz-Ashraf?tab=repositories"
                target="_blank"
                rel="noopener"
              >
                {" "}
                <FaYoutube size={30} className="ms-2" />
              </a>
            </div>

            <Design />
       
        </div>
        <Bounce top>
          <div className="homeimg"></div>
        </Bounce>
      </div>
    </>
  );
};

export default Home;
