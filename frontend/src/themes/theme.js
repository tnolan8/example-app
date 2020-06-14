import { createMuiTheme } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
import grey from "@material-ui/core/colors/grey";

const primary = yellow[800];
const secondary = yellow[400];

export default createMuiTheme({
  palette: {
    common: {
      primary: `${primary}`,
      secondary: `${secondary}`,
    },
    primary: {
      main: `${primary}`,
    },
    secondary: {
      main: `${secondary}`,
    },
    background: {
      paper: grey["A400"],
      default: grey[900],
      light: grey[700],
    },
    text: {
      primary: grey[50],
      secondary: "#BCBCBC",
    },
  }, // END OF PALETTE

  typography: {
    fontFamily: "Montserrat,Roboto,Arial",
    fontSize: 14,
    h1: {
      fontFamily: "Monterrat,Roboto,Arial",
      fontWeight: 700,
      fontSize: 96,
      letterSpacing: "-1.5px",
    },
    h2: {
      fontFamily: "Montserrat,Open Sans,Roboto,Arial",
      fontWeight: 400,
      fontSize: 60,
      letterSpacing: "0px",
    },
    h3: {
      fontFamily: "Montserrat,Roboto,Arial",
      fontWeight: 500,
      fontSize: 48,
      letterSpacing: "-1.5px",
    },
    h4: {
      fontFamily: "Montserrat,Roboto,Arial",
      fontWeight: 500,
      fontSize: 34,
      letterSpacing: "0.25px",
    },
    h5: {
      fontFamily: "Montserrat,Roboto,Arial",
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: "0px",
    },
    h6: {
      fontFamily: "Montserrat,Roboto,Arial",
      fontWeight: 300,
      fontSize: 20,
      letterSpacing: "0.15px",
    },
    subtitle1: {
      fontFamily: "Montserrat,Roboto,Arial",
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontFamily: "Montserrat,Roboto,Arial",
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: "0.1px",
    },
    body1: {
      fontFamily: "Roboto,Arial",
      lineHeight: 1.5,
      fontWeight: 300,
      fontSize: 16,
      letterSpacing: "0.1px",
    },
    body2: {
      fontFamily: "Roboto,Arial",
      lineHeight: 1.25,
      fontSize: 14,
      fontWeight: 300,
      letterSpacing: "0.25px",
    },
    caption: {
      fontFamily: "Montserrat,Roboto,Arial",
      fontSize: 12,
      letterSpacing: "0.4px",
    },
    overline: {
      fontFamily: "Montserrat,Roboto,Arial",
      fontSize: 10,
      letterSpacing: "1.5px",
    },
    tab: {
      fontFamily: "Montserrat,Roboto,Arial",
      fontSize: "1rem",
      fontWeight: 300,
      textTransform: "none",
    },

    chart: {
      title: {
        fontFamily: "Montserrat,Roboto,Arial",
        fontWeight: 500,
        fontSize: 24,
        letterSpacing: "0px",
      },
      subtitle: {
        fontFamily: "Montserrat,Roboto,Arial",
        color: grey[400],
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: "0.15px",
      },
      axisLable: {
        fill: grey[400],
        fontFamily: "Roboto,Arial",
        lineHeight: 1.5,
        fontWeight: 300,
        fontSize: 16,
        letterSpacing: "0.1px",
      },
      axisTick: {
        fontSize: "0.75em",
        fontWeight: 300,
        fill: grey[400],
        textAnchor: "middle",
        fontFamily: "Roboto, Sans",
      },

      key: {
        fontSize: "1em",
        fonWeight: 300,
        fill: grey[50],
        textAnchor: "middle",
        fontFamily: "Roboto, Sans",
      },
      dataLable: {
        fontSize: "1.3em",
        textWeight: 700,
        fill: grey[50],
        textAnchor: "middle",
        fontFamily: "Roboto, Sans",
      },
      dataLable2: {
        fontSize: "1em",
        textWeight: 300,
        fill: grey[400],
        textAnchor: "middle",
        fontFamily: "Roboto, Sans",
      },
    },
  },
});
