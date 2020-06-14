import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "../themes/theme";
import ReactGA from "react-ga";

import Home from "./Home/index";

ReactGA.initialize("UA-167562188-1");

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} />}
            />
            {/* ROUTE TO BE RENDERED ON A FAULTY PATH (404)*/}
            <Route
              render={(props) => <Home {...props} />}
            />
            {/* Replaced with 404 page later */}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
