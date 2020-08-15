import React, { Component } from "react";
import { Jumbotron as Jumbo } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import './Jumbotron.css';

//Class for the top Jumbotron
class Jumbotron extends Component {

  render() {
    return (
      <Jumbo>
        <Container>
          <h1 className="jumbo__title">Tia: "What is financial independence?"</h1>
          <p className="jumbo__text"><strong>Uncle Buck: </strong>"Basically it means you can live your life without 
          having to worry about steady employment to cover your expenses. 
          You know, off the rat wheel and onto the cheese wheel. You catch 
          my drift? So you hit the financial independence benchmark and you
          can do a few things: (a) keep on doing what your doing, just add
          more to the nest egg so you live even larger later, (b) retire, 
          if you're personally ready for it, or (c) maybe keep on working 
          but do it your own way - you know, something you love, maybe 
          fewer hours, whatever...     What's his last name? Spray?"</p>
         </Container>
      </Jumbo>
    );
  }
}

export default Jumbotron;