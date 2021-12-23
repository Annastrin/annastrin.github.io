import useStyles from "./header-styles";

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Anastasia Nesteryukova</h1>
      <nav className={classes.nav}>
        <a href="#about" className={classes.navLink}>
          About
        </a>
        <a href="#projects" className={classes.navLink}>
          Projects
        </a>
        <a href="#contact" className={classes.navLink}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
