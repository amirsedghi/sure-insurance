import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./index.css";

const mapStateToProps = state => ({
  quote: state.quoteOverview
});

class QuoteOverview extends Component {
  state = { selected: "" };

  componentDidMount() {
    this.setState({ selected: Object.keys(this.props.quote)[0] || "" });
  }

  onSelectChange = event => {
    this.setState({ selected: event.target.value });
  };

  goBack = () => {
    this.props.history.push("/");
  };

  getValues = () => {
    const { selected } = this.state;
    const { quote } = this.props;
    if (quote[selected]) {
      const description = quote[selected].description;
      const values = quote[selected].values;
      return (
        <div className="info-section">
          <List>
            <ListItemText id="description" primary={description} />
          </List>
          <Divider />
          <List>
            {values.map(value => (
              <ListItem key={value}>
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    }
  };

  getQuoteOptions = () => {
    const keys = Object.keys(this.props.quote);
    return keys.map(key => (
      <MenuItem key={key} value={key}>
        {key.replace("_", " ").replace(/^\w/, c => c.toUpperCase())}
      </MenuItem>
    ));
  };

  render() {
    return (
      <>
        <Button id="go-back" onClick={this.goBack} color="primary">
          <ArrowBackIosIcon />
          Go back
        </Button>
        <div className="quote">
          <Select
            id="quote-options"
            value={this.state.selected}
            onChange={this.onSelectChange}
          >
            {this.getQuoteOptions()}
          </Select>
          {this.getValues()}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, {})(withRouter(QuoteOverview));
