import type { Term, LearningPath, Achievement } from "./types"

export const mockTerms: Term[] = [
  {
    id: "stock",
    name: "Stock",
    category: "Investing",
    subcategories: ["Equity", "Securities"],
    difficulty: "Beginner",
    shortDefinition:
      "A type of security that represents ownership in a corporation and a claim on part of the corporation's assets and earnings.",
    definition:
      "A stock (also known as equity) is a security that represents the ownership of a fraction of a corporation. This entitles the owner of the stock to a proportion of the corporation's assets and profits equal to how much stock they own. Units of stock are called 'shares.'",
    plainEnglish:
      "When you buy a stock, you're buying a small piece of a company. If the company does well, your stock is worth more. If it does poorly, your stock is worth less.",
    exampleUsage: "I bought 100 shares of Apple stock at $150 per share.",
    context:
      "Stocks are bought and sold primarily on stock exchanges and are the foundation of many individual investors' portfolios.",
    realWorldApplications:
      "Investors buy stocks to grow their wealth over time through capital appreciation and dividends. Companies issue stocks to raise capital for expansion, research, or other business activities.",
  },
  {
    id: "bond",
    name: "Bond",
    category: "Investing",
    subcategories: ["Fixed Income", "Debt Securities"],
    difficulty: "Beginner",
    shortDefinition:
      "A debt security where an investor loans money to an entity for a defined period at a fixed interest rate.",
    definition:
      "A bond is a fixed income instrument that represents a loan made by an investor to a borrower (typically corporate or governmental). A bond is a debt security, under which the issuer owes the holders a debt and is obliged to pay them interest (the coupon) and/or to repay the principal at a later date, termed the maturity date.",
    plainEnglish:
      "A bond is like an IOU. You lend money to a company or government, and they promise to pay you back with interest after a certain period.",
    exampleUsage: "The city issued municipal bonds to finance the new bridge construction.",
    context:
      "Bonds are considered less risky than stocks but typically offer lower returns. They're often used to diversify investment portfolios.",
    realWorldApplications:
      "Governments issue bonds to fund infrastructure projects. Investors buy bonds for steady income and to balance riskier investments in their portfolios.",
  },
  {
    id: "inflation",
    name: "Inflation",
    category: "Economy",
    subcategories: ["Macroeconomics", "Monetary Policy"],
    difficulty: "Beginner",
    shortDefinition: "A general increase in prices and fall in the purchasing value of money.",
    definition:
      "Inflation is the rate at which the general level of prices for goods and services is rising and, consequently, the purchasing power of currency is falling. Central banks attempt to limit inflation — and avoid deflation — in order to keep the economy running smoothly.",
    plainEnglish:
      "Inflation means that prices go up over time, so your money buys less than it used to. If a candy bar cost $1 last year but costs $1.05 this year, that's inflation.",
    exampleUsage:
      "The country experienced 3% inflation last year, meaning the same basket of goods costs 3% more than the previous year.",
    context:
      "Some inflation is considered normal in a healthy economy, but high inflation can be problematic and reduce purchasing power significantly.",
    realWorldApplications:
      "Central banks like the Federal Reserve adjust interest rates to control inflation. Consumers experience inflation through rising prices for everyday goods and services.",
  },
  {
    id: "dividend",
    name: "Dividend",
    category: "Investing",
    subcategories: ["Stocks", "Income Investing"],
    difficulty: "Beginner",
    shortDefinition: "A portion of a company's earnings paid to shareholders as a reward for their investment.",
    definition:
      "A dividend is a distribution of a portion of a company's earnings, decided by the board of directors, to a class of its shareholders. Dividends can be issued as cash payments, as shares of stock, or other property.",
    plainEnglish:
      "A dividend is like a reward for owning a stock. If you own shares in a company that pays dividends, you'll receive a portion of their profits regularly, usually every quarter.",
    exampleUsage:
      "The company announced a quarterly dividend of $0.88 per share, payable to shareholders of record as of June 1.",
    context:
      "Not all companies pay dividends. Growth companies often reinvest profits rather than paying dividends, while established companies with stable earnings often pay regular dividends.",
    realWorldApplications:
      "Retirees often invest in dividend-paying stocks for regular income. Dividend reinvestment plans (DRIPs) allow investors to automatically use dividends to purchase more shares.",
  },
  {
    id: "bull-market",
    name: "Bull Market",
    category: "Trading",
    subcategories: ["Market Trends", "Stock Market"],
    difficulty: "Beginner",
    shortDefinition: "A market condition where prices are rising or expected to rise.",
    definition:
      "A bull market is a financial market of a group of securities in which prices are rising or are expected to rise. The term 'bull market' is most often used to refer to the stock market but can be applied to anything that is traded, such as bonds, real estate, currencies, and commodities.",
    plainEnglish:
      "A bull market is when stock prices are going up and investors are optimistic. Think of a bull charging forward and pushing prices up with its horns.",
    exampleUsage: "We've been in a bull market for the past decade, with the S&P 500 more than tripling in value.",
    context:
      "Bull markets often coincide with economic expansion and investor confidence. They can last for months or years.",
    realWorldApplications:
      "During bull markets, investors often take on more risk and buy more stocks. Companies may use strong bull markets as opportunities to issue new stock.",
  },
  {
    id: "bear-market",
    name: "Bear Market",
    category: "Trading",
    subcategories: ["Market Trends", "Stock Market"],
    difficulty: "Beginner",
    shortDefinition: "A market condition where prices are falling or expected to fall.",
    definition:
      "A bear market is a condition in which securities prices fall 20% or more from recent highs amid widespread pessimism and negative investor sentiment. Bear markets are often associated with declines in an overall market or index like the S&P 500, but individual securities or commodities can also be considered to be in a bear market if they experience a decline of 20% or more over a sustained period.",
    plainEnglish:
      "A bear market is when stock prices are falling and investors are pessimistic. Think of a bear swiping downward with its paw, pushing prices down.",
    exampleUsage: "The stock market entered bear market territory after falling more than 20% from its peak.",
    context:
      "Bear markets often coincide with economic recessions and investor fear. They typically don't last as long as bull markets.",
    realWorldApplications:
      "During bear markets, investors often move to safer assets like bonds or cash. Companies may delay going public or issuing new stock during bear markets.",
  },
  {
    id: "diversification",
    name: "Diversification",
    category: "Investing",
    subcategories: ["Risk Management", "Portfolio Strategy"],
    difficulty: "Intermediate",
    shortDefinition: "The practice of spreading investments among different assets to reduce risk.",
    definition:
      "Diversification is a risk management strategy that mixes a wide variety of investments within a portfolio. The rationale behind this technique is that a portfolio constructed of different kinds of assets will, on average, yield higher long-term returns and lower the risk of any individual holding or security.",
    plainEnglish:
      "Diversification means not putting all your eggs in one basket. By spreading your money across different types of investments, you reduce the risk of losing everything if one investment performs poorly.",
    exampleUsage: "For better diversification, she invested in a mix of stocks, bonds, real estate, and commodities.",
    context:
      "Diversification is a cornerstone of modern portfolio theory and is widely recommended by financial advisors.",
    realWorldApplications:
      "Investors use index funds and ETFs to easily diversify across hundreds or thousands of companies. Retirement portfolios often become more diversified and conservative as the investor approaches retirement age.",
  },
  {
    id: "liquidity",
    name: "Liquidity",
    category: "Finance",
    subcategories: ["Markets", "Trading"],
    difficulty: "Intermediate",
    shortDefinition: "The ease with which an asset can be converted into cash without affecting its market price.",
    definition:
      "Liquidity refers to the ease with which an asset, or security, can be converted into ready cash without affecting its market price. Cash is the most liquid of assets while tangible items are less liquid. The two main types of liquidity are market liquidity and accounting liquidity.",
    plainEnglish:
      "Liquidity is about how quickly you can sell something for cash without losing money. Cash is perfectly liquid. A house is not very liquid because it takes time to sell and you might have to lower the price to sell it quickly.",
    exampleUsage: "The stock has high liquidity, with millions of shares traded daily.",
    context:
      "Market liquidity is important for investors who need to enter and exit positions quickly. Liquidity can dry up during market crises, making it difficult to sell assets without significant price concessions.",
    realWorldApplications:
      "Companies maintain liquidity to meet short-term obligations. Investors consider liquidity when deciding which assets to include in their portfolios, especially if they might need cash quickly.",
  },
  {
    id: "gdp",
    name: "GDP (Gross Domestic Product)",
    category: "Economy",
    subcategories: ["Macroeconomics", "Economic Indicators"],
    difficulty: "Intermediate",
    shortDefinition:
      "The total value of goods and services produced within a country's borders in a specific time period.",
    definition:
      "Gross Domestic Product (GDP) is the monetary value of all finished goods and services made within a country during a specific period. GDP provides an economic snapshot of a country, used to estimate the size of an economy and growth rate.",
    plainEnglish:
      "GDP measures the total value of everything a country produces. It's like a report card for a country's economic performance.",
    exampleUsage: "The country's GDP grew by 2.5% last quarter, indicating moderate economic expansion.",
    context:
      "GDP is one of the most important indicators of economic health. It's typically reported quarterly and annually.",
    realWorldApplications:
      "Policymakers use GDP to make decisions about monetary and fiscal policy. Businesses use GDP forecasts for strategic planning and investment decisions.",
  },
  {
    id: "leverage",
    name: "Leverage",
    category: "Finance",
    subcategories: ["Debt", "Investing"],
    difficulty: "Advanced",
    shortDefinition: "The use of borrowed money to increase the potential return of an investment.",
    definition:
      "Leverage is the use of debt (borrowed capital) in order to undertake an investment or project. The result is to multiply the potential returns from a project. At the same time, leverage will also multiply the potential downside risk in case the investment does not pan out.",
    plainEnglish:
      "Leverage is like using a credit card to invest. You're using someone else's money to make your investment bigger, which can lead to bigger gains but also bigger losses.",
    exampleUsage:
      "The real estate investor used leverage by putting 20% down and financing the remaining 80% with a mortgage.",
    context:
      "Leverage can significantly increase returns in favorable markets but can lead to catastrophic losses in unfavorable ones. It played a major role in the 2008 financial crisis.",
    realWorldApplications:
      "Businesses use leverage to finance expansion without diluting ownership. Investors use margin accounts to leverage their stock investments. Private equity firms often use leverage to acquire companies.",
  },
]

export const mockLearningPaths: LearningPath[] = [
  {
    id: "investing-basics",
    title: "Investing Basics",
    description: "Learn the fundamental concepts of investing and build a solid foundation",
    difficulty: "Beginner",
    duration: "2 weeks",
    termCount: 20,
    enrolledCount: 1250,
    progress: 65,
  },
  {
    id: "stock-market-101",
    title: "Stock Market 101",
    description: "Understand how the stock market works and how to start investing in stocks",
    difficulty: "Beginner",
    duration: "3 weeks",
    termCount: 25,
    enrolledCount: 980,
    progress: 30,
  },
  {
    id: "personal-finance",
    title: "Personal Finance Essentials",
    description: "Master the basics of personal finance and build healthy financial habits",
    difficulty: "Beginner",
    duration: "4 weeks",
    termCount: 30,
    enrolledCount: 1500,
    progress: 0,
  },
  {
    id: "trading-strategies",
    title: "Trading Strategies",
    description: "Learn different trading strategies and when to apply them",
    difficulty: "Intermediate",
    duration: "5 weeks",
    termCount: 35,
    enrolledCount: 750,
    progress: 0,
  },
  {
    id: "economic-indicators",
    title: "Economic Indicators",
    description: "Understand key economic indicators and how they affect markets",
    difficulty: "Intermediate",
    duration: "4 weeks",
    termCount: 28,
    enrolledCount: 620,
    progress: 15,
  },
  {
    id: "portfolio-management",
    title: "Portfolio Management",
    description: "Learn how to build and manage a diversified investment portfolio",
    difficulty: "Intermediate",
    duration: "6 weeks",
    termCount: 40,
    enrolledCount: 850,
    progress: 0,
  },
  {
    id: "options-trading",
    title: "Options Trading",
    description: "Master the concepts of options trading and advanced strategies",
    difficulty: "Advanced",
    duration: "8 weeks",
    termCount: 45,
    enrolledCount: 480,
    progress: 0,
  },
  {
    id: "technical-analysis",
    title: "Technical Analysis",
    description: "Learn how to analyze price charts and identify trading opportunities",
    difficulty: "Advanced",
    duration: "7 weeks",
    termCount: 42,
    enrolledCount: 520,
    progress: 0,
  },
]

export const mockAchievements: Achievement[] = [
  {
    id: "first-term",
    title: "First Steps",
    description: "Learn your first financial term",
    icon: "book",
    unlocked: true,
    progress: 100,
  },
  {
    id: "ten-terms",
    title: "Knowledge Builder",
    description: "Learn 10 financial terms",
    icon: "book",
    unlocked: true,
    progress: 100,
  },
  {
    id: "fifty-terms",
    title: "Term Master",
    description: "Learn 50 financial terms",
    icon: "book",
    unlocked: false,
    progress: 84,
  },
  {
    id: "streak-7",
    title: "Week Warrior",
    description: "Maintain a 7-day learning streak",
    icon: "flame",
    unlocked: true,
    progress: 100,
  },
  {
    id: "streak-30",
    title: "Monthly Master",
    description: "Maintain a 30-day learning streak",
    icon: "flame",
    unlocked: false,
    progress: 23,
  },
  {
    id: "complete-path",
    title: "Path Pioneer",
    description: "Complete your first learning path",
    icon: "trophy",
    unlocked: false,
    progress: 65,
  },
  {
    id: "speed-learner",
    title: "Speed Learner",
    description: "Learn 5 terms in a single day",
    icon: "clock",
    unlocked: true,
    progress: 100,
  },
  {
    id: "advanced-terms",
    title: "Advanced Thinker",
    description: "Master 10 advanced-level terms",
    icon: "book",
    unlocked: false,
    progress: 40,
  },
  {
    id: "quiz-master",
    title: "Quiz Master",
    description: "Score 100% on 5 different quizzes",
    icon: "trophy",
    unlocked: false,
    progress: 60,
  },
]
