import { createUseStyles } from "react-jss";
import { fonts, colors } from "../../styleguide";
import Gwendolyn from "../../fonts/Gwendolyn/Gwendolyn-Bold.ttf";
import MerriweatherItalic from "../../fonts/Merriweather/Merriweather-Italic.ttf";
import MerriweatherBoldItalic from "../../fonts/Merriweather/Merriweather-BoldItalic.ttf";
import Raleway from "../../fonts/Raleway/Raleway-Regular.ttf";
import RalewayItalic from "../../fonts/Raleway/Raleway-Italic.ttf";
import RalewaySemiBold from "../../fonts/Raleway/Raleway-SemiBold.ttf";
import RalewaySemiBoldItalic from "../../fonts/Raleway/Raleway-SemiBoldItalic.ttf";

export const useStyles = createUseStyles({
  "@font-face": [
    {
      fontFamily: "Gwendolyn",
      src: `url(${Gwendolyn}) format('truetype')`,
      fontWeight: "bold",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Merriweather",
      src: `url(${MerriweatherItalic}) format('truetype')`,
      fontStyle: "italic",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Merriweather",
      src: `url(${MerriweatherBoldItalic}) format('truetype')`,
      fontWeight: "bold",
      fontStyle: "italic",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Raleway",
      src: `url(${Raleway}) format('truetype')`,
    },
    {
      fontFamily: "Raleway",
      src: `url(${RalewayItalic}) format('truetype')`,
      fontStyle: "italic",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Raleway",
      src: `url(${RalewaySemiBold}) format('truetype')`,
      fontWeight: 600,
      fontDisplay: "swap",
    },
    {
      fontFamily: "Raleway",
      src: `url(${RalewaySemiBoldItalic}) format('truetype')`,
      fontWeight: 600,
      fontStyle: "italic",
      fontDisplay: "swap",
    },
  ],
  "@global": {
    "*": {
      boxSizing: "border-box",
    },
    html: {
      fontSize: "16px",
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
      fontSize: "3rem",
      marginBottom: 30,
    },
    h2: {
      fontSize: "2rem",
      marginBottom: 30,
    },
    h3: {
      fontSize: "1.625rem",
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
        fontSize: "0.625rem",
        color: colors.accent3,
      },
    },
    img: {
      display: "block",
      width: "100%",
      height: "auto",
    },
  },
});
