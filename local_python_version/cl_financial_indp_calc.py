import time
import math

CK_MIN = 0.000001

class User(object):
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
    def __str__(self):
        return str(self.__class__) + ": " + str(self.__dict__)

def getUserInput():
    """prompts user to input key data required for calcs"""
    if (0):
        if (v): print('*** getting user input')
        age = int(input("\nWhat is your current age?\n(round to the nearest year)\n"))
        print("\nFor the following amounts, please round to the nearest thousand. Enter amounts in this format 15000 with no commas or currency symbols.")
        annualIncomeAfterTaxes, annualExpenses, annualSavings, riskTolerance = 1,1,1,0
        while (annualIncomeAfterTaxes - annualExpenses - annualSavings != 0):
            annualIncomeAfterTaxes = int(input("\nWhat is your annual income after taxes?\n"))
            annualExpenses = int(input("\nWhat is the total amount of your annual expenses?\n"))
            if annualExpenses <= 0:
                print("No expenses?!? You're already ready to retire!")
                exit(0)
            annualSavings = int(input(f"\nWhat is the total amount you put into savings annually? Based on your previous answers, it should be " + pC(annualIncomeAfterTaxes-annualExpenses) +".\n"))
            if (annualIncomeAfterTaxes - annualExpenses - annualSavings != 0):
                print("Income minus Expenses minus Savings must equal $0, please re-enter amounts.")
        if (annualSavings <= 0):
            print("Your current expense are greater than your income. If you don't currently have enough money saved for retirement, then your first priority needs to be either (better yet, both) increasing your income or (and) decreasing your expeses.\n")
        currentPortfolioBal = int(input("\nWhat is current balance of your net savings and retirement funds?\n(or debt, enter a negative value for net debt)\n"))
        annualROR = float(input("\nWhat is your expected annual rate of return on investments after inflation?\n(Enter a percentage, for example enter 5.0% as 5.0)\n"))
        annualROR = max(annualROR, CK_MIN)
        while (riskTolerance < 1 or riskTolerance > 3):
            riskTolerance = int(input("\nWhat is your risk tolerance?\n1 = low, so save a little extra,\n"+
                                      "2 = medium, save the generally recommended amount, or\n"+
                                      "3 = high, save the absolute miminum for the exercise:\n"))
        return User(age, annualIncomeAfterTaxes, annualExpenses, annualSavings, 
                    currentPortfolioBal, annualROR, riskTolerance)
    else: # this is dummy data for development purposes
        if (v): print("*** using default user")
        return User(40, 50000, 30000, 20000, 20000, 5.0, 2)

def calcSavingsRate(annualSavings, annualIncomeAfterTaxes):
    sr = round(annualSavings / annualIncomeAfterTaxes * 100, 0)
    return sr

def retireCalcs(user):
    """calculates the years to retire based on user input"""
    if (v): print('*** calculating retirement numbers')
    
    if user.riskTolerance == 3: user.multiplier = 20
    elif user.riskTolerance == 2: user.multiplier = 25
    else: user.multiplier = 30

    user.savingsRate = calcSavingsRate(user.annualSavings, user.annualIncomeAfterTaxes)
    user.amtNeededToRetire = user.annualExpenses * user.multiplier
    user.amtNeededToSave = user.amtNeededToRetire - user.currentPortfolioBal    
    user.yearsToRetire = calcYearsToRetire(user)    
    user.withdrawalRate = getWithdrawalRate(user)
    user.withdrawalAmt = user.withdrawalRate / 100 * user.amtNeededToRetire
    user.yearsToDeplete = calcYearsToDeplete(user)

def tvmPeriods(PV, C, r, FV):
    """this function calculates the number of periods (years) it takes to get from the present value (PV) to the future value (FV) given a periodic rate (r) and periodic payment (C) """
    print(f"PV={PV} C={C} r={r} FC={FV}")
    r /= 100
    n = (FV * r + C)
    print(f"n={n}")
    n = n / (PV * r + C)
    print(f"n={n}")
    n = math.log(n)
    print(f"n={n}")
    n = n / (math.log(1 + r))
    print(f"n={n}")
    n = math.ceil(n * 10) / 10
    print(f"n={n}")
    return n

def calcYearsToRetire(user):
    """calculates the number of years it will take user to retire given their stats"""
    if (v): print('*** calculating number of years until retirement funds are accumulated')
    if (user.annualSavings <= 0):
        return float("inf")
    else:
        return tvmPeriods(user.currentPortfolioBal, user.annualSavings, user.annualROR, user.amtNeededToRetire)

def getWithdrawalRate(user):
    withRate = round(user.annualExpenses / user.amtNeededToRetire * 100, 1)
    print(f"\nWhat is your expected annual withdrawal rate? Based on your previous answers it should be about {withRate}% to maintain your current lifestyle into retirement. Make it a little lower to be more conservative, or higher to be risky. Lower rates means your savings will last longer.")
    withRate = float(input(f"(Enter a percentage, for example enter 4.0% as 4.0)\n"))
    return withRate

def calcYearsToDeplete(user):
    """ calculates the number of years it will take to deplete retirement funds"""
    # n2= tvmPeriods(user.amtNeededToRetire, user.withdrawalAmt*-1, user.annualROR, 0)
    wa = user.withdrawalAmt
    r = user.annualROR / 100
    n = (1 / wa) * r * user.amtNeededToRetire
    n = 1 - n
    n = max( (1 / n), 0.000001 )
    n = math.log(n)
    n = n / ( math.log(1 + r) )
    n = math.ceil(n * 10) / 10
    return n

def printResults(user):
    """prints the results of the years to retire calculator"""
    print(f"\nYour annual savings rate (of after tax income) is {user.savingsRate}%. Starting with your current savings of " + pC(user.currentPortfolioBal) + " plus saving an additional " + pC(user.annualSavings) + " per year, you will accumulate " + pC(user.amtNeededToRetire), end=" ")
    if (user.yearsToRetire < 0 or user.yearsToRetire == float("inf")):
        print("never... If you don't currently have enough money saved for retirement, then your first priority needs to be either (better yet, both) increasing your income or (and) decreasing your expeses.", end=" ")
    else:
        print(f" in {user.yearsToRetire} years. You will be {user.age + user.yearsToRetire}.", end=" ")
        print(f"At that point you can begin withdrawing no more than {user.withdrawalRate}% which is " + pC(user.withdrawalAmt) + f" per year. Considering your expected average annual return on investment of {user.annualROR}%, ", end = " ")
        if (user.yearsToDeplete < 0):
            print(f"these funds will hopefully outlast you, and even grow over time.")
        else:
            print(f"These funds should last you {user.yearsToDeplete} years, or until you are {user.age + user.yearsToDeplete}.")

def pC(n):
    """format string that takes a number and formats it for currency"""
    return ("${:0,.0f}".format(n).replace('$-','-$'))

if __name__ == "__main__":
    startTime = time.time()
    
    v = 0

    user = getUserInput()
    retireCalcs(user)
    printResults(user)    
    
    print('\ntotal running time:',time.time()-startTime,'seconds')