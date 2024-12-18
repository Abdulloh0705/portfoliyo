import React from "react";
import NavSwiper from "./NavSwiper/NavSwiper";
// import "./header.scss";

const  Header = () => {
  return (
    <>
      <div id="home" className="header">
        <div className="container">
          <div className="header_box">
            <div className="header_esse">
              <h1 className="header_title">
                Hello Everyone I'm Abdulloh 
              </h1>
              <p className="header_text">Frontend Developer</p>
            </div>
            <div className="header_img">
           <div className="img_izana">
           <NavSwiper/>
           </div>
              {/* <img className="img_izana" src="./salom.png" alt="Odam Rasmi" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
