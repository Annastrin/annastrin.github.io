import useStyles from "./about-styles";

function About() {
  const classes = useStyles();
  return (
    <section className={classes.about} id="about">
      <h2>About me</h2>
      <p>I'm a self-taught developer with commercial experience.</p>
    </section>
  );
}

export default About;
