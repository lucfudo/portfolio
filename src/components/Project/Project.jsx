import React from "react";
import './index.scss';

const Project = ({project}) => {
    const redirectToProject = (link) => {
        window.open(link, '_blank')
    }

    return (
        <div className="project">
            <div className="header" onClick={() => redirectToProject(project?.link)}>
                <h2>{project?.title}</h2>
            </div>
            <div className="thumbnail" onClick={() => redirectToProject(project?.link)}>
                <img src={project?.img} alt={project?.title} />
            </div>
            <div className="description">
                <p>{project?.description}</p>
            </div>
            <div className="tagContainer">
                {project?.tags.map((tag, index) => <div key={index} className="tag" style={{backgroundColor: tag?.color}}>{tag?.label}</div>)}
            </div>
        </div>
    )
};

export default Project;