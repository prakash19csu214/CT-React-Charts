import React, { Component } from 'react'

import Header from '../Header';
import Footer from '../Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Bar from '../../Pages/BarPage';
import Line from '../../Pages/LinePage';
import Donut from '../../Pages/DonutPage';
import Pie from '../../Pages/PiePage';


export default class Main extends Component {
  render() {
    return (
        <div>   
          <Header />
          <Switch>
            <Route path= "/bar" component={Bar} />
            <Route path= "/line" component={Line} />
            <Route path= "/donut" component={Donut} />
            <Route path= "/pie" component={Pie} />
            <Redirect to="/bar" />
          </Switch>
          <Footer />
        </div>
      );
  }
}
