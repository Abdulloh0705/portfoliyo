import React from 'react'
// import "../Skills/skills.scss"
import AutoSwiper from './swiper/AutoSwiper'
const Skills = () => {
    return (
        <>
            <div id="skills" className="skills">
                <div className="container">
                    <div className="skills_box">
                        <h2 className="skills_title">
                            Skills
                        </h2>
                        <div className="swiper">
                           <AutoSwiper/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
