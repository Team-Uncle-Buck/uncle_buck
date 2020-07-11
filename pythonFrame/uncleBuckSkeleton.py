import time

class user(object):
    """holds the key data points for a user"""
    def __init__(self, age, annualIncomeAfterTaxes, annualExpenses, annualSavings, 
                 currentPortfolioBal, annualROR, riskTolerance):
        self.age = age
        self.annualIncomeAfterTaxes = annualIncomeAfterTaxes
        self.annualExpenses = annualExpenses
        self.annualSavings = annualSavings
        self.currentPortfolioBal = currentPortfolioBal
        self.annualROR = annualROR
        self.riskTolerance = riskTolerance
        self.multiplier = None
        self.savingsRate = None
        self.amtNeededToRetire = None
        self.amtNeededToSave = None
        self.yearsToRetire = None
        self.withdrawalRate = None 
        self.withdrawalAmt = None
        self.yearsToDeplete = None

def getUserInput():
    """prompts user to input key data required for calcs"""
    if (0):
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
        currentPortfolioBal = int(input("What is current balance of your savings and retirement funds?\n"))
        annualROR = float(input("What is your expected annual rate of return on investments (after inflation)? Enter a %:\n"))
        while (riskTolerance < 1 or riskTolerance > 3):
            riskTolerance = int(input("What is your risk tolerance?\n1 = low, so save a little extra,\n"+
                                      "2 = medium, save the generally recommended amount, or\n"+
                                      "3 = high, save the absolute miminum for the exercise:\n"))
        return user(age, annualIncomeAfterTaxes, annualExpenses, annualSavings, 
                    currentPortfolioBal, annualROR, riskTolerance)
    else: # this is dummy data for development purposes
        return user(40, 50000, 20000, 30000, 0, 5.0, 2)

def calcSavingsRate(annualSavings, annualIncomeAfterTaxes):
    sr = round(annualSavings / annualIncomeAfterTaxes * 100, 0)
    return sr

def yearsToRetire(user):
    """calculates the years to retire based on user input"""
    if user.riskTolerance == 3: user.multiplier = 20
    elif user.riskTolerance == 2: user.multiplier = 25
    else: user.multiplier = 30

    user.savingsRate = calcSavingsRate(user.annualSavings, user.annualIncomeAfterTaxes)
    user.amtNeededToRetire = user.annualExpenses * user.multiplier
    user.amtNeededToSave = user.amtNeededToRetire - user.currentPortfolioBal
    user.yearsToRetire = round( (user.amtNeededToSave / user.annualSavings), 2)
    user.withdrawalRate = round(user.annualExpenses / user.amtNeededToRetire * 100, 1)
    user.withdrawalRate = float(input(f"What is your expected annual withdrawal rate? "+
                                 f"Based on your previous answers it should be about "+
                                 f"{user.withdrawalRate}%. Make it a little lower to "+
                                 f"be more conservative, or higher to be risky. Lower "+
                                 f"rates means your savings will last longer.\n"))
    user.withdrawalAmt = user.withdrawalRate / 100 * user.amtNeededToRetire
    user.yearsToDeplete = round(user.amtNeededToRetire / user.withdrawalAmt, 1)

def printResults(user):
    """prints the results of the years to retire calculator"""
    print(f"Annual Savings Rate (of after tax income) is {user.savingsRate}%")
    print(f"By saving "+ pC(user.annualSavings) +" per year, it will take you "+
          f"{user.yearsToRetire} years to save "+pC(user.amtNeededToRetire)+". At which point "+
          f"you will withdraw no more than {user.withdrawalRate}% or "+
          pC(user.withdrawalAmt)+f" per year. These funds should last you {user.yearsToDeplete} years.")

def pC(n):
    return ("${:0,.0f}".format(n).replace('$-','-$'))

if __name__ == "__main__":
    startTime = time.time()
    
    v = False
    
    user = getUserInput()
    yearsToRetire(user)
    printResults(user)    
    
    print('\ntotal running time:',time.time()-startTime,'seconds')