import useStyles from "./header-styles";

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <a href="./">
        <h1 className={classes.logo}>Anastasia Nesteryukova</h1>
      </a>
      <nav className={classes.nav}>
        <a href="#about" className={classes.navLink}>
          About
        </a>
        <a href="#projects" className={classes.navLink}>
          Projects
        </a>
        <a href="#contacts" className={classes.navLink}>
          Contacts
        </a>
      </nav>
    </header>
  );
}

export default Header;
