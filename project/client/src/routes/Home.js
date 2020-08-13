import React from "react";
import "./Home.css";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import FormGroup from 'react-bootstrap/FormGroup'
import Label from 'react-bootstrap/FormLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import FormCheck from 'react-bootstrap/FormCheck'
import {Input} from 'reactstrap';
// import { Container, Col, FormGroup, 
//         Label, Input, Form, Button, 
//         Row, FormCheck } from 'reactstrap';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      annualIncomeAfterTaxes: '',
      yearlyExpenses: '',
      yearlySavings: '',
      portfolioBalance: '',
      rateOfReturn: '',
      riskTolerance: '',
    }

    this.calculate = this.calculate.bind(this);
  }

  calculate(e) {
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
              How Much Money Do You Spend Each Year? <a href="quicken.com/budget-calculator" target="_blank">Need Help?</a>
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="24,000" aria-describedby="savingsHelpBlock"/>
              <Form.Text id="savingsHelpBlock" muted>
              Take your monthly budget and multiply by 12.
              </Form.Text>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="5">
            <Label column sm={2}>
              How Much Money Do You Save Each Year?
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="26,000"/>
              <Form.Text id="savingsHelpBlock" muted>
                Subtract two numbers above.
              </Form.Text>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="7">
            <Label column sm={2}>
              How much do you have in savings (savings account, 401k, IRA, brokerage account, etc)? 
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="20,000" aria-describedby="savingsHelpBlock"/>
              <Form.Text id="savingsHelpBlock" muted>
              If you have more debt than savings, then subtract your total savings from 
              your total debt and enter a negative number here. For example you might have 
              $5,000 in savings account and $6,000 credit card balance. In that case, enter -1000 
              here... and pay off that credit card as quickly as possible!
              </Form.Text>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="8">
            <Label column sm={2}>
             What Is Your Expected Annual Rate Of Return On Investments After Inflation?
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="5.0" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="9">
            <Label column sm={2}>What Is Your Risk Tolerance?</Label>
            <Col sm={10}> 
                <Input type="select" name="select" id="exampleSelect">
                  <option>Low - Save More than Needed</option>
                  <option>Medium - Save Recommended Amount</option>
                  <option>High - Save Absolute Minimum Needed</option>
                </Input>
            </Col>
          </FormGroup>

          <FormGroup as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={this.calculate}>Calculate FI Date!</Button>
            </Col>
          </FormGroup>
        </Form>
    );  
  }
}

// function calcSavingsRate(annualSavings, annualIncomeAfterTaxes):
//   var sr = round(annualSavings/annualIncomeAfterTaxes * 100, 0);
//   return sr;


export default Home;