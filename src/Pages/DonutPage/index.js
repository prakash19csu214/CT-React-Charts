import React, { Component } from 'react'
import Chart from "../../Components/Chart";
import Table from "../../Components/Table";

export default class Donut extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 my-2">
              <Table />
            </div>
            <div className="col-12 my-2">
              <Chart />
            </div>
          </div>
        </div>
      </>
    )
  }
}
