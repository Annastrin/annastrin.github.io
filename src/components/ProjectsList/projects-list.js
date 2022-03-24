import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Project } from "../Project";
import { useStyles } from "./projects-list-styles";

function ProjectsList() {
  const [prismicProjects] = useAllPrismicDocumentsByType("project", {
    orderings: ["my.project.project_creation_date desc"],
  });
  const classes = useStyles();

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className={classes.projectsList}>
        {prismicProjects &&
          prismicProjects.map((el) => (
            <Project
              key={el.id}
              img={el.data.project_image}
              name={el.data.project_name}
              description={el.data.project_description}
              technologies={el.data.project_technologies}
              link={el.data.project_website_link}
              code={el.data.project_code_link}
            />
          ))}
      </div>
    </section>
  );
}

export default ProjectsList;
