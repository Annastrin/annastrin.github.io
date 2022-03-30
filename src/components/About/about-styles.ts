import { createUseStyles } from "react-jss";
import { breakpoints } from "../../styleguide";

export const useStyles = createUseStyles({
  about: {},
  content: {},
  section: {
    "&:not(:last-of-type)": {
      marginBottom: 30,
    },
  },
  [breakpoints.big]: {
    content: {
      maxWidth: "80%",
      margin: "0 auto",
    },
  },
});
