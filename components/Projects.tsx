import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div>
      Projects
      <ProjectCard
        project={{
          name: "hello",
          description: "hello",
          image: "/work/1.png",
          link: "f",
          github: "h",
        }}
      />
    </div>
  );
}

export default Projects;
