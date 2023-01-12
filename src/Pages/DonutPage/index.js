import React, { Component } from 'react'
import PDChart from '../../Components/PDChart';

export default class Donut extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 my-2 d-flex justify-content-center">
            <PDChart chartType="donut"/>
            </div>
          </div>
        </div>
      </>
    )
  }
}
