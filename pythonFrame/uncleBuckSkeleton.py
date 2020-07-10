import time

class user(object):
    """holds the key data points for a user"""
    def __init__(self, age, annualIncomeAfterTaxes, annualExpenses, annualSavings, savingsRate, 
                 currentPortfolioBal, annualROR, riskTolerance):
        self.age = age
        self.annualIncomeAfterTaxes = annualIncomeAfterTaxes
        self.annualExpenses = annualExpenses
        self.annualSavings = annualSavings
        self.savingsRate = savingsRate
        self.currentPortfolioBal = currentPortfolioBal
        self.annualROR = annualROR
        # self.withdrawalRate = withdrawalRate
        self.riskTolerance = riskTolerance        

def getUserInput():
    """prompts user to input key data required for calcs"""
    if (1):
        age = int(input("What is your current age? (round to the nearest year)\n"))
        print("\nFor the following amounts, please round to the nearest $1,000.")
        annualIncomeAfterTaxes, annualExpenses, annualSavings, riskTolerance = 1,1,1,0
        while (annualIncomeAfterTaxes - annualExpenses - annualSavings != 0):
            annualIncomeAfterTaxes = int(input("What is your annual income after taxes?\n"))
            annualExpenses = int(input("What is the total amount of your annual expenses?\n"))
            annualSavings = int(input(f"What is the total amount you put into savings annually? "+
                                      f"Based on your previous answers, it should be "+
                                      f"${annualIncomeAfterTaxes-annualExpenses}.\n"))
            if (annualIncomeAfterTaxes - annualExpenses - annualSavings != 0):
                print("Income minus Expenses minus Savings must equal $0, please re-enter amounts.")
        savingsRate = calcSavingsRate(annualSavings, annualIncomeAfterTaxes)
        print(f"Annual Savings Rate (of after tax income) is {savingsRate}%")
        currentPortfolioBal = int(input("What is current balance of your savings and retirement funds?\n"))
        annualROR = float(input("What is your expected annual rate of return on investments (after inflation)? Enter a %:\n"))
        while (riskTolerance < 1 or riskTolerance > 3):
            riskTolerance = int(input("What is your risk tolerance?\n1 = low, so save a little extra,\n"+
                                      "2 = medium, save the generally recommended amount, or\n"+
                                      "3 = high, save the absolute miminum for the exercise:\n"))
        return user(age, annualIncomeAfterTaxes, annualExpenses, annualSavings, savingsRate, currentPortfolioBal, annualROR, riskTolerance)
    else: # this is dummy data for development purposes
        return user(40, 50000, 20000, 30000, calcSavingsRate(30000,50000),0,5.0,2)

def calcSavingsRate(annualSavings, annualIncomeAfterTaxes):
    sr = round(annualSavings / annualIncomeAfterTaxes * 100, 0)
    return sr

def yearsToRetire(u):
    """calculates the years to retire based on user input"""
    if u.riskTolerance == 3: multiplier = 20
    elif u.riskTolerance == 2: multiplier = 25
    else: multiplier = 30

    amtNeededToRetire = u.annualExpenses * multiplier
    years2retire = round( (amtNeededToRetire / u.annualSavings * u.annualROR), 1)
    withdrawalRate = float(input(f"What is your expected annual withdrawal rate? "+
                                 f"Based on your previous answers it should be "+
                                 f"{round(u.annualExpenses / amtNeededToRetire * 100, 1)}%:\n"))
    print(f"By saving {u.annualSavings} per year, it will take you "+
          f"{years2retire} years to save {amtNeededToRetire}. At which point "+
          f"you will withdraw no more than {withdrawalRate}% or "+
          f"{withdrawalRate/100 * amtNeededToRetire} per year. "+
          f"This gives you a great than 96% chance of maintaining the "+
          f"corpus for your whole retirement.")





if __name__ == "__main__":
    startTime = time.time()
    
    v = False
    
    user = getUserInput();
    yrs = yearsToRetire(user);
    
    
    pass



    print('\ntotal running time:',time.time()-startTime,'seconds')