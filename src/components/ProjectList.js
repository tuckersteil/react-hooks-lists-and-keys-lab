import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectsArray = projects.map((project) => {
    return <ProjectItem 
      key={project.id} 
      name ={project.name} 
      about={project.abou} 
      technologies={project.technologies}/>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsArray}</div>
    </div>
  );
}

export default ProjectList;
