import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  // --------------------------------------------------------------------------------
  // LAYOUT
  // --------------------------------------------------------------------------------
  root: {
    padding: 0,
  },

  // LANDING SKETCH
  landingSketch: {
    width: "100vw",
    height: "100vh",
    object: "cover",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  },

  socialMediaTag: {
    zIndex: theme.zIndex.modal + 10,
    maxWidth: 50,
    position: "fixed",
    left: 0,
    top: "50%",
    backgroundColor: theme.palette.secondary.main,
    borderTopRightRadius: "1em",
    borderBottomRightRadius: "1em",
  },
  iconLink: {
    color: "white",
    padding: theme.spacing(0.5),
    paddingRight: theme.spacing(1),
    "&:hover": {
      transform: "scale(1.5)",
    },
  },

  pageContainer: {},

  // HERO SECTION
  heroSection: {
    margin: "auto",
    minHeight: "95vh",
    maxWidth: "1200px",
    backgroundColor: "transparent",
    // backgroundColor: "white",
    // opacity: 0.25,
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  },
  heroContent: {
    padding: theme.spacing(2),
    backgroundColor: " rgba(35, 35, 35, 0.5)",
  },

  //CAROUSEL SECTION
  carousel_section: {
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    borderTopRightRadius: "8em",
    [theme.breakpoints.down("md")]: {
      borderTopRightRadius: "5em",
      // padding: theme.spacing(0),
    },
  },
  carousel_section_content: {
    maxWidth: "1200px",
    margin: "auto",
  },

  //GRAPH SECTION
  graph_section: {
    // borderTopRightRadius: "10em",
    backgroundColor: theme.palette.background.default,
  },

  graph_section_content: {
    maxWidth: "1200px",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2),
    },
  },

  //FUNCTIONALITY SECTION
  functionality_section: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(2),
    // borderTopRightRadius: "10em",
    backgroundColor: theme.palette.background.default,
  },

  functionality_section_content: {
    maxWidth: "1200px",
    margin: "auto",

    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2),
    },
  },

  //CONTACT SECTION
  contact_section: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottomRightRadius: "10em",
    backgroundColor: theme.palette.background.default,
  },

  contact_section_content: {
    maxWidth: "1200px",
    margin: "auto",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2),
    },
    // backgroundColor:"red"
  },

  textInput: {
    // backgroundColor: theme.palette.grey[700],
  },

  // --------------------------------------------------------------------------------
  // TYPOGRAPHY
  // --------------------------------------------------------------------------------
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 300,
    [theme.breakpoints.down("md")]: {
      fontSize: "36px",
      // marginBottom: theme.spacing(2),
    },
  },

  logo: {
    maxWidth: "10em",
    maxHeight: "10em",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      maxWidth: "8em",
      maxHeight: "8em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
      maxWidth: "6em",
      maxHeight: "6em",
    },
  },

  // --------------------------------------------------------------------------------
  // OTHER
  // --------------------------------------------------------------------------------
  subscribe: {
    height: "57px",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      // marginTop: theme.spacing(3),
      // margin: "auto",
    },
  },
  emailInput: {
    borderColor: theme.palette.text.primary,
    borderRadius: "10px",
    // borderRadius: "27.5px",
  },
  functionCard: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {},
  },
  functionImage: {
    width: "8em",
    height: "8em",
    marginBottom: theme.spacing(3),
  },
}));
