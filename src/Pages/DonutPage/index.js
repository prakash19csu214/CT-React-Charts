import React, { Component } from 'react'
import PDChart from '../../Components/PDChart';
import Table from "../../Components/Table";

export default class Donut extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 col-lg-5">
              <Table />
            </div>
            <div className="col-12 offset-lg-2 col-lg-5">
            <PDChart chartType="donut"/>
            </div>
          </div>
        </div>
      </>
    )
  }
}
