import { createUseStyles } from "react-jss";
import { colors } from "../../styleguide";

export const useStyles = createUseStyles({
  contacts: {
    textAlign: "center",
    "& p": {
      fontSize: 20,
      marginBottom: 25,
    },
  },
  socials: {
    "& a": {
      margin: [0, 10],
      fontSize: 0,
      transition: "all 0.3s",

      "&:hover": {
        opacity: 0.7,
      },

      "& svg": {
        fontSize: 34,
        color: colors.accent1,
      },
    },
  },
});
