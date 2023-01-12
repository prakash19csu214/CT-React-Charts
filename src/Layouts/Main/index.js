import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Bar from "../../Pages/BarPage";
import Line from "../../Pages/LinePage";
import Donut from "../../Pages/DonutPage";
import Pie from "../../Pages/PiePage";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://data.townofcary.org/api/v2/catalog/datasets/rdu-weather-history/exports/json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {

    const { data } = this.state;

    if (!data) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/bar" render={(props) => <Bar {...props} props={data} />} />
          <Route path="/line" render={(props) => <Line {...props} props={data} />} />
          <Route path="/donut" render={(props) => <Donut {...props} props={data} />} />
          <Route path="/pie" render={(props) => <Pie {...props} props={data} />} />
          <Redirect to="/bar" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
