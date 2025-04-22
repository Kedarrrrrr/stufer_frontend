import "./LeftBar.css";
import { GoHomeFill } from "react-icons/go";
import { FiBell } from "react-icons/fi";

import { IoPerson } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import CreatePost from "../../pages/add post/CreatePost";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import AddPostPopup from "./AddPostPopup";

const LeftBar = () => {

    //Logout Popup
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <>
      <div className="container" style={{ width: "10%" }}>
        <div className="profile">
          <div className="profile-items">
            <Link to={"/"}><GoHomeFill /></Link>
            <FiBell />
            
            <AddPostPopup />

            <Link to={"/profile"}><IoPerson/></Link>


           
              {isOpen && (
                
                <div className="popup-overlay">
                  <div className="popup-box">
                    <h2 style={{fontSize:"22px", marginBottom:"1rem"}}>LOG-OUT</h2>
                    <p style={{fontSize:"16px", marginBottom:"1rem"}}>Do you want to Log out ?</p>
                    <Link to={"/Login"}><button className="log-out-button-logout"> log-out </button></Link>
                    <button
                      className="log-out-button-cancel"
                      onClick={togglePopup}
                    >
                      {" "}
                      cancel{" "}
                    </button>
                  </div>
                </div>
               
              )}
            
            <IoLogOutOutline onClick={togglePopup} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
