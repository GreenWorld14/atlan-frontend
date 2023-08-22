import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getData, getTableData } from "../actions/tablelistAction";
import "../assets/css/tablelist.css";
import Loading from "./loading/Loading";

class Tablelist extends Component {
  constructor() {
    super();
    this.state = {
      tablelist: [],
      tablelistloading: false,
    };
  }

  componentDidMount = () => {
    this.props.getData();
  };

  showTableData = (name) => {
    this.props.getTableData(name);
  };

  componentWillReceiveProps(newProps) {
    if (newProps.tablelist) {
      this.setState({
        tablelist: newProps.tablelist.tablelist,
        tablelistloading: newProps.tablelist.tablelistloading,
      });
    }
  }

  render() {
    const { tablelist, tablelistloading } = this.state;

    return (
      <div className="col-md-3 table-section">
        <div className="mt-4">
          <h2>Table List</h2>
          <div className="table-bar-list">
            {tablelistloading ? (
              <Loading />
            ) : (
              <ul>
                {Array.isArray(tablelist)
                  ? tablelist.length !== 0
                    ? tablelist.map((item, key) => {
                        return (
                          <li
                            key={key}
                            onClick={() =>
                              this.showTableData(item.Tables_in_sql10518768)
                            }
                          >
                            {item.Tables_in_sql10518768}
                          </li>
                        );
                      })
                    : null
                  : null}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Tablelist.propTypes = {
  getData: PropTypes.func.isRequired,
  getTableData: PropTypes.func.isRequired,
  tablelist: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tablelist: state.tablelist,
  tablelistloading: state.tablelist,
});

export default connect(mapStateToProps, {
  getData,
  getTableData,
})(Tablelist);
