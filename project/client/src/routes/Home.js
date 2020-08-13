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
  constructor() {
    super();
  }
  render() {
    return (
          <Form>
            <h2>Calculate Your FI Date:</h2>
          <FormGroup as={Row} controlId="formHorizontalEmail">
            <Label column sm={2}>
            <a href="https://www.youtube.com/watch?v=K7l5ZeVVoCA"> What's My Age Again? </a>
            </Label>
            <Col sm={10}>
              <Form.Control type="age" placeholder="Age" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="formHorizontalPassword">
            <Label column sm={2}>
              How Much Money Do You Make After Taxes? <a href="https://smartasset.com/taxes/paycheck-calculator">Need Help?</a>
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="50,000" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="formHorizontalPassword">
            <Label column sm={2}>
              How Much Money Do You Spend Each Month? <a href="quicken.com/budget-calculator">Need Help?</a>
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="2,000" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="formHorizontalPassword">
            <Label column sm={2}>
              Yearly Expenses:
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="24,000"/>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="formHorizontalPassword">
            <Label column sm={2}>
              Yearly Savings:
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="26,000"/>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="formHorizontalPassword">
            <Label column sm={2}>
              Yearly Savings:
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="52%"/>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="formHorizontalPassword">
            <Label column sm={2}>
              How Much Money Do You Have Saved in Bank Accounts?
            </Label>
            <Col sm={10}>
              <Form.Control placeholder="20,000" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="formHorizontalPassword">
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
              <Button type="submit">Calculate FI Date!</Button>
            </Col>
          </FormGroup>
        </Form>
    );  
  }
}



export default Home;