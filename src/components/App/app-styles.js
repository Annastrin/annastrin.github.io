import { createUseStyles } from "react-jss";
import { fonts, colors } from "../../styleguide";

const useStyles = createUseStyles({
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Gwendolyn:wght@700&family=Merriweather:ital,wght@1,400;1,700&family=Raleway:ital,wght@0,400;0,600;1,400;1,600&display=swap')",
  "@global": {
    "*": {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
      backgroundColor: colors.mainBg,
      color: colors.mainText,
      fontFamily: fonts.primary,
      lineHeight: 1.5,
    },
    section: {
      display: "block",
      padding: "60px 25px 0",

      "& h2": {
        textAlign: "center",
      },
    },
    "h1, h2": {
      marginTop: 0,
      fontFamily: fonts.secondary,
      lineHeight: 1,
    },
    "h3, h4, h5, h6": {
      marginTop: 0,
      lineHeight: 1,
      fontWeight: 600,
    },
    h1: {
      fontSize: 48,
      marginBottom: 30,
    },
    h2: {
      fontSize: 32,
      marginBottom: 30,
    },
    h3: {
      fontSize: 26,
    },
    a: {
      color: colors.mainText,
      textDecoration: "none",
    },
    p: {
      marginTop: 0,
      marginBottom: 10,
      lineHeight: 1.5,
    },
    ul: {
      marginTop: 0,
      paddingLeft: 0,
      listStyle: "none",

      "& li": {
        position: "relative",
        paddingLeft: 20,
      },

      "& li::before": {
        content: '"\\25A0"',
        display: "inline-block",
        position: "absolute",
        top: "50%",
        left: 0,
        width: "10px",
        height: "16px",
        marginTop: "-8px",
        fontSize: 10,
        color: colors.accent3,
      },
    },
    img: {
      display: "block",
      width: "100%",
    },
  },
  app: {
    paddingBottom: 100,
  },
});

export default useStyles;
