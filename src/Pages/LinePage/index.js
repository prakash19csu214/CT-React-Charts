import React, { Component } from 'react'
import MyChart from "../../Components/Chart";
import Table from "../../Components/Table";

export class Line extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 my-2">
              <Table />
            </div>
            <div className="col-12 my-2">
              <MyChart />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Line