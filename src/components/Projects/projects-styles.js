import { createUseStyles } from "react-jss";
import { colors, bp } from "../../styleguide";

const useStyles = createUseStyles({
  projectsList: {}, //it's needed for usage below
  [bp.big]: {
    projectsList: {
      width: "80%",
      margin: "0 auto",
    },
  },
});

export default useStyles;
