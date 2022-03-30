import { createUseStyles } from "react-jss";
import { colors, breakpoints } from "../../styleguide";

export const useStyles = createUseStyles({
  project: {
    padding: 30,
    boxShadow: `0 0 5px ${colors.boxShadow}`,
    backgroundColor: colors.secondaryBackground,
    "&:not(:last-of-type)": {
      marginBottom: 30,
    },
  },
  image: {
    display: "block",
    marginBottom: 30,
    fontSize: 0,
    color: "transparent",
  },
  description: {
    marginBottom: 20,
  },
  subheading: {
    fontWeight: 600,
    fontStyle: "italic",
  },
  technologies: {
    margin: "0 -5px 20px",
    "& li": {
      display: "inline-block",
      margin: [5, 5],
      padding: [5, 10],
      backgroundColor: colors.accent3,
      color: colors.secondaryText,
      fontWeight: 600,
    },
    "& li::before": {
      display: "none",
    },
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    padding: "5px 10px",
    borderRadius: 10,
    border: `3px solid ${colors.accent1}`,
    color: colors.accent1,
    fontWeight: 600,
    transition: "all 0.3s",

    "&:not(:last-of-type)": {
      marginRight: 10,
    },

    "&:hover": {
      backgroundColor: colors.accent1,
      color: colors.secondaryText,
    },

    "& svg": {
      marginLeft: 5,
      transition: "all 0.3s",
    },
  },
  content: {}, // it's needed to use in breakpoint below
  [breakpoints.big]: {
    project: {
      display: "flex",
    },
    image: {
      alignSelf: "flex-start",
      width: "40%",
    },
    content: {
      width: "60%",
      paddingLeft: 30,
    },
  },
});
