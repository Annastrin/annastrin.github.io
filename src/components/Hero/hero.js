import useStyles from "./hero-styles";

function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <h2 className={classes.heroTitle}>
          I'm a <span>&#60;Frontend Developer&#47;&#62;</span>
        </h2>
        <p>I will make your beautiful designs work.</p>
      </div>
    </div>
  );
}

export default Hero;
