import React from "react";
import './index.scss';

const Project = ({project}) => {
    return (
        <div className="project">
            <div className="header">
                <h2 onClick={() => window.open(project?.link, '_blank')}>{project?.title}</h2>
            </div>
            <div className="projectContent">
                <div className="thumbnail">
                    <img src={project?.img} />
                </div>
                <div className="description">
                    <p>{project?.description}</p>
                </div>
            </div>
            <div className="tagContainer">
                {project?.tags.map((tag, index) => <div key={index} className="tag" style={{backgroundColor: tag?.color}}>{tag?.label}</div>)}
            </div>
        </div>
    )
};

export default Project;