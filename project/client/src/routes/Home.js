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
import {Input, NavLink} from 'reactstrap';
// import { Container, Col, FormGroup, 
//         Label, Input, Form, Button, 
//         Row, FormCheck } from 'reactstrap';


const initialFormData = Object.freeze({
  age: ""
});

class Home extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      age: '',
      annualIncomeAfterTaxes: '',
      yearlyExpenses: '',
      yearlySavings: '',
      portfolioBalance: '',
      rateOfReturn: '',
      riskTolerance: ''
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name; // pulls from "name" attribute in input
    let val = event.target.value; // pulls from "value" attribute in input
    
    // if(val.indexOf(',') != -1){
    //   val = val.replace(',','').trim();
    // }
    this.setState({[nam]: val});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    console.log(`Age: ${this.state.age}`);
    console.log(`Annual Income After Taxes: ${this.state.annualIncomeAfterTaxes}`);
    console.log(`Yearly Expenses: ${this.state.yearlyExpenses}`);
    console.log(`Yearly Savings: ${this.state.yearlySavings}`);
    console.log(`Portfolio Balance: ${this.state.portfolioBalance}`);
    console.log(`Rate of Return: ${this.state.rateOfReturn}`);
    console.log(`Risk Tolerance: ${this.state.riskTolerance}`);

    // alert("Savings Rate = " + this.calcSavingsRate());
    console.log("Savings Rate = " + this.calcSavingsRate());
    this.retireCalcs();
  }

  retireCalcs(){
    let multiplier = this.getMultiplier();
    let savingsRate = this.calcSavingsRate();
    let amountNeededToRetire = this.getAmountNeededToRetire();
    let amountNeededToSave = amountNeededToRetire - parseFloat(this.state.portfolioBalance.replace(',',''));;
    let yearsToRetire = this.calcYearsToRetire();
    let withdrawalRate = this.getWithdrawalRate();
    let withdrawalAmount = this.getWithdrawalAmount();
    let yearsToDeplete = this.calcYearsToDeplete();
    let results = "";

    console.log("multiplier = " + multiplier);
    console.log("amountNeededToRetire = " + amountNeededToRetire);
    console.log("savingsRate = " + savingsRate);
    // alert("yearsToRetire = " + yearsToRetire);
    console.log("yearsToRetire = " + yearsToRetire);
    // alert("withdrawalRate = " + withdrawalRate);
    console.log("withdrawalRate = " + withdrawalRate);
    // alert("withdrawalAmount = " + withdrawalAmount);
    console.log("withdrawalAmount = " + withdrawalAmount);
    // alert("amountNeededToSave = " + amountNeededToSave);
    console.log("amountNeededToSave = " + amountNeededToSave);
    alert("yearsToDeplete = " + yearsToDeplete);
    console.log("yearsToDeplete = " + yearsToDeplete);  

  }

  getAmountNeededToRetire(){
    return parseFloat(this.state.yearlyExpenses.replace(',','')) * this.getMultiplier();
  }

  getMultiplier() {
    let multiplier = 0;

    if (this.state.riskTolerance == '3'){
      multiplier = 20;
    } else if (this.state.riskTolerance == '2'){
      multiplier = 25;
    } else {
      multiplier = 30;
    }

    return multiplier;
  }
  
  calcSavingsRate(){
    // returns the savings rate of the user
    let yearlySavings = parseFloat(this.state.yearlySavings.replace(',',''));
    let annualIncomeAfterTaxes = parseFloat(this.state.annualIncomeAfterTaxes.replace(',',''));
    let savingsRate = Math.round(yearlySavings / annualIncomeAfterTaxes * 100, 0);
    return savingsRate;
  }

  calcYearsToRetire(amountNeededToRetire){
    // calculates the years to retire based on user input
    return this.tvmPeriods();
  }

  tvmPeriods(amountNeededToRetire){
    // this function calculates the number of periods (years) it takes to get from 
    // the present value (PV) to the future value (FV) given a periodic rate 
    // (r) and periodic payment (C)
    let PV = parseFloat(this.state.portfolioBalance.replace(',',''));
    let C = parseFloat(this.state.yearlySavings.replace(',',''));
    let r = parseFloat(this.state.rateOfReturn.replace(',',''));
    let FV = parseFloat(this.state.yearlyExpenses.replace(',','')) * this.getMultiplier();

    // alert("tvmPeriods values = " + PV + ", " + C + ", " + r + ", " + FV);
    console.log("tvmPeriods values = " + PV + ", " + C + ", " + r + ", " + FV);
    let n = 0;

    r /= 100;
    n = (FV * r + C);
    n = n / (PV * r + C);
    n = Math.log(n);
    n = n / (Math.log(1 + r));
    n = Math.ceil(n * 10) / 10;

    return n;
  }

  getWithdrawalRate(){
    // returns annual withdrawal rate
    let withRate = Math.round(parseFloat(this.state.yearlyExpenses.replace(',', '')) / this.getAmountNeededToRetire() * 100, 1);
    
    return withRate;
  }

  getWithdrawalAmount(){
    // returns the amount you of money you can withdraw each year to stay financially independent
    return this.getWithdrawalRate() / 100 * this.getAmountNeededToRetire();
  }

  calcYearsToDeplete(){
    // calculates the number of years it will take to deplete retirement funds
    let wa = this.getWithdrawalAmount();
    let r = parseFloat(this.state.rateOfReturn.replace(',','') / 100);
    let n = (1 / wa) * r * this.getAmountNeededToRetire();
    n = 1 - n;
    n = Math.max( (1 / n), 0.000001 );
    n = Math.log(n);
    n = n / ( Math.log(1 + r) );
    n = Math.ceil(n * 10) / 10;
    
    return n;
  }

  printResults():
    // prints the results of the years to retire calculator
    print(f"\nYour annual savings rate (of after tax income) is {user.savingsRate}%. Starting with your current savings of " + pC(user.currentPortfolioBal) + 
    " plus saving and additional " + pC(user.annualSavings) + " per year, you will accumulate " + pC(user.amtNeededToRetire) + 
    f" in {user.yearsToRetire} years. You will be {user.age + user.yearsToRetire}. At that point you can begin withdrawing no more than {user.withdrawalRate}% which is " + 
    pC(user.withdrawalAmt) + f" per year. Considering your expected average annual return on investment of {user.annualROR}%, ", end = " ")
    if (user.yearsToDeplete < 0):
        print(f"these funds will hopefully outlast you, and even grow over time.")
    else:
        print(f"These funds should last you {user.yearsToDeplete} years, or until you are {user.age + user.yearsToDeplete}.")


  render() {
    return (
          <Form onSubmit={ this.handleSubmit }>
            <h3>Calculate Your FI Date:</h3>
          <FormGroup as={Row} controlId="1">
            <Label column sm={2}>
            <a href="https://www.youtube.com/watch?v=K7l5ZeVVoCA" target="_blank"> What's My Age Again? </a>
            </Label>
            <Col sm={10}>
              <Input 
                type="text" 
                name="age"
                placeholder="Age" 
                value={this.state.age} 
                onChange={this.myChangeHandler}
                />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="2">
            <Label column sm={2}>
              How Much Money Do You Make After Taxes? <a href="https://smartasset.com/taxes/paycheck-calculator" target="_blank">Need Help?</a>
            </Label>
            <Col sm={10}>
            <Input 
                type="text" 
                name="annualIncomeAfterTaxes"
                placeholder="50,000" 
                value={this.state.annualIncomeAfterTaxes} 
                onChange={this.myChangeHandler}
                />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="3">
            <Label column sm={2}>
              How Much Money Do You Spend Each Year? <a href="quicken.com/budget-calculator" target="_blank">Need Help?</a>
            </Label>
            <Col sm={10}>
            <Input 
                type="text" 
                name="yearlyExpenses"
                placeholder="30,000" 
                value={this.state.yearlyExpenses} 
                onChange={this.myChangeHandler}
                aria-describedby="expensesHelpBlock"
            /> 
              <Form.Text id="expensesHelpBlock" muted>
              Take your monthly budget and multiply by 12.
              </Form.Text>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="5">
            <Label column sm={2}>
              How Much Money Do You Save Each Year?
            </Label>
            <Col sm={10}>
            <Input 
                type="text" 
                name="yearlySavings"
                placeholder="20,000" 
                value={this.state.yearlySavings} 
                onChange={this.myChangeHandler}
                aria-describedby="savingsHelpBlock"
            /> 
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
            <Input 
                type="text" 
                name="portfolioBalance"
                placeholder="20,000" 
                value={this.state.portfolioBalance} 
                onChange={this.myChangeHandler}
                aria-describedby="portfolioHelpBlock"
            />
              <Form.Text id="portfolioHelpBlock" muted>
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
            <Input 
                type="text" 
                name="rateOfReturn"
                placeholder="5.0" 
                onChange={this.myChangeHandler} 
                onChange={e => this.setState({ rateOfReturn: e.target.value })}
            />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="9">
            <Label column sm={2}>What Is Your Risk Tolerance?</Label>
            <Col sm={10}> 
            <select 
                type="text" 
                name="riskTolerance" 
                value={this.state.riskTolerance} 
                onChange={this.myChangeHandler}
                >
                  <option value="1">Low - Save More than Needed</option>
                  <option value="2">Medium - Save Recommended Amount</option>
                  <option value="3">High - Save Absolute Minimum Needed</option>
                </select>
            </Col>
          </FormGroup>

          <FormGroup as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" color="success"  onClick={this.handleSubmit}>Calculate FI Date!</Button>
            </Col>
          </FormGroup>
        </Form>
    );  
  }
}

export default Home;