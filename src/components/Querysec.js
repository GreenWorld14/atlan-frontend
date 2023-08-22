import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { querySql } from "../actions/tablelistAction";
import "../assets/css/querysec.css";

class Querysec extends Component {
  constructor() {
    super();
    this.state = {
      queryText: "",
    };
  }

  queryGo = () => {
    const querydata = {
      querys: this.state.queryText,
    };

    this.props.querySql(querydata);
  };

  render() {
    return (
      <div className="col-md-12 mt-4">
        <div className="form--group col-md-12">
          <h2 className="form--label-2">Query</h2>
          <textarea
            className="form-control form--control-2 mt-3"
            rows={5}
            onChange={(e) => {
              this.setState({ queryText: e.target.value });
            }}
          ></textarea>
          <div className="query-excu-sec mt-2">
            <button className="btn btn-primary" onClick={() => this.queryGo()}>
              Go
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Querysec.propTypes = {
  querySql: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { querySql })(Querysec);
