import React, { Component } from "react";
import MyChart from "../../Components/Chart";

export default class Bar extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 my-2">
              <MyChart chartType="bar"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
