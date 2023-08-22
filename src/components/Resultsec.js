import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loading from "./loading/Loading";
import "../assets/css/resultsec.css";

class Resultsec extends Component {
  constructor() {
    super();
    this.state = {
      tablefieldlist: [],
      tablelist: [],
      tableresult: [],
      errflag: false,
      loading: false,
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.tablelist) {
      this.setState({
        tableresult: newProps.tablelist.tableresult,
        errflag: newProps.tablelist.errloading,
        loading: newProps.tablelist.loading,
      });
    }
  }

  render() {
    const { tableresult, loading, errflag } = this.state;
    let allkeyary = [];
    let keyary = [];
    tableresult.forEach(function (item) {
      Object.keys(item).forEach(function (key) {
        allkeyary.push(key);
      });
    });
    keyary = allkeyary.filter((item, pos) => {
      return allkeyary.indexOf(item) === pos;
    });
    return (
      <div className="col-md-12 mt-5">
        <h2>Result</h2>
        <div className="mt-3 result-section">
          {loading ? (
            <Loading />
          ) : errflag ? (
            <div>Wrong query</div>
          ) : (
            <table>
              {Array.isArray(keyary) ? (
                keyary.length === 0 ? (
                  <tfoot>
                    <tr>
                      <td colSpan={"100%"}>No Data</td>
                    </tr>
                  </tfoot>
                ) : (
                  <thead>
                    <tr>
                      {keyary.map((item, key) => {
                        return <th key={key}>{item}</th>;
                      })}
                    </tr>
                  </thead>
                )
              ) : (
                <tfoot>
                  <tr>
                    <td colSpan={"100%"}>No Data</td>
                  </tr>
                </tfoot>
              )}

              {Array.isArray(tableresult) ? (
                tableresult.length === 0 ? null : (
                  <tbody>
                    {tableresult.map((item, key) => {
                      return (
                        <tr key={key}>
                          {Array.isArray(keyary)
                            ? keyary.map((items, keys) => {
                                return <td key={keys}>{item[items]}</td>;
                              })
                            : null}
                        </tr>
                      );
                    })}
                  </tbody>
                )
              ) : null}
            </table>
          )}
        </div>
      </div>
    );
  }
}

Resultsec.propTypes = {
  tablelist: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tablelist: state.tablelist,
  tableresult: state.tablelist,
  errloading: state.tablelist,
  loading: state.tablelist,
});

export default connect(mapStateToProps, {})(Resultsec);
