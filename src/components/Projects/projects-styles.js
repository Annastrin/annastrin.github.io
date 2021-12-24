import { createUseStyles } from "react-jss";
import { colors, bp } from "../../styleguide";

const useStyles = createUseStyles({
  projects: {},
  projectsList: {},
  project: {
    padding: 30,
    boxShadow: `0 0 5px ${colors.grey}`,
    backgroundColor: colors.white,
    "&:not(:last-of-type)": {
      marginBottom: 30,
    },
  },
  projectImg: {
    display: "block",
    marginBottom: 30,
  },
  projectContent: {},
  projectDescription: {
    marginBottom: 20,
  },
  projectSubheading: {
    fontWeight: 600,
    fontStyle: "italic",
  },
  projectTechnologies: {
    margin: "0 -5px 20px",
    "& li": {
      display: "inline-block",
      margin: [5, 5],
      padding: [5, 10],
      backgroundColor: colors.accent3,
      color: colors.white,
    },
    "& li::before": {
      display: "none",
    },
  },
  projectLink: {
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
      color: colors.white,
    },

    "& svg": {
      marginLeft: 5,
      transition: "all 0.3s",
    },
  },
  [bp.big]: {
    projectsList: {
      width: "80%",
      margin: "0 auto",
    },
    project: {
      display: "flex",
    },
    projectImg: {
      alignSelf: "flex-start",
      width: "40%",
    },
    projectContent: {
      width: "60%",
      paddingLeft: 30,
    },
  },
});

export default useStyles;
