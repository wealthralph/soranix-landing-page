export const query = [
  {
    id: 1,
    title: "Show last year's travel expenses",
    transactions: [
      {
        id: "T001",
        merchant: "Delta Airlines",
        category: "Travel",
        amount: 250,
        date: "2023-04-15",
      },
      {
        id: "T002",
        merchant: "Hilton Hotels",
        category: "Travel",
        amount: 500,
        date: "2023-06-10",
      },
      {
        id: "T003",
        merchant: "Uber",
        category: "Transport",
        amount: 30,
        date: "2023-07-22",
      },
    ],
  },
  {
    id: 2,
    title: "How much did I spend on Agatha last month",
    transactions: [
      {
        id: "T004",
        merchant: "Agatha Books",
        category: "Books",
        amount: 45,
        date: "2023-10-01",
      },
      {
        id: "T005",
        merchant: "Agatha Cafe",
        category: "Food",
        amount: 20,
        date: "2023-10-15",
      },
    ],
  },
  {
    id: 3,
    title: "What were my grocery expenses this week",
    transactions: [
      {
        id: "T006",
        merchant: "Walmart",
        category: "Groceries",
        amount: 120,
        date: "2024-11-20",
      },
      {
        id: "T007",
        merchant: "Trader Joe's",
        category: "Groceries",
        amount: 80,
        date: "2024-11-23",
      },
    ],
  },
  {
    id: 4,
    title: "List this year utilities bills",
    transactions: [
      {
        id: "T008",
        merchant: "Electric Company",
        category: "Utilities",
        amount: 150,
        date: "2024-01-05",
      },
      {
        id: "T009",
        merchant: "Water Supply",
        category: "Utilities",
        amount: 50,
        date: "2024-02-10",
      },
    ],
  },
];


export const  chatQuestions = [
  {
    id: 1,
    question: "What are my top 5 spending categories?",
    agentResponse: "Your top 5 spending categories this month are: 1) Groceries - $500, 2) Rent - $1,200, 3) Dining Out - $350, 4) Transportation - $200, and 5) Subscriptions - $150. Would you like tips on reducing any of these expenses?",
    tools: [
      {
        label: "View Spending Chart",
        action: "generateSpendingChart", // Action to call a chart tool
      },
      {
        label: "Set Budget for Categories",
        action: "openBudgetingTool", // Action to open a budgeting tool
      }
    ]
  },
  {
    id: 2,
    question: "Which of my stocks are performing best?",
    agentResponse: "Your top-performing stocks are: 1) Tesla (+12%), 2) Apple (+8%), and 3) Nvidia (+15%) over the last month. Would you like me to compare these to your portfolio average or show trends over a longer period?",
    tools: [
      {
        label: "Compare Portfolio Performance",
        action: "comparePortfolioPerformance", // Compare stock performance
      },
      {
        label: "View Stock Trends",
        action: "generateStockTrendGraph", // View trends as a line graph
      }
    ]
  },
  {
    id: 3,
    question: "What are my income sources this month?",
    agentResponse: "Your income sources this month are: 1) Salary - $3,000, 2) Freelance Projects - $1,200, and 3) Investment Dividends - $300. Let me know if you'd like a breakdown of recurring income vs one-time earnings.",
    tools: [
      {
        label: "Break Down Recurring vs One-Time",
        action: "generateIncomeBreakdown", // Income type analysis
      },
      {
        label: "Predict Next Month's Income",
        action: "incomePredictionTool", // Predict future income
      }
    ]
  },
  {
    id: 4,
    question: "How much am I saving on average per month?",
    agentResponse: "Over the past 6 months, you've been saving an average of $800 per month, which is 20% of your total income. Would you like suggestions on increasing your savings rate?",
    tools: [
      {
        label: "Savings Rate Optimization Tips",
        action: "provideSavingsTips", // Offer actionable suggestions
      },
      {
        label: "View Savings History",
        action: "generateSavingsHistoryGraph", // Show savings trends
      }
    ]
  },
  {
    id: 5,
    question: "Do I have any upcoming bills or subscriptions due?",
    agentResponse: "Yes, you have the following upcoming bills: 1) Internet - $60 (due on the 5th), 2) Spotify Subscription - $12 (due on the 10th), and 3) Credit Card Payment - $500 (due on the 15th). Should I remind you closer to their due dates?",
    tools: [
      {
        label: "Set Reminders",
        action: "setBillReminders", // Add reminders to user's schedule
      },
      {
        label: "View All Bills",
        action: "viewUpcomingBills", // Navigate to bills list
      }
    ]
  },
  {
    id: 6,
    question: "How is my net worth changing over time?",
    agentResponse: "Over the last year, your net worth has increased by 15%, primarily driven by higher savings and growth in your investments. Would you like to see a detailed breakdown by month?",
    tools: [
      {
        label: "View Net Worth Graph",
        action: "generateNetWorthGraph", // Generate a net worth chart
      },
      {
        label: "Analyze Investment Growth",
        action: "analyzeInvestmentGrowth", // Open investment analysis tool
      }
    ]
  },
  {
    id: 7,
    question: "Am I on track with my financial goals?",
    agentResponse: "You're currently 80% on track to meet your financial goals this year, thanks to consistent savings and investment contributions. To close the gap, consider reducing discretionary spending by 10% or increasing your monthly savings target.",
    tools: [
      {
        label: "Adjust Financial Goals",
        action: "adjustGoalsTool", // Open goal adjustment tool
      },
      {
        label: "Track Goal Progress",
        action: "generateGoalProgressGraph", // Show progress visually
      }
    ]
  }
];
