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

const validNumberRegex = RegExp(/^(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$/i);
const validDecimalRegex = RegExp(/^\d*\.?\d+$/i);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

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
      withdrawalAmount: '',
      riskTolerance: '',
      status: 'form',
      errors: {
        age: '',
        annualIncomeAfterTaxes: '',
        yearlyExpenses: '',
        yearlySavings: '',
        portfolioBalance: '',
        rateOfReturn: '',
        withdrawalAmount: '',
        riskTolerance: ''
      }
    };
  }

  myChangeHandler = (event) => {
    event.preventDefault();
    let name = event.target.name; // pulls from "name" attribute in input
    let value = event.target.value; // pulls from "value" attribute in input
    let errors = this.state.errors;
    // const { name, value } = event.target;
    

    switch (name) {
      case 'age': 
        errors.age = 
          value > 110
            ? 'Age must be positive number and less than the oldest living person.'
            : '';
        break;
      case 'annualIncomeAfterTaxes': 
        errors.annualIncomeAfterTaxes = 
          validNumberRegex.test(value)
            ? ''
            : 'Input is not valid! Must be a number.';
        break;
      case 'yearlyExpenses': 
        errors.yearlyExpenses = 
          validNumberRegex.test(value)
            ? ''
            : 'Input is not valid! Must be a number.';
        break;
      case 'yearlySavings': 
        errors.yearlySavings = 
          validNumberRegex.test(value)
            ? ''
            : 'Input is not valid! Must be a number.';
        break;
      case 'portfolioBalance': 
        errors.portfolioBalance = 
          validNumberRegex.test(value)
            ? ''
            : 'Input is not valid! Must be a number.';
        break;
      case 'rateOfReturn': 
        errors.rateOfReturn = 
          validDecimalRegex.test(value)
            ? ''
            : 'Input is not valid! Must be a number with no commas. Decimals optional.';
          break;
      case 'withdrawalAmount':
        errors.withdrawalAmount = 
          validDecimalRegex.test(value)
            ? ''
            : 'Input is not valid! Must be a number with no commas. Decimals optional.';
          break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form');
      this.retireCalcs();
      this.setState({ status: "results" });
    }else{
      console.error('Invalid Form');
      console.log(this.state.errors);
    }

    console.log('The link was clicked.');
    console.log(`Age: ${this.state.age}`);
    console.log(`Annual Income After Taxes: ${this.state.annualIncomeAfterTaxes}`);
    console.log(`Yearly Expenses: ${this.state.yearlyExpenses}`);
    console.log(`Yearly Savings: ${this.state.yearlySavings}`);
    console.log(`Portfolio Balance: ${this.state.portfolioBalance}`);
    console.log(`Rate of Return: ${this.state.rateOfReturn}`);
    console.log(`Withdrawal Amount: ${this.state.withdrawalAmount}`);
    console.log(`Risk Tolerance: ${this.state.riskTolerance}`);
    console.log("Savings Rate = " + this.calcSavingsRate());
    
  }

  retireCalcs(){
    let multiplier = this.getMultiplier();
    let savingsRate = this.calcSavingsRate();
    let amountNeededToRetire = this.getAmountNeededToRetire();
    let amountNeededToSave = amountNeededToRetire - this.state.portfolioBalance.replace(',','');;
    let yearsToRetire = this.calcYearsToRetire();
    let withdrawalRate = this.getWithdrawalRate();
    let withdrawalAmount = parseFloat(this.state.withdrawalAmount);
    let yearsToDeplete = this.calcYearsToDeplete();

    console.log("multiplier = " + multiplier);
    console.log("amountNeededToRetire = " + amountNeededToRetire);
    console.log("savingsRate = " + savingsRate);
    // alert("yearsToRetire = " + yearsToRetire);
    console.log("yearsToRetire = " + yearsToRetire);
    // alert("withdrawalRate = " + withdrawalRate);
    console.log("withdrawalRate = " + withdrawalRate);
    // alert("withdrawalAmount = " + this.state.withdrawalAmount);
    console.log("withdrawalAmount = " + withdrawalAmount);
    // alert("amountNeededToSave = " + amountNeededToSave);
    console.log("amountNeededToSave = " + amountNeededToSave);
    // alert("yearsToDeplete = " + yearsToDeplete);
    console.log("yearsToDeplete = " + yearsToDeplete);  

  }

  getAmountNeededToRetire(){
    let amountNeededToRetire = parseFloat(this.state.yearlyExpenses.replace(',','') * this.getMultiplier());
    // alert("amountNeededToRetire = " + amountNeededToRetire);
    return amountNeededToRetire;
  }

  getMultiplier() {
    let multiplier = 0;

    if (this.state.riskTolerance === '3'){
      multiplier = 20;
    } else if (this.state.riskTolerance === '2'){
      multiplier = 25;
    } else {
      multiplier = 30;
    }

    return multiplier;
  }
  
  calcSavingsRate(){
    // returns the savings rate of the user
    let yearlySavings = this.state.yearlySavings.replace(',','');
    // alert("yearlySavings = " + yearlySavings)
    let annualIncomeAfterTaxes = this.state.annualIncomeAfterTaxes.replace(',','');
    // alert("annualIncomeAfterTaxes = " + annualIncomeAfterTaxes)
    let savingsRate = Math.round(yearlySavings / annualIncomeAfterTaxes * 100, 0);
    // alert("savingsRate = " + savingsRate)
    return savingsRate;
  }

  calcYearsToRetire(){
    // calculates the years to retire based on user input
    return this.tvmPeriods();
  }

  tvmPeriods(){
    // this function calculates the number of periods (years) it takes to get from 
    // the present value (PV) to the future value (FV) given a periodic rate 
    // (r) and periodic payment (C)
    let PV = this.state.portfolioBalance.replace(',','');
    let C = this.state.yearlySavings.replace(',','');
    let r = this.state.rateOfReturn.replace(',','');
    // let FV = this.state.yearlyExpenses.replace(',','') * this.getMultiplier();
    let FV = this.getAmountNeededToRetire();

    // alert("tvmPeriods values = " + PV + " " + C + " " + r + " " + FV);
    console.log("tvmPeriods FV values = " + FV);
    let n = 0;

    r /= 100;
    n = (FV * r + C);
    n = n / (PV * r + C);
    n = Math.log(n);
    n = n / (Math.log(1 + r));
    n = Math.ceil(n * 10) / 10;

    // alert("calcYearsToRetire = " + n);

    return n;
  }

  getWithdrawalRate(){
    // returns annual withdrawal rate
    let withRate = Math.round(this.state.yearlyExpenses.replace(',', '') / this.getAmountNeededToRetire() * 100, 1);
    
    return withRate;
  }

  calcYearsToDeplete(){
    // calculates the number of years it will take to deplete retirement funds
    let wa = this.state.withdrawalAmount;
    let r = this.state.rateOfReturn.replace(',','') / 100;
    let n = (1 / wa) * r * this.getAmountNeededToRetire();
    n = 1 - n;
    n = Math.max( (1 / n), 0.000001 );
    n = Math.log(n);
    n = n / ( Math.log(1 + r) );
    n = Math.ceil(n * 10) / 10;
    
    return n;
  }

  currFmt(amt) {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amt);
}

  printResults(){
    // Displays the results of the years to retire calculator
    let results = `Your annual savings rate (of after tax income) is ${this.calcSavingsRate()}%. 
    Starting with your current savings of ${'$' + this.state.portfolioBalance} plus saving and additional 
    ${"$" + this.state.yearlySavings + ".00"} per year, you will accumulate ${this.currFmt(this.getAmountNeededToRetire())} `; 
    
    if(this.calcYearsToRetire() < 0 || this.calcYearsToRetire() === Infinity){
      results += `never... If you don't currently have enough money saved for retirement, 
                  then your first priority needs to be either (better yet, both) increasing 
                  your income or (and) decreasing your expenses. `;
    } else {
        results += `in ${this.calcYearsToRetire().toFixed(1)} years. You will be ${Math.round(parseInt(this.state.age) + parseFloat(this.calcYearsToRetire()))}. 
                    At that point you can begin withdrawing no more than ${this.getWithdrawalRate()}% which is 
                    ${this.currFmt(this.getWithdrawalRate() / 100 * this.getAmountNeededToRetire())} per year. Considering your expected average annual return on investment 
                    of ${this.state.rateOfReturn}%, `;
        if(this.calcYearsToDeplete() < 0){
              results += "these funds will hopefully outlast you, and even grow over time.";
              return results;
      } else {
            results += `These funds should last you ${this.calcYearsToDeplete()} years, or until you are 
                        ${this.state.age + this.calcYearsToDeplete()}.`
            
            return results;
      }
    }
  }

  // FORM
  renderForm() {
    const {errors} = this.state;
    return (
          <Form onSubmit={ this.handleSubmit } noValidate>
            <h3 className='home_title'>Calculate Your FI Date:</h3>
          <FormGroup as={Row} controlId="1" className='home_text'>
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
                noValidate
                />
                 {errors.age.length > 0 && 
                <span className='error'>{errors.age}</span>}
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="2" className='home_text'>
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
                noValidate
                />
                 {errors.annualIncomeAfterTaxes.length > 0 && 
                <span className='error'>{errors.annualIncomeAfterTaxes}</span>}
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="3" className='home_text'>
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
             {errors.yearlyExpenses.length > 0 && 
                <span className='error'>{errors.yearlyExpenses}</span>} 
              <Form.Text id="expensesHelpBlock" muted>
              Take your monthly budget and multiply by 12.
              </Form.Text>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="5" className='home_text'>
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
             {errors.yearlySavings.length > 0 && 
                <span className='error'>{errors.yearlySavings}</span>} 
              <Form.Text id="savingsHelpBlock" muted>
                Subtract two numbers above.
              </Form.Text>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="7" className='home_text'>
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
             {errors.portfolioBalance.length > 0 && 
                <span className='error'>{errors.portfolioBalance}</span>}
              <Form.Text id="portfolioHelpBlock" muted>
              If you have more debt than savings, then subtract your total savings from 
              your total debt and enter a negative number here. For example you might have 
              $5,000 in savings account and $6,000 credit card balance. In that case, enter -1000 
              here... and pay off that credit card as quickly as possible!
              </Form.Text>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="8" className='home_text'>
            <Label column sm={2}>
             What Is Your Expected Annual Rate Of Return On Investments After Inflation?
            </Label>
            <Col sm={10}>
            <Input 
                type="text" 
                name="rateOfReturn"
                value={this.state.rateOfReturn}
                placeholder="5.0" 
                onChange={this.myChangeHandler}
            />
             {errors.rateOfReturn.length > 0 && 
                <span className='error'>{errors.rateOfReturn}</span>}
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="8" className='home_text'>
            <Label column sm={2}>
             What Percentage Of Your Nest Egg Would You Like To Withdraw?
            </Label>
            <Col sm={10}>
            <Input 
                type="text" 
                name="withdrawalAmount"
                value={this.state.withdrawalAmount}
                placeholder="4.0" 
                onChange={this.myChangeHandler} 
                aria-describedby="withdrawalAmountHelpBlock"
                />
                 {errors.withdrawalAmount.length > 0 && 
                <span className='error'>{errors.withdrawalAmount}</span>}
                  <Form.Text id="withdrawalAmountHelpBlock" muted>
                  This is a rule of thumb popularized by the 
                  <a href="https://en.wikipedia.org/wiki/Trinity_study" target="_blank"> Trinity Study. </a> 
                  Some financially independent people have pulled more and others less.
                  </Form.Text>
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="9" className='home_text'>
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

          <FormGroup as={Row} className='home_text'>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={this.handleSubmit}>Calculate FI Date!</Button>
            </Col>
          </FormGroup>
        </Form>
    );  
  }

  render() {
    const { status } = this.state;
    const submitted = status === "results";
    return (
      <>
        {/* Load Form */}
        {!submitted && this.renderForm()}
        {/* Show Results */}
        {submitted && <div id='results'>{this.printResults()}</div>}
        </>
    );
  }
}

export default Home;