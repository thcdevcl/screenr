import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";

import Router from "../../ui/components/router/Router";

Meteor.startup(() => {
  render(<Router />, document.getElementById("react-root"));
});
