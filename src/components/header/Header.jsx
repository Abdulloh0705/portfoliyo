import React from "react";
// import "./header.scss";

const  Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_box">
            <div className="header_esse">
              <h1 className="header_title">
                Salom Bu Men Xojiakbarov Abdulloh
              </h1>
              <p className="header_text">Frontend Dasturchi</p>
            </div>
            <div className="header_img">
              <img className="img_izana" src="./salom.png" alt="Odam Rasmi" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
