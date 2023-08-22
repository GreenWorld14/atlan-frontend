import React, { Component } from "react";
import Querysec from "./Querysec";
import Resultsec from "./Resultsec";
import Tablelist from "./Tablelist";

// begin function component
class Section extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Tablelist />
          <div className="col-md-9">
            <Querysec />
            <Resultsec />
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
