import { createUseStyles } from "react-jss";
import { bp } from "../../styleguide";

const useStyles = createUseStyles({
  about: {},
  aboutContent: {},
  aboutSection: {
    "&:not(:last-of-type)": {
      marginBottom: 30,
    },
  },
  [bp.big]: {
    aboutContent: {
      maxWidth: "80%",
      margin: "0 auto",
    },
  },
});

export default useStyles;
