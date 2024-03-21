// Function to determine loan eligibility based on user data
  function determineLoanEligibility(user) {
    const loanAmount = Math.floor(Math.random() * (1250 - 300 + 1)) + 250;   // Generate a loan amount between 200 and 1000

    // Determine eligibility based on credit score, debt, and risk factor score
    if (user.creditScore > 300 && user.debt < 200 && user.riskFactorScore < 5) {
      return {
        user,
        loanAmount: loanAmount,
        eligibility: true
      };
    } else {
      return {
        user,
        loanAmount: 0,
        eligibility: false
      };
    }

  }


  export {
    determineLoanEligibility
  }