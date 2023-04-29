import React from "react";
import Project from "../../components/Project/Project";
import { projects } from "./projects";
import './index.scss';

const ProjectsPage = () => {
    return (
        <div className="projectsPage">
            <div />
            <div className="projectsList">
                {projects.map((project, index) => <Project key={index} project={project}/>)}
            </div>
        </div>
    )
};

export default ProjectsPage;