import React from 'react'
import "./poject.scss";
import ProjectSwiper from './projectswiper/ProjectSwiper';
const Project = () => {
    return (
        <>
            <div id="project" className="project">
                <div className="container">
                    <div className="project_box">
                        <h2 className="project_title">Project</h2>
                        <div className="project_skil">
                            <ProjectSwiper/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
