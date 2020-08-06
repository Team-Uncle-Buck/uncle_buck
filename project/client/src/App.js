import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Home from "./routes/Home";
import About from "./routes/About";
// import Learn from "./routes/Learn";
import NoMatch from "./routes/NoMatch";
import Navigation from "./components/Navigation";
import Jumbotron from "./components/Jumbotron";
import {Layout} from "./components/Layout";

class App extends Component {
  render (){
    return (
      <React.Fragment>
        <Navigation />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/about" component={About} />
              {/* <Route path="/about" component={Learn} /> */}
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>

    );
  }
}

export default App;
