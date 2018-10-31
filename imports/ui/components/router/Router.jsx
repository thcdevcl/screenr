import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import theme from "../../../assets/theme";

import HomePage from "../../pages/HomePage";
import CapturePage from "../../pages/CapturePage";

const Router = ({}) => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/capture/:_id" exact component={CapturePage} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default Router;
