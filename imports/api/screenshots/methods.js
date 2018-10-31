import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  "screenshots.create"(url) {
    check(url, String);
    console.log(url);
  }
});
