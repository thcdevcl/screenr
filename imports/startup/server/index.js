import { Meteor } from "meteor/meteor";

import "../../api";

Meteor.startup(() => {
  process.env.CLOUDINARY_URL = `cloudinary://596938858858215:WE72H4xfHT6YvvyGlubuXtQbWkA@screenr`;
});
