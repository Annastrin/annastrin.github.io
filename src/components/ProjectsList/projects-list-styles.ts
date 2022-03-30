import { createUseStyles } from "react-jss";
import { breakpoints } from "../../styleguide";

export const useStyles = createUseStyles({
  projectsList: {}, //  it's needed to use in breakpoint below
  [breakpoints.big]: {
    projectsList: {
      width: "80%",
      margin: "0 auto",
    },
  },
});
