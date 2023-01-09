import React, { Component } from "react";
import Chart from "../../Components/Chart";
import Table from "../../Components/Table";

export class Bar extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 col-lg-6">
              <Table />
            </div>
            <div className="col-lg-6">
              <Chart />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Bar;
