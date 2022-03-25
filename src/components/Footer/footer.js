import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { ExternalLink } from "../ExternalLink";
import { useStyles } from "./footer-styles";

function Footer() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <p>&copy; {currentYear}, Annastrin</p>
      <ExternalLink href="https://github.com/Annastrin/portfolio">
        <FaGithub /> GitHub <FiExternalLink />
      </ExternalLink>
    </footer>
  );
}

export default Footer;
