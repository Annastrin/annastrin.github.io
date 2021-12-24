import { createUseStyles } from "react-jss";
import { colors } from "../../styleguide";

const useStyles = createUseStyles({
  hero: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
    padding: 30,
    backgroundColor: colors.accent1,
    backgroundImage: `linear-gradient(to right, ${colors.accent1}, ${colors.accent2})`,
    color: colors.white,
    fontSize: 20,
  },
  heroContent: {
    textAlign: "center",
  },
  heroTitle: {
    marginTop: 0,
    marginBottom: 30,
    color: colors.white,
  },
});

export default useStyles;
