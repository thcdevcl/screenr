import React, { Component } from "react";
import { Bert } from "meteor/themeteorchef:bert";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

import Form from "../utils/ValidatedForm";
import Spinner from "../utils/Spinner";

const styles = theme => ({
  rootContainer: {
    padding: theme.spacing.unit
  }
});

class CaptureForm extends Component {
  state = { loading: false, url: "https://www.google.com/" };

  handleChange = event => {
    const name = event.target.id,
      value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { url } = this.state;
    this.toggleLoading();
    Meteor.call("screenshots.create", url, (err, res) => {
      if (res)
        Bert.alert({
          title: "Success!",
          message: "Screenshot captured",
          type: "success",
          style: "growl-top-right",
          icon: "fa-check"
        });
      this.toggleLoading();
      this.cleanForm();
    });
  };

  toggleLoading = () => this.setState({ loading: !this.state.loading });

  cleanForm = () => this.setState({ url: "" });

  render() {
    const { classes } = this.props;
    const { loading, url } = this.state;
    const rules = {
      url: {
        required: true,
        url: true
      }
    };
    if (loading) return <Spinner />;
    return (
      <Form
        onHandleSubmit={this.handleSubmit}
        rules={rules}
        styles={{ width: "100%" }}
      >
        <Grid
          container
          alignItems="center"
          classes={{ container: classes.rootContainer }}
        >
          <Grid item xs={9}>
            <TextField
              fullWidth
              id="url"
              name="url"
              label="URL"
              placeholder="https://www.website.com"
              onChange={this.handleChange}
              value={url}
              required
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Capture
            </Button>
          </Grid>
        </Grid>
      </Form>
    );
  }
}

export default withStyles(styles)(CaptureForm);
