import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

import "./methods";

const Screenshots = new Mongo.Collection("screenshots");

Screenshots.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Screenshots.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Screenshots.schema = new SimpleSchema({
  status: {
    type: Boolean,
    autoValue() {
      if (this.isInsert) return true;
    }
  },
  createdAt: {
    type: String,
    label: "The date this company was created.",
    autoValue() {
      if (this.isInsert) return new Date().toISOString();
    }
  },
  updatedAt: {
    type: String,
    label: "The date this company was last updated.",
    autoValue() {
      if (this.isInsert || this.isUpdate) return new Date().toISOString();
    }
  },
  url: {
    type: String,
    label: "URL",
    optional: false
  },
  imgid: {
    type: String,
    optional: false
  }
});

Screenshots.attachSchema(Screenshots.schema);

export default Screenshots;
