import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Navigation from "../layouts/NavigationLayout";
import CaptureForm from "../components/forms/CaptureForm";

import ScreenshotGrid from "../layouts/ScreenshotGridLayout";

export default () => (
  <Fragment>
    <Navigation />
    <Grid container justify="center" style={{ marginBottom: 32 }}>
      <Grid item xs={12} style={{ paddingTop: 24, textTransform: "uppercase" }}>
        <Typography variant="h5" color="primary" align="center" paragraph>
          Capture screenshots from url's!
        </Typography>
      </Grid>
      <Grid item xs={9} md={6} component={Paper} elevation={5}>
        <CaptureForm />
      </Grid>
    </Grid>
    <ScreenshotGrid />
  </Fragment>
);
