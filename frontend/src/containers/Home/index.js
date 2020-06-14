//REACT
import React, { useState, useEffect } from "react";

//MODULE IMPORTS
import ReactGA from "react-ga";
//GQL IMPORTS
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

//MUI COMPONENTS
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";


import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//COMPONENT STYLING
import styles from "./styles";

export default function Home(props) {
  const classes = styles();
  const theme = useTheme();
  const matchesMedium = useMediaQuery(theme.breakpoints.down("md"));

  //CONTROLS FOR THE SUBSCIPTION BOXES
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  //CONTROLS FOR CONTACT FORM
  const [contactEmail, setContactEmail] = useState("");
  const [contactEmailHelper, setContactEmailHelper] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactNameHelper, setContactNameHelper] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactMessageHelper, setContactMessageHelper] = useState("");
  const [willSubscribe, setWillSubscribe] = useState(true);

  // GRAPH QL QUERIES AND MUTATIONS
  const CREATE_USER = gql`
    fragment UserFields on CreateUserResult {
      ... on CreateUserResponse {
        email
      }
      ... on CreateUserError {
        message
      }
    }
    mutation createUser($data: CreateUserInput!) {
      createUser(data: $data) {
        __typename
        ...UserFields
      }
    }
  `;

  const SEND_MESSAGE = gql`
    fragment ContactFields on ContactFormResult {
      ... on ContactFormResponse {
        status
      }
      ... on CreateUserError {
        message
      }
    }
    mutation contactForm($data: ContactFormInput!) {
      contactForm(data: $data) {
        __typename
        ...ContactFields
      }
    }
  `;

  let [ createUser, userData ] = useMutation(CREATE_USER, {
    variables: { data: { email: email } },
  });

  let [ contactForm, messageData ] = useMutation(SEND_MESSAGE, {
    variables: {
      data: {
        name: contactName,
        email: contactEmail,
        message: contactMessage,
        subscribe: willSubscribe,
      },
    },
  });
  
  function handleSubscribe() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      ReactGA.event({
        category: "Subscription",
        action: "User entered their e-mail",
      });
      createUser();
    } else {
      setEmailHelper("Invalid email format.");
    }
  }
  async function handleSendMessage() {
    let valid = true;
    setContactEmailHelper("");
    setContactNameHelper("");
    setContactMessageHelper("");

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactEmail)) {
      valid = false;
      setContactEmailHelper("Invalid email format.");
    } else if (contactName.length < 0) {
      setContactNameHelper("Required.");
      valid = false;
    } else if (contactMessage.length < 0) {
      setContactMessageHelper("Required.");
      valid = false;
    }

    if (valid) {
      console.log("Message Input is Valid.");
      //SEND MESSAGE GQL
      await contactForm();
      setContactName("");
      setContactEmail("");
      setContactMessage("");
      setWillSubscribe(true);
      console.log("MESSAGE ", messageData);
    } else {
      console.log("Message Input is NOT Valid.");
    }
  }

  useEffect(() => {
    if (userData.data && userData.data.createUser.__typename === "CreateUserError") {
      setEmailHelper(userData.data.createUser.message);
    }
  }, [userData.data]);

  return (
    <Container className={classes.root} maxWidth={false}>


      {/* // Main Page Content Grid Container */}
      <Grid
        container
        direction="column"
        justify={"center"}
        className={classes.pageContainer}
      >
        {/*----------------------Hero Section Start---------------------- */}
        <Grid
          item
          id="hero_section"
          container
          justify="flex-start"
          alignItems="center"
          className={classes.heroSection}
        >
          <Grid item container direction="column" alignItems="flex-start">
            <Grid
              item
              className={classes.heroContent}
              component={Paper}
              elevation={6}
            >
              <Typography
                variant={matchesMedium ? "h3" : "h2"}
                color="textPrimary"
                align="left"
                className={classes.title}
              >
                Hello World
              </Typography>

              <Typography
                variant="h6"
                color="textSecondary"
                style={{ marginBottom: theme.spacing(3) }}
              >
                This is some nice sample text for example app
              </Typography>

              {userData.data && userData.data.createUser.__typename === "CreateUserResponse" ? (
                <Typography
                  variant="h5"
                  color="secondary"
                  style={{ marginTop: theme.spacing(2) }}
                >
                  Thank you, We'll be in Touch!
                </Typography>
              ) : (
                <Grid container justify="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      error={emailHelper.length > 0}
                      label="Subscribe to our E-mail List"
                      color="secondary"
                      variant="outlined"
                      helperText={emailHelper}
                      fullWidth
                      InputProps={{
                        classes: {
                          notchedOutline: classes.emailInput,
                        },
                      }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>

                  <Grid item container xs={5} lg={3}>
                    <Button
                      className={classes.subscribe}
                      size="large"
                      variant="contained"
                      color="secondary"
                      fullWidth={!matchesMedium}
                      // endIcon={<SendIcon />}
                      onClick={(e) => handleSubscribe()}
                    >
                      Subscribe
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        {/*----------------------Hero Section End---------------------- */}
        {/*----------------------Contact Section Start---------------------- */}
        <Grid container justify="center" className={classes.contact_section}>
          <Grid
            item
            container
            justify="space-around"
            alignContent="center"
            className={classes.contact_section_content}
          >
            <Grid item container>
              <Grid container direction="row">
                <Grid
                  style={{ padding: theme.spacing(2) }}
                  lg={6}
                  xl={6}
                  item
                  container
                  direction="column"
                  justify="space-around"
                  alignItems="center"
                  component={Paper}
                  elevation={8}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant={matchesMedium ? "h4" : "h4"}
                        style={{
                          marginBottom: theme.spacing(1),
                          marginTop: theme.spacing(2),
                        }}
                      >
                        Contact
                      </Typography>
                      <Typography
                        variant="h6"
                        align={"left"}
                        color="textSecondary"
                      >
                        Don't Hesitate to get in Touch
                      </Typography>

                      {/* text fields */}
                      <Grid
                        item
                        container
                        direction="column"
                        spacing={2}
                        style={{
                          marginTop: theme.spacing(4),
                          marginBottom: theme.spacing(2),
                        }}
                      >
                        <Grid item>
                          <TextField
                            label="*Name"
                            id="name"
                            variant="filled"
                            color="secondary"
                            fullWidth
                            value={contactName}
                            helperText={contactNameHelper}
                            onChange={(e) => setContactName(e.target.value)}
                          ></TextField>
                        </Grid>
                        <Grid item>
                          <TextField
                            label="*Email"
                            id="email"
                            variant="filled"
                            color="secondary"
                            error={contactEmailHelper.length !== 0}
                            helperText={contactEmailHelper}
                            fullWidth
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                          ></TextField>
                        </Grid>
                      </Grid>

                      <Grid item>
                        <TextField
                          id="message"
                          fullWidth
                          variant="filled"
                          color="secondary"
                          className={classes.message}
                          InputProps={{ disableUnderline: true }}
                          multiline
                          rows={5}
                          value={contactMessage}
                          helperText={contactMessageHelper}
                          onChange={(e) => setContactMessage(e.target.value)}
                          placeholder="*Message"
                        ></TextField>
                      </Grid>

                      <Grid item>
                        <FormControlLabel
                          style={{ paddingTop: theme.spacing(2) }}
                          control={
                            <Checkbox
                              checked={willSubscribe}
                              onClick={(e) =>
                                setWillSubscribe(e.target.checked)
                              }
                              name="checkedA"
                            />
                          }
                          label="Subscribe"
                        />
                      </Grid>

                      <Grid item container justify="flex-start">
                        <Button
                          disabled={
                            contactName.length === 0 ||
                            contactMessage.length === 0 ||
                            contactEmail.length === 0
                          }
                          variant="contained"
                          color="secondary"
                          style={{ marginTop: "2em" }}
                          onClick={e => handleSendMessage()}
                        >
                          Send
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  xs={12}
                  lg={6}
                  item
                  container
                  direction={matchesMedium ? "row" : "column"}
                  style={{
                    marginTop: `${matchesMedium ? "4em" : "2em"}`
                  }}
                  justify="space-around"
                  alignItems="center"
                  spacing={matchesMedium ? 4 : 2}
                >
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/*----------------------Contact Section End---------------------- */}
      </Grid>
    </Container>
  );
}
