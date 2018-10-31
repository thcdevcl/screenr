import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Screenshots from "../../api/screenshots/Screenshots";
import Images from "../../api/images/Images";

import Navigation from "../layouts/NavigationLayout";
import Spinner from "../components/utils/Spinner";

const styles = theme => ({
  img: {
    maxWidth: "100%"
  }
});

const CapturePage = ({ classes, url, src, loading, history }) => {
  if (loading)
    return (
      <Fragment>
        <Navigation />
        <Spinner />
      </Fragment>
    );
  return (
    <Fragment>
      <Navigation />
      <Grid
        container
        style={{ padding: 16, flex: 1 }}
        alignContent="flex-start"
      >
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            onClick={event => history.goBack()}
          >
            BACK
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" color="default">
            {`Site Name:
            ${url
              .split(".")[1]
              .charAt(0)
              .toUpperCase() + url.split(".")[1].slice(1)}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" color="default">
            {`Address: ${url}`}
          </Typography>
        </Grid>
        <img src={src} className={classes.img} />
      </Grid>
    </Fragment>
  );
};

export default withRouter(
  withTracker(({ match, history }) => {
    const subscriptions = [
      Meteor.subscribe("screenshots.list"),
      Meteor.subscribe("image")
    ];
    const loading = subscriptions.some(subscription => !subscription.ready());
    if (!loading) {
      const { _id } = match.params;
      const screenshot = Screenshots.findOne({ _id });
      const src = Images.findOne({ _id: screenshot.imgid }).link();
      return {
        url: screenshot.url,
        src,
        loading,
        history
      };
    }
    return { loading };
  })(withStyles(styles)(CapturePage))
);
