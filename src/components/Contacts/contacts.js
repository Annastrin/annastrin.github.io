import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useStyles } from "./contacts-styles";

function Contacts() {
  const classes = useStyles();
  return (
    <section className={classes.contacts} id="contacts">
      <h2>Contacts</h2>
      <p>You can get in touch with me via:</p>
      <div className={classes.socials}>
        <a
          href="https://www.linkedin.com/in/anastasia-nesteryukova/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
          <FaLinkedin />
        </a>
        <a href="mailto:anastasia.nesteryukova@gmail.com">
          <FiMail />
          Email
        </a>
      </div>
    </section>
  );
}

export default Contacts;
