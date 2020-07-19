import React, { Component } from "react";
import { Jumbotron as Jumbo } from 'react-bootstrap';

//Class for the top Jumbotron
class Jumbotron extends Component {

  render() {
    return (
      <Jumbo>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
      </Jumbo>
    );
  }
}

export default Jumbotron;
