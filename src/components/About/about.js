import useStyles from "./about-styles";

function About() {
  const classes = useStyles();
  return (
    <section className={classes.about} id="about">
      <h2>About me</h2>
      <div className={classes.aboutContent}>
        <div className={classes.aboutSection}>
          <h3>Skills</h3>
          <p>In my projects I usually use:</p>
          <ul>
            <li>HTML</li>
            <li>CSS | SCSS | JSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
          <p>But I also used in my projects some Redux, TypeScript, Vue.</p>
        </div>
        <div className={classes.aboutSection}>
          <h3>Education</h3>
          <p>I'm a self-taught developer gained the skills here:</p>
          <ul>
            <li>FreeCodeCamp</li>
            <li>Codecademy</li>
            <li>Harvard's CS50 on Coursera</li>
            <li>Internship at ADCI Solutions</li>
          </ul>
        </div>
        <div className={classes.aboutSection}>
          <h3>Experience</h3>
          <p>I have 7 months of commercial development experience.</p>
          <p>At my job I worked on:</p>
          <ul>
            <li>Frontend part of Drupal themes</li>
            <li>
              Migration projects from Drupal 7 to Drupal 8 (Frontend part)
            </li>
            <li>Hobspot email styling projects</li>
            <li>UI bug fixes, etc.</li>
          </ul>
          <p>
            On a daily basis I communicated with other developers, managers, and
            designers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
