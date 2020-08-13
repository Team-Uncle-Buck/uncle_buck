import React, { Component } from "react";
import { Jumbotron as Jumbo } from 'react-bootstrap';

//Class for the top Jumbotron
class Jumbotron extends Component {

  render() {
    return (
      <Jumbo>
        <h3 id="jumboTitle">Financial Independence</h3>
        <p>
        The status of having enough income to pay for one's reasonable living expenses for the rest of one's life without having to rely on formal employment.
        </p>
       
      </Jumbo>
    );
  }
}

export default Jumbotron;

 {/* <br></br> */}
        {/* <h3 id="">Let's calculate when you can achieve financial freedom!</h3> */}
