import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import validate from "../../../modules/validate";

const styles = theme => ({});

class ValidatedForm extends Component {
  componentDidMount() {
    const component = this;
    const { rules, messages, theme } = this.props;
    validate(component.form, {
      rules,
      messages,
      submitHandler() {
        component.handleSubmit();
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const component = this;
    const { rules, messages, theme } = this.props;
    validate(component.form, {
      rules,
      messages,
      submitHandler() {
        component.handleSubmit();
      }
    });
  }

  handleSubmit = event => {
    this.props.onHandleSubmit();
  };

  render() {
    const { style } = this.props;
    return (
      <form
        style={style}
        ref={form => (this.form = form)}
        onSubmit={event => event.preventDefault()}
      >
        {this.props.children}
      </form>
    );
  }
}

ValidatedForm.propTypes = {
  rules: PropTypes.object,
  messages: PropTypes.object,
  onHandleSubmit: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(ValidatedForm);
