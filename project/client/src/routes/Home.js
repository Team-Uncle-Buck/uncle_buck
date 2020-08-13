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
          <FormGroup as={Row} controlId="formHorizontalEmail">
            <Label column sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="formHorizontalPassword">
            <Label column sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </FormGroup>
          <fieldset>
            <FormGroup as={Row}>
              <Label as="legend" column sm={2}>
                Radios
              </Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="first radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="second radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="third radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </FormGroup>
          </fieldset>
          <FormGroup as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </FormGroup>

          <FormGroup as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
    );  
  }
}



export default Home;