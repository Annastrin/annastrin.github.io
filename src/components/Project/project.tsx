import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "../ExternalLink";
import { useStyles } from "./project-styles";

interface ProjectProjs {
  key: string;
  image: string;
  imageWidth: string;
  imageHeight: string;
  name: string;
  description: string;
  technologies: {
    text: string;
  }[];
  link: string;
  code: string;
}

function Project(props: ProjectProjs) {
  const classes = useStyles();
  return (
    <div className={classes.project}>
      <ExternalLink href={props.link} className={classes.image}>
        {`Visit ${props.name}`}
        <img
          src={props.image}
          alt=""
          width={props.imageWidth}
          height={props.imageHeight}
        />
      </ExternalLink>
      <div className={classes.content}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <p className={classes.subheading}>Technologies:</p>
        <ul className={classes.technologies}>
          {props.technologies.map((el, i) => (
            <li key={i}>{el.text}</li>
          ))}
        </ul>
        <div>
          <ExternalLink href={props.link} className={classes.link}>
            Website
            <FiExternalLink />
          </ExternalLink>
          <ExternalLink href={props.code} className={classes.link}>
            Code
            <FaGithub />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}

export default Project;
