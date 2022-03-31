import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { ExternalLink } from "../ExternalLink";
import { useStyles } from "./contacts-styles";

const Contacts = () => {
  const classes = useStyles();
  return (
    <section className={classes.contacts} id="contacts">
      <h2>Contacts</h2>
      <p>You can get in touch with me via:</p>
      <div className={classes.socials}>
        <ExternalLink href="https://www.linkedin.com/in/anastasia-nesteryukova/">
          Linkedin
          <FaLinkedin />
        </ExternalLink>
        <a href="mailto:anastasia.nesteryukova@gmail.com">
          <FiMail />
          Email
        </a>
      </div>
    </section>
  );
};

export default Contacts;
