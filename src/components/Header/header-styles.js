import { createUseStyles } from "react-jss";
import { fonts, colors } from "../../styleguide";

export const useStyles = createUseStyles({
  header: {
    minHeight: 60,
    padding: "40px 0",
    textAlign: "center",
  },
  logo: {
    fontFamily: fonts.accent,
    fontSize: "3.75rem",
    color: colors.accent2,
  },
  nav: {
    display: "flex",
    justifyContent: "center",
  },
  navLink: {
    display: "block",
    margin: "0 10px",
    padding: "5px 0",
    fontSize: "1.25rem",
    transition: "all 0.3s",

    "&:hover": {
      boxShadow: `0 3px ${colors.accent1}`,
    },
  },
});
