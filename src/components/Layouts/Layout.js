import React, { useState } from "react";
import Home from "../../Pages/Home/Home";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import "./layout.css";
import Menus from "../Menu/Menus";


const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };


  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p style={{display: "fix"}} onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft className="toggle-btn" size={30} />
              ) : (
                <CiCircleMore className="toggle-btn" size={25} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
     
        <div className="container">
          <Home/>
          
        </div>
      </div>
    </>
  );
};

export default Layout;