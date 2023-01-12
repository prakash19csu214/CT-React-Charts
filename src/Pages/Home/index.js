import React, { Component } from "react";
import MyChart from "../../Components/Chart";
import PDChart from "../../Components/PDChart";
import Table from "../../Components/Table";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 my-2">
              <Table />
            </div>
            <div className="col-12 my-2">

                <div className="row">
                    <div className="col-12 col-md-6"><MyChart chartType="bar"/></div>
                    <div className="col-12 col-md-6"><MyChart chartType="line"/></div>
                    <div className="col-12 col-md-6"><PDChart chartType="pie"/></div>
                    <div className="col-12 col-md-6"><PDChart chartType="donut"/></div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
