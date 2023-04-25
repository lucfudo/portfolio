import React from "react";
import './index.scss';

const Project = ({project}) => {
    return (
        <div className="project">
            <div className="header">
                <h2 onClick={() => window.open(project?.link, '_blank')}>{project?.title}</h2>
                {project?.tags.map((tag) => <div className="tag" style={{backgroundColor: tag?.color}}>{tag?.label}</div>)}
            </div>
            <div className="projectContent">
                <div className="thumbnail">
                    <img src={project?.img} />
                </div>
                <p>{project?.description}</p>
            </div>
        </div>
    )
};

export default Project;