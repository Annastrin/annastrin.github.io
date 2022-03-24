import { createUseStyles } from "react-jss";
import { fonts, colors } from "../../styleguide";

export const useStyles = createUseStyles({
  "@font-face": [
    {
      fontFamily: "Gwendolyn",
      src: "url(https://fonts.gstatic.com/s/gwendolyn/v3/qkBSXvoO_M3CSss-d7emWLtfnyTG.woff2) format('woff2')",
      fontWeight: 700,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Merriweather",
      src: "url(https://fonts.gstatic.com/s/merriweather/v28/u-4m0qyriQwlOrhSvowK_l5-eRZOf-I.woff2) format('woff2')",
      fontStyle: "italic",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Merriweather",
      src: "url(https://fonts.gstatic.com/s/merriweather/v28/u-4l0qyriQwlOrhSvowK_l5-eR71Wvf4jvw.woff2) format('woff2')",
      fontWeight: "bold",
      fontStyle: "italic",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Raleway",
      src: "url(https://fonts.gstatic.com/s/raleway/v26/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrE.woff2) format('woff2')",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Raleway",
      src: "url(https://fonts.gstatic.com/s/raleway/v26/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4WjMDrMfIA.woff2) format('woff2')",
      fontStyle: "italic",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Raleway",
      src: "url(https://fonts.gstatic.com/s/raleway/v26/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVsEpbCIPrE.woff2) format('woff2')",
      fontWeight: 600,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Raleway",
      src: "url(https://fonts.gstatic.com/s/raleway/v26/1Pt_g8zYS_SKggPNyCgSQamb1W0lwk4S4bbLDrMfIA.woff2) format('woff2')",
      fontWeight: 600,
      fontStyle: "italic",
      fontDisplay: "swap",
    },
  ],
  "@global": {
    "*": {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
      backgroundColor: colors.mainBackground,
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
      height: "auto",
    },
  },
  app: {
    paddingBottom: 100,
  },
});
