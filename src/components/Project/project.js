import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "../ExternalLink";
import { useStyles } from "./project-styles";

function Project(props) {
  const classes = useStyles();
  return (
    <div className={classes.project}>
      <ExternalLink href={props.link.url} className={classes.image}>
        {`Visit ${props.name[0].text}`}
        <img
          src={props.img.url}
          alt=""
          width={props.img.dimensions.width}
          height={props.img.dimensions.height}
        />
      </ExternalLink>
      <div className={classes.content}>
        <h3>{props.name[0].text}</h3>
        <div className={classes.description}>{props.description[0].text}</div>
        <p className={classes.subheading}>Technologies:</p>
        <ul className={classes.technologies}>
          {props.technologies.map((el, i) => (
            <li key={i}>{el.text}</li>
          ))}
        </ul>
        <div>
          <ExternalLink href={props.link.url} className={classes.link}>
            Website
            <FiExternalLink />
          </ExternalLink>
          <ExternalLink href={props.code.url} className={classes.link}>
            Code
            <FaGithub />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}

export default Project;
