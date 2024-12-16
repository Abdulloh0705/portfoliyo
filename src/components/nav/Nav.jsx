import React from 'react'
import "./nav.scss"
import { TbMenuOrder } from 'react-icons/tb'

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className="container">
        <div className="btn_box">
           <button className="nav_btn">
              <div className="btn_icon">
                <TbMenuOrder />
              </div>
            </button>
           </div>
          <div className="nav__box">
          
            <ul className="nav__list">
              <li className="nav__item"><a href="" className="nav__link">Home</a></li>
              <li className="nav__item"><a href="#section" className="nav__link">About Me</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            </ul>
            <a href="">
              <h2 className="nav__logo">Z</h2>
            </a>
            <ul className="nav__list">
              <li className="nav__item"><a href="#project" className="nav__link">Projects</a></li>
              <li className="nav__item"><a href="#feed" className="nav__link">Feedback</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
