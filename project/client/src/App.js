import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Home from "./routes/Home";
import About from "./routes/About";
import SongPage from "./routes/SongPage";
import NoMatch from "./routes/NoMatch";
import CodePage from "./routes/CodePage";
import LicensePage from "./routes/LicensePage";
import Navigation from "./components/Navigation";
import Jumbotron from "./components/Jumbotron";
import {Layout} from "./components/Layout";

class App extends Component {
  render (){
    return (
      <React.Fragment>
        <Navigation />
        <Jumbotron/>
        <Layout>
          <Router>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/about" component={About} />
              <Route path="/CodePage" component={CodePage} />
              <Route path="/LicensePage" component={LicensePage} />
              <Route path="/SongPage" component={SongPage} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>

    );
  }
}

export default App;
