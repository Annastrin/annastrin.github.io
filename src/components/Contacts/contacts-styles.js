import { createUseStyles } from "react-jss";
import { colors } from "../../styleguide";

const useStyles = createUseStyles({
  contacts: {
    textAlign: "center",
    "& p": {
      fontSize: 20,
      marginBottom: 25,
    },
  },
  socials: {
    "& a": {
      margin: [0, 5],
      fontSize: 0,

      "& svg": {
        fontSize: 34,
        color: colors.accent1,
      },
    },
  },
});

export default useStyles;
