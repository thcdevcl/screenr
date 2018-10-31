import React from "react";
import { withTracker } from "meteor/react-meteor-data";

import { withStyles } from "@material-ui/core/styles";

import Images from "../../../api/images/Images";

import Spinner from "../utils/Spinner";

const styles = theme => ({
  img: {
    height: 180,
    width: 180
  }
});

const Capture = ({ classes, src, loading }) => {
  if (loading) return <Spinner />;
  return <img src={src} className={classes.img} />;
};

export default withTracker(({ _id }) => {
  const subscription = Meteor.subscribe("image", _id);
  const loading = !subscription.ready();
  if (!loading) {
    return {
      loading: false,
      src: Images.findOne({ _id }).link()
    };
  }
  return { loading };
})(withStyles(styles)(Capture));
