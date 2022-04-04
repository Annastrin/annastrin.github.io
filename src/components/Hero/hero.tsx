import { useStyles } from "./hero-styles";

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <div className={classes.content}>
        <h2 className={classes.title}>
          I&#39;m a <span>{`<Frontend Developer/>`}</span>
        </h2>
        <p>I will make your beautiful designs work.</p>
      </div>
    </div>
  );
};

export default Hero;
