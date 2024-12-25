const quizzes = [
  // Saving Category
  {
    title: "Basics of Saving - Beginner",
    questions: [
      {
        question: "What is an emergency fund?",
        options: [
          "Money saved for retirement",
          "Savings for unexpected expenses",
          "Funds used for vacations",
          "Money invested in stocks",
        ],
        correctAnswer: "Savings for unexpected expenses",
      },
      {
        question:
          "What is the recommended amount to save in an emergency fund?",
        options: [
          "1 month of expenses",
          "3-6 months of expenses",
          "1 year of expenses",
          "No specific amount",
        ],
        correctAnswer: "3-6 months of expenses",
      },
    ],
    category: "Saving",
    difficulty: "Beginner",
  },
  {
    title: "Saving Strategies - Intermediate",
    questions: [
      {
        question: "What is the 50/30/20 rule?",
        options: [
          "50% needs, 30% wants, 20% savings",
          "50% savings, 30% needs, 20% wants",
          "50% wants, 30% savings, 20% needs",
          "50% debt, 30% savings, 20% needs",
        ],
        correctAnswer: "50% needs, 30% wants, 20% savings",
      },
      {
        question: "What is a high-yield savings account?",
        options: [
          "An account with no interest",
          "An account with a higher interest rate than a regular savings account",
          "An account with monthly fees",
          "An account that requires a high minimum balance",
        ],
        correctAnswer:
          "An account with a higher interest rate than a regular savings account",
      },
    ],
    category: "Saving",
    difficulty: "Intermediate",
  },
  {
    title: "Advanced Saving Techniques - Advanced",
    questions: [
      {
        question: "What is a Certificate of Deposit (CD)?",
        options: [
          "A short-term loan",
          "A savings account with a fixed interest rate and term",
          "A type of investment fund",
          "A retirement account",
        ],
        correctAnswer: "A savings account with a fixed interest rate and term",
      },
      {
        question: "Which of the following is a common savings goal?",
        options: [
          "Buying a house",
          "Vacation",
          "Education",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
    ],
    category: "Saving",
    difficulty: "Advanced",
  },
  {
    title: "Savings Challenges - Pro",
    questions: [
      {
        question: "What is the primary advantage of automating savings?",
        options: [
          "Increased spending",
          "Reduced interest rates",
          "Consistency in saving",
          "Higher risk",
        ],
        correctAnswer: "Consistency in saving",
      },
      {
        question: "How can budgeting apps help with saving?",
        options: [
          "They increase expenses",
          "They track spending and savings goals",
          "They provide loans",
          "They replace bank accounts",
        ],
        correctAnswer: "They track spending and savings goals",
      },
    ],
    category: "Saving",
    difficulty: "Pro",
  },

  // Investing Category
  {
    title: "Investing Basics - Beginner",
    questions: [
      {
        question: "What is a stock?",
        options: [
          "A loan to a company",
          "A piece of ownership in a company",
          "A type of bond",
          "Cash in a bank account",
        ],
        correctAnswer: "A piece of ownership in a company",
      },
      {
        question: "What does ROI stand for?",
        options: [
          "Return on Investment",
          "Rate of Interest",
          "Real-time Online Investment",
          "Return of Income",
        ],
        correctAnswer: "Return on Investment",
      },
    ],
    category: "Investing",
    difficulty: "Beginner",
  },
  {
    title: "Investment Strategies - Intermediate",
    questions: [
      {
        question: "What is diversification in investing?",
        options: [
          "Investing in multiple assets to reduce risk",
          "Investing in only one type of asset",
          "Keeping all investments in cash",
          "Only investing in real estate",
        ],
        correctAnswer: "Investing in multiple assets to reduce risk",
      },
      {
        question: "What is a mutual fund?",
        options: [
          "A collection of stocks managed by a professional",
          "A loan from a bank",
          "A type of insurance",
          "A cash savings account",
        ],
        correctAnswer: "A collection of stocks managed by a professional",
      },
    ],
    category: "Investing",
    difficulty: "Intermediate",
  },
  {
    title: "Advanced Investing Concepts - Advanced",
    questions: [
      {
        question: "What is the difference between growth and value investing?",
        options: [
          "Growth investing focuses on companies with potential for growth; value investing focuses on undervalued companies.",
          "Growth investing focuses on bonds; value investing focuses on stocks.",
          "Growth investing is safer; value investing is riskier.",
          "There is no difference.",
        ],
        correctAnswer:
          "Growth investing focuses on companies with potential for growth; value investing focuses on undervalued companies.",
      },
      {
        question: "What is a bear market?",
        options: [
          "A market that is declining",
          "A market that is rising",
          "A stable market",
          "A market that is fluctuating",
        ],
        correctAnswer: "A market that is declining",
      },
    ],
    category: "Investing",
    difficulty: "Advanced",
  },
  {
    title: "Investment Strategies - Pro",
    questions: [
      {
        question: "What is a hedge fund?",
        options: [
          "A type of mutual fund for average investors",
          "An investment fund that uses advanced strategies to achieve high returns",
          "A type of savings account",
          "A government investment program",
        ],
        correctAnswer:
          "An investment fund that uses advanced strategies to achieve high returns",
      },
      {
        question: "What is the purpose of dollar-cost averaging?",
        options: [
          "To invest a fixed amount regularly to reduce the impact of market volatility",
          "To invest all at once for maximum returns",
          "To avoid investing in stocks",
          "To only invest in bonds",
        ],
        correctAnswer:
          "To invest a fixed amount regularly to reduce the impact of market volatility",
      },
    ],
    category: "Investing",
    difficulty: "Pro",
  },

  // Credit Category
  {
    title: "Credit Fundamentals - Beginner",
    questions: [
      {
        question: "What is a credit score?",
        options: [
          "A measure of savings",
          "A measure of investment success",
          "A numerical representation of creditworthiness",
          "An evaluation of insurance",
        ],
        correctAnswer: "A numerical representation of creditworthiness",
      },
      {
        question: "What is the primary purpose of a credit report?",
        options: [
          "To track income",
          "To assess creditworthiness",
          "To manage savings",
          "To calculate taxes",
        ],
        correctAnswer: "To assess creditworthiness",
      },
    ],
    category: "Credit",
    difficulty: "Beginner",
  },
  {
    title: "Understanding Credit - Intermediate",
    questions: [
      {
        question: "Which of the following can affect your credit score?",
        options: [
          "Payment history",
          "Credit utilization",
          "Length of credit history",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
      {
        question: "What is a secured credit card?",
        options: [
          "A credit card backed by a cash deposit",
          "A credit card with no fees",
          "A type of debit card",
          "A card that requires good credit",
        ],
        correctAnswer: "A credit card backed by a cash deposit",
      },
    ],
    category: "Credit",
    difficulty: "Intermediate",
  },
  {
    title: "Advanced Credit Concepts - Advanced",
    questions: [
      {
        question: "What is the best way to improve a credit score?",
        options: [
          "Paying bills on time",
          "Opening multiple new accounts",
          "Ignoring the credit report",
          "Only using cash",
        ],
        correctAnswer: "Paying bills on time",
      },
      {
        question: "What is credit utilization?",
        options: [
          "The total amount of credit available to you",
          "The percentage of credit you are using compared to your total credit limit",
          "The number of credit cards you have",
          "The length of your credit history",
        ],
        correctAnswer:
          "The percentage of credit you are using compared to your total credit limit",
      },
    ],
    category: "Credit",
    difficulty: "Advanced",
  },
  {
    title: "Credit Management - Pro",
    questions: [
      {
        question: "What is credit counseling?",
        options: [
          "Advice on how to get loans",
          "Help with managing debt and improving credit scores",
          "A way to avoid paying bills",
          "A type of investment strategy",
        ],
        correctAnswer: "Help with managing debt and improving credit scores",
      },
      {
        question: "How often should you check your credit report?",
        options: [
          "Once a year",
          "Every month",
          "Every six months",
          "Only when applying for a loan",
        ],
        correctAnswer: "Once a year",
      },
    ],
    category: "Credit",
    difficulty: "Pro",
  },

  // Personal Finance Category
  {
    title: "Personal Finance Basics - Beginner",
    questions: [
      {
        question: "What is a budget?",
        options: [
          "A plan for spending and saving money",
          "A way to invest money",
          "A loan from a bank",
          "A type of insurance",
        ],
        correctAnswer: "A plan for spending and saving money",
      },
      {
        question: "What is the first step in creating a budget?",
        options: [
          "Tracking expenses",
          "Setting financial goals",
          "Choosing an investment strategy",
          "Creating an emergency fund",
        ],
        correctAnswer: "Setting financial goals",
      },
    ],
    category: "Personal Finance",
    difficulty: "Beginner",
  },
  {
    title: "Personal Finance Strategies - Intermediate",
    questions: [
      {
        question: "What is the importance of having an emergency fund?",
        options: [
          "To save for a vacation",
          "To cover unexpected expenses",
          "To invest in stocks",
          "To pay off debt",
        ],
        correctAnswer: "To cover unexpected expenses",
      },
      {
        question: "What is a common method of tracking expenses?",
        options: [
          "Spreadsheets",
          "Investment platforms",
          "Insurance policies",
          "Loan applications",
        ],
        correctAnswer: "Spreadsheets",
      },
    ],
    category: "Personal Finance",
    difficulty: "Intermediate",
  },
  {
    title: "Advanced Personal Finance - Advanced",
    questions: [
      {
        question: "What is compound interest?",
        options: [
          "Interest calculated only on the initial principal",
          "Interest calculated on the principal and accumulated interest",
          "Interest paid only on loans",
          "Interest that is not paid",
        ],
        correctAnswer:
          "Interest calculated on the principal and accumulated interest",
      },
      {
        question: "What is the primary purpose of life insurance?",
        options: [
          "To provide savings",
          "To provide financial protection for dependents",
          "To pay off loans",
          "To invest for retirement",
        ],
        correctAnswer: "To provide financial protection for dependents",
      },
    ],
    category: "Personal Finance",
    difficulty: "Advanced",
  },
  {
    title: "Personal Finance Management - Pro",
    questions: [
      {
        question: "What is the primary goal of retirement planning?",
        options: [
          "To avoid paying taxes",
          "To ensure sufficient funds for retirement",
          "To invest in stocks",
          "To save for a vacation",
        ],
        correctAnswer: "To ensure sufficient funds for retirement",
      },
      {
        question: "What does 'net worth' represent?",
        options: [
          "Total assets minus total liabilities",
          "Total income",
          "Total savings",
          "Total expenses",
        ],
        correctAnswer: "Total assets minus total liabilities",
      },
    ],
    category: "Personal Finance",
    difficulty: "Pro",
  },

  // Debt Management Category
  {
    title: "Debt Basics - Beginner",
    questions: [
      {
        question: "What is a credit card?",
        options: [
          "A loan that must be paid back with interest",
          "A type of debit card",
          "A savings account",
          "A check",
        ],
        correctAnswer: "A loan that must be paid back with interest",
      },
      {
        question: "What does APR stand for?",
        options: [
          "Annual Percentage Rate",
          "Annual Payment Rate",
          "Annual Payback Rate",
          "Annual Prepayment Rate",
        ],
        correctAnswer: "Annual Percentage Rate",
      },
    ],
    category: "Debt Management",
    difficulty: "Beginner",
  },
  {
    title: "Debt Management Strategies - Intermediate",
    questions: [
      {
        question: "What is the snowball method?",
        options: [
          "Paying off debts from largest to smallest",
          "Paying off debts from smallest to largest",
          "Consolidating all debts into one",
          "Ignoring debts",
        ],
        correctAnswer: "Paying off debts from smallest to largest",
      },
      {
        question: "What is debt consolidation?",
        options: [
          "Taking out a new loan to pay off existing debts",
          "Ignoring debts",
          "Increasing credit limits",
          "A way to invest money",
        ],
        correctAnswer: "Taking out a new loan to pay off existing debts",
      },
    ],
    category: "Debt Management",
    difficulty: "Intermediate",
  },
  {
    title: "Advanced Debt Management - Advanced",
    questions: [
      {
        question: "What can happen if you miss a payment on a loan?",
        options: [
          "No consequences",
          "Higher interest rates and fees",
          "You receive a bonus",
          "Your credit score increases",
        ],
        correctAnswer: "Higher interest rates and fees",
      },
      {
        question: "What is the impact of bankruptcy on credit?",
        options: [
          "It improves credit score",
          "It has no impact",
          "It negatively affects credit score for several years",
          "It guarantees loan approval",
        ],
        correctAnswer: "It negatively affects credit score for several years",
      },
    ],
    category: "Debt Management",
    difficulty: "Advanced",
  },
  {
    title: "Debt Solutions - Pro",
    questions: [
      {
        question: "What is credit counseling?",
        options: [
          "Advice on how to get loans",
          "Help with managing debt and improving credit scores",
          "A way to avoid paying bills",
          "A type of investment strategy",
        ],
        correctAnswer: "Help with managing debt and improving credit scores",
      },
      {
        question: "What should be prioritized when paying off debt?",
        options: [
          "Minimum payments on all debts",
          "High-interest debt first",
          "Low-interest debt first",
          "Only paying bills",
        ],
        correctAnswer: "High-interest debt first",
      },
    ],
    category: "Debt Management",
    difficulty: "Pro",
  },

  // Insurance Category
  {
    title: "Insurance Basics - Beginner",
    questions: [
      {
        question: "What is the primary purpose of insurance?",
        options: [
          "To make a profit",
          "To provide financial protection",
          "To invest money",
          "To manage debts",
        ],
        correctAnswer: "To provide financial protection",
      },
      {
        question: "What is a premium in insurance?",
        options: [
          "The amount paid for coverage",
          "The amount paid when filing a claim",
          "The total coverage amount",
          "The deductible amount",
        ],
        correctAnswer: "The amount paid for coverage",
      },
    ],
    category: "Insurance",
    difficulty: "Beginner",
  },
  {
    title: "Understanding Insurance - Intermediate",
    questions: [
      {
        question: "What is a deductible in insurance?",
        options: [
          "The total coverage amount",
          "The amount you pay before insurance kicks in",
          "The premium amount",
          "The total payout for a claim",
        ],
        correctAnswer: "The amount you pay before insurance kicks in",
      },
      {
        question: "What is liability insurance?",
        options: [
          "Insurance that covers personal property",
          "Insurance that covers injuries to others for which you are responsible",
          "Insurance for health expenses",
          "Insurance for travel-related issues",
        ],
        correctAnswer:
          "Insurance that covers injuries to others for which you are responsible",
      },
    ],
    category: "Insurance",
    difficulty: "Intermediate",
  },
  {
    title: "Advanced Insurance Concepts - Advanced",
    questions: [
      {
        question: "What is whole life insurance?",
        options: [
          "Insurance that covers you for life with a cash value component",
          "Insurance that covers only a specific term",
          "Insurance that pays only for accidents",
          "Insurance that has no cash value",
        ],
        correctAnswer:
          "Insurance that covers you for life with a cash value component",
      },
      {
        question: "What does it mean to be 'underinsured'?",
        options: [
          "Having more insurance than needed",
          "Having insufficient insurance coverage for potential risks",
          "Having only liability coverage",
          "Having insurance that pays too much",
        ],
        correctAnswer:
          "Having insufficient insurance coverage for potential risks",
      },
    ],
    category: "Insurance",
    difficulty: "Advanced",
  },
  {
    title: "Insurance Strategies - Pro",
    questions: [
      {
        question: "What is the benefit of an umbrella policy?",
        options: [
          "It covers all types of insurance",
          "It provides additional liability coverage beyond other policies",
          "It eliminates deductibles",
          "It lowers premiums",
        ],
        correctAnswer:
          "It provides additional liability coverage beyond other policies",
      },
      {
        question: "What factors can affect life insurance premiums?",
        options: [
          "Age and health status",
          "Type of policy",
          "Coverage amount",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
    ],
    category: "Insurance",
    difficulty: "Pro",
  },

  // Risk Management Category
  {
    title: "Risk Management Basics - Beginner",
    questions: [
      {
        question: "What is risk management?",
        options: [
          "The process of identifying and analyzing potential risks",
          "A way to invest money",
          "A type of insurance",
          "A loan application process",
        ],
        correctAnswer:
          "The process of identifying and analyzing potential risks",
      },
      {
        question: "Why is risk management important?",
        options: [
          "It helps to increase profits",
          "It minimizes potential losses",
          "It guarantees success",
          "It is not necessary",
        ],
        correctAnswer: "It minimizes potential losses",
      },
    ],
    category: "Risk Management",
    difficulty: "Beginner",
  },
  {
    title: "Risk Assessment - Intermediate",
    questions: [
      {
        question: "What is a risk assessment?",
        options: [
          "Evaluating the potential for loss or damage",
          "A type of insurance policy",
          "A method of investing",
          "A way to track expenses",
        ],
        correctAnswer: "Evaluating the potential for loss or damage",
      },
      {
        question: "What is the first step in risk management?",
        options: [
          "Identifying potential risks",
          "Creating a budget",
          "Investing in stocks",
          "Filing an insurance claim",
        ],
        correctAnswer: "Identifying potential risks",
      },
    ],
    category: "Risk Management",
    difficulty: "Intermediate",
  },
  {
    title: "Advanced Risk Management - Advanced",
    questions: [
      {
        question: "What is the purpose of a risk management plan?",
        options: [
          "To eliminate all risks",
          "To outline strategies for managing risks",
          "To increase business profits",
          "To reduce expenses",
        ],
        correctAnswer: "To outline strategies for managing risks",
      },
      {
        question:
          "What is the difference between risk avoidance and risk reduction?",
        options: [
          "Avoidance means ignoring risks; reduction means minimizing them",
          "Avoidance means minimizing risks; reduction means eliminating them",
          "Avoidance means eliminating risks; reduction means minimizing them",
          "There is no difference",
        ],
        correctAnswer:
          "Avoidance means eliminating risks; reduction means minimizing them",
      },
    ],
    category: "Risk Management",
    difficulty: "Advanced",
  },
  {
    title: "Risk Management Strategies - Pro",
    questions: [
      {
        question: "What is risk transfer?",
        options: [
          "Shifting the risk to another party, often through insurance",
          "Ignoring the risk",
          "Taking on the risk yourself",
          "Minimizing the risk",
        ],
        correctAnswer:
          "Shifting the risk to another party, often through insurance",
      },
      {
        question: "What is an example of risk retention?",
        options: [
          "Not purchasing insurance",
          "Buying insurance",
          "Transferring the risk to another party",
          "Avoiding risky situations",
        ],
        correctAnswer: "Not purchasing insurance",
      },
    ],
    category: "Risk Management",
    difficulty: "Pro",
  },
];

export default quizzes;
