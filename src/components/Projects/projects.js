import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import useStyles from "./projects-styles";
import jobListingsImg from "./images/job-listings.png";
import todoAppImg from "./images/todo-app.png";

function Projects() {
  const classes = useStyles();
  return (
    <section className={classes.projects} id="projects">
      <h2>Projects</h2>
      <div className={classes.projectsList}>
        {/**  SECOND PROJECT */}
        <div className={classes.project}>
          <a
            href="https://annastrin.github.io/frontend-mentor-todo-app/"
            target="_blank"
            rel="noreferrer"
            className={classes.projectImg}
          >
            <img src={todoAppImg} alt="" />
          </a>
          <div className={classes.projectContent}>
            <h3 className={classes.projectName}>TODO App</h3>
            <div className={classes.projectDescription}>
              This is a working simple Todo app. It allows to add new tasks,
              mark them as completed, or delete them. This app also has a
              function to filter the tasks and clear all completed tasks.
            </div>
            <p className={classes.projectSubheading}>Technologies:</p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Emotion</li>
              <li>TypeScript</li>
              <li>Storybook</li>
              <li>Jest</li>
              <li>React Testing Library</li>
              <li>Cypress</li>
              <li>CircleCI</li>
            </ul>
            <div>
              <a
                href="https://annastrin.github.io/frontend-mentor-todo-app/"
                target="_blank"
                rel="noreferrer"
                className={classes.projectLink}
              >
                Website
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/Annastrin/frontend-mentor-todo-app"
                target="_blank"
                rel="noreferrer"
                className={classes.projectLink}
              >
                Code
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        {/**  FIRST PROJECT */}
        <div className={classes.project}>
          <a
            href="https://annastrin.github.io/job-listings/"
            target="_blank"
            rel="noreferrer"
            className={classes.projectImg}
          >
            <img src={jobListingsImg} alt="" />
          </a>
          <div className={classes.projectContent}>
            <h3 className={classes.projectName}>Job listings</h3>
            <div className={classes.projectDescription}>
              This is an example of a job listing page implemented as a
              challenge on Frontend Mentor platform with their designs.
            </div>
            <p className={classes.projectSubheading}>Technologies:</p>
            <ul>
              <li>React</li>
              <li>React-JSS</li>
            </ul>
            <div>
              <a
                href="https://annastrin.github.io/job-listings/"
                target="_blank"
                rel="noreferrer"
                className={classes.projectLink}
              >
                Website
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/Annastrin/job-listings"
                target="_blank"
                rel="noreferrer"
                className={classes.projectLink}
              >
                Code
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
