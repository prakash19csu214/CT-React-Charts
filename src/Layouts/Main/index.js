import React, { Component, createContext } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Bar from "../../Pages/BarPage";
import Line from "../../Pages/LinePage";
import Donut from "../../Pages/DonutPage";
import Pie from "../../Pages/PiePage";
import Home from "../../Pages/Home";

const GetData = createContext();

export class Main extends Component {
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
        <GetData.Provider value={data}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/bar" component={Bar} />
          <Route path="/line" component={Line} />
          <Route path="/donut" component={Donut} />
          <Route path="/pie" component={Pie} />
          <Redirect to="/home" />
        </Switch>
        </GetData.Provider>
        <Footer />
      </div>
    );
  }
}

export default Main
export {GetData}
