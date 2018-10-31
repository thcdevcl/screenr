import { Meteor } from "meteor/meteor";

import Images from "../Images";

Meteor.publish("image", function() {
  return Images.find().cursor;
});
