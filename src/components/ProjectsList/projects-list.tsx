import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Project } from "../Project";
import { useStyles } from "./projects-list-styles";

const ProjectsList = () => {
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
              key={`project-${el.id}`}
              image={el.data.project_image.url}
              imageWidth={el.data.project_image.dimensions.width}
              imageHeight={el.data.project_image.dimensions.height}
              name={el.data.project_name[0].text}
              description={el.data.project_description[0].text}
              technologies={el.data.project_technologies}
              link={el.data.project_website_link.url}
              code={el.data.project_code_link.url}
            />
          ))}
      </div>
    </section>
  );
};

export default ProjectsList;
