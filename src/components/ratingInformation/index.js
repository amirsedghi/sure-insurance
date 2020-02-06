import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import "./index.css";

import { submitForm, editForm } from "../../actions/ratingInformation";

const mapStateToProps = state => ({
  form: state.ratingInformation
});

class RatingInformation extends Component {
  state = { attemptedSubmit: false };

  editForm = (key, value) => {
    this.props.editForm(key, value);
  };

  submitForm = () => {
    const { form, submitForm, history } = this.props;
    this.setState({ attemptedSubmit: true });
    submitForm(form, history);
  };

  render() {
    const {
      first_name,
      last_name,
      line_1,
      line_2,
      city,
      region,
      postal,
      error
    } = this.props.form;
    const { attemptedSubmit } = this.state;

    return (
      <>
        <div className="intro">
          Welcome! Please fill out this quick form to get your quote!
        </div>
        <form className="form">
          <TextField
            error={attemptedSubmit && first_name.length === 0}
            label="First Name"
            type="text"
            id="first-name"
            onChange={e => this.editForm("first_name", e.target.value)}
            value={first_name}
          />
          <TextField
            error={attemptedSubmit && last_name.length === 0}
            label="Last Name"
            type="text"
            id="last-name"
            onChange={e => this.editForm("last_name", e.target.value)}
            value={last_name}
          />
          <TextField
            error={attemptedSubmit && line_1.length === 0}
            label="Address line 1"
            type="text"
            placeholder="line 1"
            onChange={e => this.editForm("line_1", e.target.value)}
            value={line_1}
          />
          <TextField
            label="Address line 2"
            type="text"
            placeholder="line 2"
            onChange={e => this.editForm("line_2", e.target.value)}
            value={line_2}
          />
          <TextField
            error={attemptedSubmit && city.length === 0}
            label="City"
            type="text"
            placeholder="city"
            onChange={e => this.editForm("city", e.target.value)}
            value={city}
          />
          <TextField
            error={attemptedSubmit && region.length === 0}
            label="Region"
            type="text"
            placeholder="region"
            onChange={e => this.editForm("region", e.target.value)}
            value={region}
          />
          <TextField
            error={attemptedSubmit && postal.length === 0}
            label="Postal"
            type="text"
            placeholder="postal"
            onChange={e => this.editForm("postal", e.target.value)}
            value={postal}
          />
          <Button
            id="submit-button"
            variant="contained"
            color="primary"
            onClick={this.submitForm}
          >
            Submit
          </Button>
        </form>
        {error && (
          <Snackbar open={true}>
            <MuiAlert severity="error">
              Please make sure all fields are valid
            </MuiAlert>
          </Snackbar>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, { submitForm, editForm })(
  withRouter(RatingInformation)
);
