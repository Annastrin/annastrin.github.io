import { createUseStyles } from "react-jss";
import { colors } from "../../styleguide";

export const useStyles = createUseStyles({
  footer: {
    padding: "10px 0",
    backgroundColor: colors.accent3,
    color: colors.secondaryText,
    textAlign: "center",
    fontSize: "0.875rem",

    "& a": {
      color: colors.secondaryText,
    },
  },
});
