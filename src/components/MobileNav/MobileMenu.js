import React, { useState } from "react";
import { RiMenu2Line, RiMenuFoldLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { RiProjectorFill } from "react-icons/ri";
import { TiFlowMerge } from "react-icons/ti";
import { MdDesignServices, MdPermContactCalendar,MdWorkspacePremium } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";
import "./Mobilemenu.css"
const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  // handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <RiMenuFoldLine
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <RiMenu2Line
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">Minhaz Ashraf</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <AiFillHome />
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
                    onClick={handleMenuClick}
                  >
                    <BsInfoSquareFill size={23}/>
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <MdDesignServices />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <TiFlowMerge />
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
                    onClick={handleMenuClick}
                  >
                    <MdWorkspacePremium />
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
                    onClick={handleMenuClick}
                  >
                    <RiProjectorFill />
                    Testimonials
                  </Link>
                </div>
                {/* <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcPortraitMode />
                    Work Experince
                  </Link>
                </div> */}
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <TbNotes />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;