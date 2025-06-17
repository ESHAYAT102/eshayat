import ProjectCard from "./ProjectCard";
import { projects, ProjectProps } from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
  return (
    <>
      <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16  lg:mb-20 ">
        <h3
          className={`text-[16px] md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}
        >
          Check out some of my work!
        </h3>
      </div>

      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-x-6 gap-y-10 lg:max-w-[1200px] lg:grid-cols-1">
        {projects.map((project: ProjectProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
