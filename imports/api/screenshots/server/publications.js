import { Meteor } from "meteor/meteor";

import Screenshots from "../Screenshots";

Meteor.publish("screenshots.list", function() {
  return Screenshots.find({ status: true });
});
