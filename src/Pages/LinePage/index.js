import React, { Component } from 'react'
import MyChart from "../../Components/Chart";

export class Line extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 my-2 d-flex justify-content-center">
            <MyChart chartType="line"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Line