import React, { Component } from 'react'
import Chart from "../../Components/Chart";
import Table from "../../Components/Table";

export class Pie extends Component {
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
              <Chart />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Pie