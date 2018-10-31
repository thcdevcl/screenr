import React from "react";
import { withTracker } from "meteor/react-meteor-data";

import Screenshots from "../../api/screenshots/Screenshots";

import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

import Spinner from "../components/utils/Spinner";

import CaptureItem from "../layouts/CaptureItemLayout";

const ScreenshotGridLayout = ({ loading, screenshots }) => {
  if (loading) return <Spinner />;
  return (
    <Grid container justify="center">
      <Grid item xs={10} md={7}>
        <Grid container justify="space-around">
          <GridList cellHeight={180} cols={1}>
            <GridListTile key="Subheader" cols={1} style={{ height: "auto" }}>
              <ListSubheader component="div">Screenshots</ListSubheader>
            </GridListTile>
            {screenshots.map(screenshot => (
              <CaptureItem key={screenshot._id} {...screenshot} />
            ))}
          </GridList>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withTracker(() => {
  const subscription = Meteor.subscribe("screenshots.list");
  const loading = !subscription.ready();
  if (!loading) {
    return {
      loading,
      screenshots: Screenshots.find().fetch()
    };
  }
  return { loading };
})(ScreenshotGridLayout);
