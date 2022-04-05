import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "../ExternalLink";
import { useStyles } from "./project-styles";

interface ProjectProjs {
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

const Project = (props: ProjectProjs) => {
  const classes = useStyles();
  const {
    image,
    imageWidth,
    imageHeight,
    name,
    description,
    technologies,
    link,
    code,
  } = props;

  return (
    <div className={classes.project}>
      <ExternalLink href={link} className={classes.image}>
        {`Visit ${name}`}
        <img src={image} alt="" width={imageWidth} height={imageHeight} />
      </ExternalLink>
      <div className={classes.content}>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <p className={classes.subheading}>Technologies:</p>
        <ul className={classes.technologies}>
          {technologies.map((el) => (
            <li key={el.text}>{el.text}</li>
          ))}
        </ul>
        <div>
          <ExternalLink href={link} className={classes.link}>
            Website
            <FiExternalLink />
          </ExternalLink>
          <ExternalLink href={code} className={classes.link}>
            Code
            <FaGithub />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default Project;
