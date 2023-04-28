import React from "react";
import './index.scss';
import Project from "../../components/Project/Project";
import { projects } from "./projects";

const ProjectsPage = () => {
    return (
        <div className="projectsPage">
            <div>
            </div>
            <div>
                {projects.map((project, index) => <Project key={index} project={project}/>)}
            </div>
        </div>
    )
};

export default ProjectsPage;