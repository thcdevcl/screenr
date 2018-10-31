import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

const puppeteer = require("puppeteer");

import Images from "../images/Images";
import Screenshots from "./Screenshots";

Meteor.methods({
  async "screenshots.create"(url) {
    check(url, String);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const bufferPromise = await page.screenshot({
      path: "temp.png",
      type: "png"
    });

    let imgid = "";

    Images.write(
      bufferPromise,
      {
        fileName: `${url.split(".")[1]}.png`,
        type: "image/png"
      },
      function(writeError, fileRef) {
        if (writeError) {
          throw writeError;
        } else {
          imgid = fileRef._id;
        }
      }
    );

    await browser.close();

    return Screenshots.insert({ url, imgid });
  }
});
