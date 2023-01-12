import React, { Component } from 'react'
import PDChart from '../../Components/PDChart';
import Table from "../../Components/Table";

export class Pie extends Component {

  render() {
    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 my-2">
              <Table />
            </div>
            <div className="col-12 my-2">
            <PDChart chartType="pie"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Pie