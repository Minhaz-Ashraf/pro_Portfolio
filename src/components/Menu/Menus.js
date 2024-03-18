import React from "react";
import "./menus.css";
import { Link } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { RiProjectorFill } from "react-icons/ri";
import { TiFlowMerge } from "react-icons/ti";
import { MdDesignServices, MdPermContactCalendar,MdWorkspacePremium } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="/images/menu.png"
              alt="profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
              <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <AiFillHome size={25}/>
                  Home
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <BsInfoSquareFill size={20}/>
                  About
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                 <MdDesignServices/>
                  Service
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                 <TiFlowMerge />

                Work Process
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                 <MdWorkspacePremium />
                 Skills
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                 <RiProjectorFill />
                  Projects
                </Link>
              </div>
               <div className="nav-link">
              <Link
                  to="testo"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <TbNotes />
                  Testimonials
                </Link>
              </div> 
              <div className="nav-link">
              <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
              <MdPermContactCalendar />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
              <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                 <AiFillHome size={25}/>
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <BsInfoSquareFill size={20}/>
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdDesignServices />
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                 <TiFlowMerge />

                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                 <MdWorkspacePremium />
                </Link>
              </div>
              <div className="nav-link">
              <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
               <RiProjectorFill />
                </Link>
              </div>
               <div className="nav-link">
              <Link
                  to="testo"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <TbNotes />
                </Link>
              </div> 
              <div className="nav-link">
              <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                 <MdPermContactCalendar />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;