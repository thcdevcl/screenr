import React from "react";
import { withRouter } from "react-router-dom";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import Capture from "../components/utils/Capture";

export default withRouter(({ _id, url, imgid, history }) => (
  <GridListTile
    style={{ margin: 4 }}
    onClick={event => {
      history.push(`/capture/${_id}`);
    }}
  >
    <Capture _id={imgid} />
    <GridListTileBar title={url} />
  </GridListTile>
));
