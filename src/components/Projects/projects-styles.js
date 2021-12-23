import { createUseStyles } from "react-jss";
import { colors } from "../../styleguide";

const useStyles = createUseStyles({
  projects: {},
  project: {
    display: "flex",
    padding: "30px 0",
    boxShadow: `0 0 5px ${colors.grey}`,
    backgroundColor: colors.white,
    "&:not(:last-of-type)": {
      marginBottom: 30,
    },
  },
  projectImg: {
    maxWidth: "40%",
    margin: "0 30px",
  },
  projectDescription: {
    marginBottom: 20,
  },
  projectSubheading: {
    fontWeight: 600,
    fontStyle: "italic",
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
      color: colors.accent1,
      transition: "all 0.3s",
    },

    "&:hover svg": {
      color: colors.white,
    },
  },
});

export default useStyles;
