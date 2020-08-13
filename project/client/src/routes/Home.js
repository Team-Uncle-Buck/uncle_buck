import React from "react";
import "./Home.css";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import FormGroup from 'react-bootstrap/FormGroup'
import Label from 'react-bootstrap/FormLabel'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import FormCheck from 'react-bootstrap/FormCheck'


class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }


  render() {
    return (
          <Form onSubmit={ (e) => this.submitForm(e) }>
            <h3>Calculate Your FI Date:</h3>
          <FormGroup as={Row} controlId="1">
            <Label column sm={2}>
            <a href="https://www.youtube.com/watch?v=K7l5ZeVVoCA" target="_blank"> What's My Age Again? </a>
            </Label>
            <Col sm={10}>
              <Form.Control type="age" placeholder="Age" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="2">
            <Label column sm={2}>
              How Much Money Do You Make After Taxes? <a href="https://smartasset.com/taxes/paycheck-calculator" target="_blank">Need Help?</a>
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="50,000" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="3">
            <Label column sm={2}>
              How Much Money Do You Spend Each Month? <a href="quicken.com/budget-calculator" target="_blank">Need Help?</a>
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="2,000" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="4">
            <Label column sm={2}>
              Yearly Expenses:
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="24,000"/>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="5">
            <Label column sm={2}>
              Yearly Savings:
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="26,000"/>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="6">
            <Label column sm={2}>
              Yearly Savings:
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="52%"/>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="7">
            <Label column sm={2}>
              How Much Money Do You Have Saved in Bank Accounts?
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="20,000" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="8">
            <Label column sm={2}>
              How Much Money Do You Have Saved in Retirement Vehicles?
              (401K, IRA, IndexFunds, etc....)
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="30,000" />
            </Col>
          </FormGroup>

          <FormGroup as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={this.handleClick}>Calculate FI Date!</Button>
            </Col>
          </FormGroup>
        </Form>
    );  
  }
}



// submitForm(e) {
//   e.preventDefault();
//   console.log(`Email: ${ this.state.email }`)
// }

// function calcSavingsRate(annualSavings, annualIncomeAfterTaxes):
//   var sr = round(annualSavings/annualIncomeAfterTaxes * 100, 0);
//   return sr;


export default Home;