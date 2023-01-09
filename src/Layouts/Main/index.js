import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Bar from '../../Pages/BarPage';
import Line from '../../Pages/LinePage';
import Donut from '../../Pages/BarPage';
import Pie from '../../Pages/LinePage';

export default class Main extends Component {
  render() {
    return (
        <div>   
          <Header />
          <Switch>
            <Route path= "/bar" component={Bar} />
            <Route path= "/line" component={Line} />
            <Route path= "/pie" component={Donut} />
            <Route path= "/donut" component={Pie} />
            <Redirect to="/bar" />
          </Switch>
          <Footer />
        </div>
      );
  }
}
