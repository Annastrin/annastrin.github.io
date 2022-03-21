import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import useStyles from "./project-styles";

function Project(props) {
  const classes = useStyles();
  return (
    <div className={classes.project}>
      <a
        href={props.link.url}
        target="_blank"
        rel="noreferrer"
        className={classes.projectImg}
      >
        {`Visit ${props.name[0].text}`}
        <img
          src={props.img.url}
          alt=""
          width={props.img.dimensions.width}
          height={props.img.dimensions.height}
        />
      </a>
      <div className={classes.projectContent}>
        <h3 className={classes.projectName}>{props.name[0].text}</h3>
        <div className={classes.projectDescription}>
          {props.description[0].text}
        </div>
        <p className={classes.projectSubheading}>Technologies:</p>
        <ul className={classes.projectTechnologies}>
          {props.technologies.map((el, i) => (
            <li key={i}>{el.text}</li>
          ))}
        </ul>
        <div>
          <a
            href={props.link.url}
            target="_blank"
            rel="noreferrer"
            className={classes.projectLink}
          >
            Website
            <FiExternalLink />
          </a>
          <a
            href={props.code.url}
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
  );
}

export default Project;
