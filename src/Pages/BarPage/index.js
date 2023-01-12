import React, { Component } from "react";
import MyChart from "../../Components/Chart";
import Table from "../../Components/Table";

export class Bar extends Component {
  render() {

    const { props } = this.props;

    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 my-2">
              <Table props={props} />
            </div>
            <div className="col-12 my-2">
              <MyChart props={props} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Bar;
