import React from "react";

import "./AboutText.css";

import CodeOfConduct from "./CodeOfConduct";


function AboutText() {
  return (
    <div className="about__text">
      <section>
        <h4 className="about__title">About</h4>
        <p>
        This is a Financial Independence Calculator Full-Stack Web App created
        for the PSU Open Source class in the Summer 2020 by team "Uncle Buck".
        The calculator is a toy meant for entertainment purposes by allowing
        the user play around with some number to see if and when they can reach
        financial independence.
        </p>
        <br />
      </section>
      <section>
        <h4 className="about__title">Financial Independence</h4>
        <p>
        Financial Independence is the status of having enough income (from 
        investments, passive businesses, real estate, etc.) to pay for one's
        reasonable living expenses for the rest of one's life without having to
        rely on formal employment. The core path to achieve financial 
        independence focuses on maximizing one's savings rate through lower 
        spending and/or higher income.
        </p>
        <br />
      </section>
      <section>

        <h4 className="about__title">!!!  Disclaimer  !!!</h4>

        <h4>Education ~ How Our Calculator Works</h4>
        <p>
        <b>Here is how our calculator works.</b><br></br>As mentioned above, 
        reaching the state of financial independence means that your basic 
        expenses are covered from passive income. The passive income can 
        consist of rental income (not really passive, since owning rental 
        property takes work), interest and dividence payments from investments,
        pension payments, and social security payments. We won't go into the 
        details of if or how you obtain these sources of income here, but check
        out the resources section for more information. The real quick 
        calculator is here: take your annual expenses, multiple by 25, and 
        <b> boom</b>, that's the amount of money you need for financial 
        independence. Now let's talk about why that works. The average long 
        term annual growth rate of the S&P500 (which is commonly used to 
        benchmark stock market investment returns), after adjusting for 
        inflation (btw, we are treating inflation uniformly across our 
        calculations, so we assume that inflation will both increase annual 
        spending and annual investment returns at close to the same amount, 
        and therefore we eliminate them both from our calculation) is 
        <a target="_blank" href="https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp"> 7% </a>
        . If you look at shorter periods of time, sometimes the average is 
        lower, so to be safe we're going to use 5% for this example. In other 
        words, let's assume that we can assume that (on average, over long 
        periods of time) that our savings will return 5% per year. Now. 
        Remember that 25x annual expenses number we mentioned earlier? If you 
        were going to cover your expenses with passive income, then you'd need 
        to withdraw that amount from your savings each year. Well, 1/25th of 
        your savings is 4%. So each year you need to withdraw 4% of your 
        savings, and each year your savings should be growing by 5% (again, on 
        average). So basically by saving 25 times your annual expenses you are 
        setting yourself up such that your savings grows faster than you are 
        spending. This means that barring some extreme scenarios your savings 
        will remain intact longer than you will. Pretty nice! 
        <br></br><br></br>
        There are a few twists in our calculator, for example:
        <br></br><br></br>
        -  We set 5% as the default annual rate of return on investments for 
        the same reason mentioned above. You can play around with lower or 
        higher numbers based on your expected investment performance (hot 
        investment tips are welcome, send them to 
        <a target="_blank" href="https://github.com/Team-Uncle-Buck"> us</a> 
        !
        <br></br><br></br>
        -  We give you the option of adjusting the multiple of annual expenses 
        as a savings targer. If you have a low risk tolerance then we suggest 
        you save 30x and if you have a high risk tolerance then we suggest you
        save 20x. These numbers affect how long your savings may last after you
        start withdrawing. So if you want to *really* make sure the savings 
        last longer than you, assume a low risk tolerance in the calculator.
        <br></br><br></br>
        -  We give you the option of changing your withdrawal rate. As mentioned
        above, 4% annual withdrawal ratekeeps you just under the conservative 
        long term 5% investment growth rate. You can change this number higher 
        or lower based on your anticipate expenses. For example, maybe you 
        anticipate your expenses dropping when you hit financial independence 
        because you plan on downsizing your home and selling your automobile. 
        In that case, set your withdrawal rate lower. On the other hand, maybe 
        you're going to move into a larger home, or travel a lot. In that case,
        you'll need to increase your withdrawal rate to reflect the higher 
        spending levels.
        <br></br><br></br>
        Our calculator takes all these numbers into consideration and then 
        predicts (again, assuming no unforseen outstanding circumstances) how 
        long it will take you to accumulate enough funds to become financially
        independent, and then how long those funds should last you after you 
        start taking withdrawals. There are a few scenarios we don't yet take 
        into account. Most notably, what happens if you reach your financial 
        independence mark but keep working afterwards? Well, in short your 
        savings just grow even moreso than they already would. Maybe in version
        2.0 we'll expand the calculator reflect such a scenario.
        </p>
      </section>
      <section>
        <h4>!!!  Disclaimer  !!!</h4>

        <p>
        This tool is meant for entertainment purposes only. We are not 
        financial professionals. We assume no risk or responsibility for your 
        financial affairs, well being, nor do we assume any liability for your
        decisions. Everybody's financial situation is different, you cannot 
        rely on a single tool for guidance. For real advice on personal 
        finance, find a trusted certified public accountant
        <a target="_blank" href="https://www.aicpa.org/forthepublic/findacpa.html"> (CPA) </a> 
        or certified financial planner 
        <a target="_blank" href="https://www.letsmakeaplan.org/"> (CFP)</a>.
        </p>
        <br />
      </section>
      <section>
        <h4>Code of Conduct</h4>

        <p>
        LINK TO CODE OF CONDUCT DOCUMENT HERE
        </p>
        <br />

        <p>LINK TO CODE OF CONDUCT DOCUMENT HERE</p>
        {/* <Nav.Link href="/code_of_conduct">Code of Conduct</Nav.Link> */}
        {/* <CodeOfConduct/> */}

      </section>
      <section>
        <h4>License</h4>
        <p>
        LINK TO LICENSE HERE
        </p>
        <br />
      </section>
      <section>
        <h4>Team Uncle Buck</h4>
        <p>
        <a target="_blank" href="https://github.com/youn0125">Mi Yon Kim</a><br></br>
        <a target="_blank" href="https://github.com/tlan2">Tom More "$ Less Problems" Lancaster</a><br></br>
        <a target="_blank" href="https://github.com/PatRademacher">Pat Rademacher</a><br></br>
        <a target="_blank" href="https://github.com/tollesonpdx">Chad Tolleson</a><br></br>
        <a target="_blank" href="https://github.com/Team-Uncle-Buck">Team Uncle Buck</a>
        </p>
        <br />
      </section>
      <section>
        <h4>Additional Resources</h4>
        <p>
        <a target="_blank" href="https://smartasset.com/taxes/paycheck-calculator">Federal Paycheck Calculator</a><br></br>
        <a target="_blank" href="https://www.mrmoneymustache.com/">MMM Blog</a><br></br>
        <a target="_blank" href="https://www.madfientist.com/about/">Mad Fientist</a><br></br>
        <a target="_blank" href="https://en.wikipedia.org/wiki/Financial_independence">Financial Independence on Wikipedia</a><br></br>
        <a target="_blank" href="https://www.reddit.com/r/financialindependence/wiki/faq">Online Community About Financial Independence</a><br></br>
        <a target="_blank" href="https://www.daveramsey.com/dave-ramsey-7-baby-steps">Dave Ramsey's 7 Baby Steps</a><br></br>
        <a target="_blank" href="http://networthify.com/calculator/earlyretirement">Another, maybe better calculator: Networthify Retirement Calculator</a><br></br>
        <a target="_blank" href="https://www.firecalc.com/">Yet another, maybe better calculator. FIRECalc - A different kind of retirement calculator</a><br></br>
        

        <a target="_blank" href="https://www.aicpa.org/forthepublic/findacpa.html">Find a CPA</a><br></br>
        <a target="_blank" href="https://www.letsmakeaplan.org/">Find a CFP</a><br></br>

        </p>
        <br />
      </section>
      <section>
        <h4>What is Lorem Ipsum?</h4>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
        been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not 
        only five centuries, but also the leap into electronic typesetting, remaining essentially 
        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.

        </p>
        <br />
      </section>
    </div>
  );
}



export default AboutText;