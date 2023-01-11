import React from "react";
import "./index.css";

function Table(props) {
  
  return (
    <>
      <div className="heading">Table</div>
      <div class="table-responsive">
      <table class="table table-striped my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Max Temperature</th>
            <th scope="col">Min Temperature</th>
            <th scope="col">Precipitation</th>
            <th scope="col">Snow</th>
            <th scope="col">Snow Depth</th>
            <th scope="col">Average Daily Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{props.props[0].date}</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Table;
