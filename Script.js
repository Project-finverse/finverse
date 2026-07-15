const QUIZZES = {
  financial: {
    color: "teal",
    title: "Financial Literacy",
    icon: "💰",
    questions: [
      {q: "What is fiat currency?", options: ["Government-issued money not backed by a commodity", "Digital cryptocurrency", "Gold coins", "International currency"], correct: 0, explain: "Fiat currency like the Indian Rupee gets its value from government backing, not physical commodities."},
      {q: "The 50-30-20 rule suggests saving what percentage of income?", options: ["50%", "30%", "20%", "10%"], correct: 2, explain: "The rule allocates 50% to needs, 30% to wants, and 20% to savings/investments."},
      {q: "Compound interest means earning interest on:", options: ["Only the principal", "Principal + accumulated interest", "Only the interest", "Bank charges"], correct: 1, explain: "Compound interest grows exponentially because you earn returns on both the original amount and previous interest."},
      {q: "Which of these is NOT a type of income?", options: ["Salary", "Rent received", "Dividends", "Grocery bill"], correct: 3, explain: "Grocery bill is an expense, not income. Income means money coming IN, not going OUT."},
      {q: "What does the 'Rule of 72' calculate?", options: ["Interest rate", "Time to double your money", "Tax deduction", "EMI amount"], correct: 1, explain: "Divide 72 by the interest rate to find the years needed to double your money."},
      {q: "An emergency fund should ideally cover:", options: ["1 week of expenses", "1 month of expenses", "3-6 months of expenses", "1 year of expenses"], correct: 2, explain: "3-6 months of expenses provides a safety net for job loss, medical emergencies, or unexpected events."},
      {q: "Inflation causes:", options: ["Money to increase in value", "Money to decrease in value", "No effect on money", "Interest rates to fall"], correct: 1, explain: "Inflation means prices rise, so the same amount of money buys less over time."},
      {q: "Which is a fixed expense?", options: ["Movie tickets", "House rent", "Restaurant food", "Shopping"], correct: 1, explain: "Fixed expenses like rent, EMIs, and subscriptions stay the same each month."},
      {q: "SIP investment of ₹1,000/month at 12% for 30 years becomes approximately:", options: ["₹3.6 lakh", "₹10 lakh", "₹35 lakh", "₹5 lakh"], correct: 2, explain: "Thanks to compounding, small monthly investments grow into lakhs over decades!"},
      {q: "Which best describes 'Pay yourself first'?", options: ["Buy things you want", "Save before spending", "Take loans first", "Pay bills first"], correct: 1, explain: "Save automatically at the start of the month before spending on wants and needs."}
    ],
    improve: "Focus on the 50-30-20 rule, compound interest, and emergency fund basics. Practice budgeting with real income scenarios."
  },
  banking: {
    color: "teal",
    title: "Banking Essentials",
    icon: "🏦",
    questions: [
      {q: "Which account earns the most interest?", options: ["Current Account", "Fixed Deposit", "Salary Account", "Zero-balance Account"], correct: 1, explain: "FDs offer 5-7% interest as your money is locked for a fixed period."},
      {q: "UPI stands for:", options: ["Unified Payments Interface", "Universal Payment Integration", "United Payment Index", "Unique Personal ID"], correct: 0, explain: "UPI is India's real-time payment system launched by NPCI in 2016."},
      {q: "KYC is required for:", options: ["Opening a bank account", "Making UPI payments", "Checking balance", "Only for loans"], correct: 0, explain: "KYC (Know Your Customer) is mandatory verification for all bank accounts as per RBI norms."},
      {q: "To RECEIVE money via UPI, you should:", options: ["Enter your PIN", "Scan QR and enter PIN", "Share your UPI ID only", "Give OTP to sender"], correct: 2, explain: "You NEVER need to enter PIN or scan QR to receive money. Only share your UPI ID."},
      {q: "Credit card interest rates in India typically range from:", options: ["2-5%", "10-15%", "24-42%", "50-60%"], correct: 2, explain: "Credit cards charge very high interest on unpaid balances — that's why paying in full is crucial."},
      {q: "Recurring Deposit (RD) is best for:", options: ["Emergency funds", "Building saving discipline", "Business transactions", "Stock investments"], correct: 1, explain: "RDs help you develop the habit of saving a fixed amount every month."},
      {q: "Which document is NOT valid for KYC?", options: ["Aadhaar", "PAN Card", "Voter ID", "School ID Card"], correct: 3, explain: "School IDs are not officially valid. Aadhaar, PAN, Voter ID, and Passport are accepted."},
      {q: "If you notice an unauthorized bank transaction, report it within:", options: ["1 day", "3 days", "1 week", "1 month"], correct: 1, explain: "Report within 3 days for zero liability protection under RBI guidelines."},
      {q: "Difference between debit and credit card:", options: ["Debit uses YOUR money, Credit uses BANK'S money", "Both use bank's money", "Debit gives more rewards", "No difference"], correct: 0, explain: "Debit deducts from your account. Credit is a short-term loan from the bank."},
      {q: "Which app is NOT a UPI payment app?", options: ["PhonePe", "Google Pay", "BHIM", "Netflix"], correct: 3, explain: "Netflix is a streaming service. PhonePe, GPay, and BHIM are UPI apps."}
    ],
    improve: "Master UPI safety rules, account types, and KYC documentation requirements."
  },
  investments: {
    color: "purple",
    title: "Investments & Markets",
    icon: "📈",
    questions: [
      {q: "Which is the LEAST risky investment?", options: ["Fixed Deposit", "Cryptocurrency", "Penny Stocks", "Small-cap mutual funds"], correct: 0, explain: "FDs offer guaranteed returns with zero risk to your principal."},
      {q: "Diversification means:", options: ["Investing all in one stock", "Spreading investments across asset types", "Only investing in gold", "Never investing"], correct: 1, explain: "Diversification reduces risk by spreading money across different investments."},
      {q: "SIP stands for:", options: ["Stock Investment Plan", "Systematic Investment Plan", "Savings Investment Portfolio", "Simple Interest Product"], correct: 1, explain: "SIP lets you invest a fixed amount monthly in mutual funds."},
      {q: "Higher potential returns generally mean:", options: ["Lower risk", "No risk", "Higher risk", "Guaranteed profits"], correct: 2, explain: "Risk and return are always linked — higher potential gains come with higher potential losses."},
      {q: "Sovereign Gold Bonds (SGBs) give:", options: ["Only gold price gains", "Gold price + 2.5% interest", "Fixed 10% return", "Guaranteed doubling"], correct: 1, explain: "SGBs offer gold price appreciation plus 2.5% annual interest — better than physical gold."},
      {q: "Nifty 50 is:", options: ["A tax", "Top 50 companies index on NSE", "A mutual fund", "A bank"], correct: 1, explain: "Nifty 50 tracks the 50 largest companies listed on the National Stock Exchange."},
      {q: "You should NOT invest money you need in stocks if the timeframe is:", options: ["10+ years", "5-7 years", "1-2 years", "20+ years"], correct: 2, explain: "Stocks are volatile short-term. Only invest money you won't need for at least 5+ years."},
      {q: "Which is a passive investment strategy?", options: ["Day trading", "Index fund investing", "Options trading", "Timing the market"], correct: 1, explain: "Index funds passively track the market without active management."},
      {q: "During COVID-19 crash (March 2020), Nifty fell by approximately:", options: ["10%", "20%", "38%", "70%"], correct: 2, explain: "Nifty crashed 38%, but those who stayed invested saw 100%+ recovery by 2021."},
      {q: "Best investment strategy for a 20-year-old:", options: ["Only FDs", "Mostly equity + some debt", "Only cryptocurrency", "Only gold"], correct: 1, explain: "Young investors have time to ride market volatility, so higher equity allocation is smart."}
    ],
    improve: "Study asset allocation, risk-return relationship, and long-term investment strategies."
  },
  taxation: {
    color: "orange",
    title: "Taxation Essentials",
    icon: "🧾",
    questions: [
      {q: "Which is an indirect tax?", options: ["Income Tax", "GST", "Property Tax", "Capital Gains Tax"], correct: 1, explain: "GST is collected by sellers on behalf of the government, making it indirect."},
      {q: "ITR stands for:", options: ["Income Tax Relief", "Income Tax Return", "Indian Tax Registry", "International Tax Rate"], correct: 1, explain: "ITR is the annual document filed with the Income Tax Department."},
      {q: "What is TDS?", options: ["Tax Direct Service", "Tax Deducted at Source", "Tax Declaration System", "Total Direct Sum"], correct: 1, explain: "TDS is tax deducted by your employer/bank before paying you."},
      {q: "Under New Regime FY 2025-26, income up to ₹3 lakh has tax rate:", options: ["5%", "0%", "10%", "20%"], correct: 1, explain: "Income up to ₹3 lakh is completely tax-free under the new regime."},
      {q: "GST rate on essential items like fresh vegetables:", options: ["0%", "5%", "12%", "18%"], correct: 0, explain: "Fresh vegetables, milk, and basic essentials have 0% GST."},
      {q: "PAN Card is required for:", options: ["Opening a bank account", "Filing ITR", "High-value transactions", "All of these"], correct: 3, explain: "PAN is essential for banking, tax filing, investments, and transactions above ₹50,000."},
      {q: "ITR filing deadline for individuals is usually:", options: ["March 31", "July 31", "December 31", "January 15"], correct: 1, explain: "Individual taxpayers must file ITR by July 31 each year."},
      {q: "Restaurant food attracts GST of:", options: ["0%", "5%", "18%", "28%"], correct: 2, explain: "Restaurants charge 5% (non-AC) or 18% (AC/branded)."},
      {q: "Missing ITR deadline results in:", options: ["No penalty", "₹1,000 penalty", "₹5,000 penalty", "Jail term"], correct: 2, explain: "Late filing attracts ₹5,000 penalty (₹1,000 if income below ₹5 lakh)."},
      {q: "Form 16 is issued by:", options: ["Bank", "Employer", "Government", "Investment company"], correct: 1, explain: "Employers issue Form 16 showing salary paid and TDS deducted."}
    ],
    improve: "Revise tax slabs, ITR filing deadlines, GST categories, and TDS concepts thoroughly."
  },
  cyber: {
    color: "red",
    title: "Digital Fraud & Cyber Safety",
    icon: "🛡️",
    questions: [
      {q: "Should you share your OTP with anyone?", options: ["No, never", "Yes, with bank staff", "Only with family", "Only if urgent"], correct: 0, explain: "OTPs are for YOUR use only. Banks NEVER ask for your OTP."},
      {q: "Which password is stronger?", options: ["123456", "F!nVerse@2026", "password", "qwerty"], correct: 1, explain: "Strong passwords have 12+ characters with uppercase, lowercase, numbers, and symbols."},
      {q: "Before scanning a QR code you should:", options: ["Verify the sender", "Scan immediately", "Share with friends", "Enter PIN first"], correct: 0, explain: "Always confirm the source. Random QRs can trigger unauthorized transactions."},
      {q: "'Digital Arrest' is:", options: ["A real police process", "A scam using fake police calls", "An app feature", "A tax procedure"], correct: 1, explain: "Real police NEVER arrest via video calls. This is a growing scam in India."},
      {q: "Phishing typically happens via:", options: ["Fake emails/SMS", "Physical mail", "Direct calls only", "TV ads"], correct: 0, explain: "Phishing uses fake messages disguised as legitimate organizations to steal info."},
      {q: "You receive OTP without requesting it. What to do?", options: ["Share it", "Ignore it and be alert", "Post on social media", "Call the sender"], correct: 1, explain: "Unrequested OTP means someone's trying to access your account. Be alert!"},
      {q: "Real SBI website URL is:", options: ["sbi-online.xyz", "onlinesbi.sbi", "sbi-bank.com", "sbi.info"], correct: 1, explain: "Always check official URLs. Real bank websites end with proper domains."},
      {q: "To receive money via UPI you need to:", options: ["Enter PIN", "Scan sender's QR", "Share only your UPI ID", "Give OTP"], correct: 2, explain: "Receiving money NEVER requires PIN or scanning QR. Just share your UPI ID."},
      {q: "Cyber Crime helpline number in India:", options: ["100", "112", "1930", "108"], correct: 2, explain: "Dial 1930 for cyber crime complaints. Also visit cybercrime.gov.in"},
      {q: "Two-Factor Authentication (2FA) adds:", options: ["More risk", "Extra security layer", "Slower speed only", "Nothing"], correct: 1, explain: "2FA requires a second verification (like OTP) making accounts much harder to hack."}
    ],
    improve: "Master OTP safety, phishing detection, and password best practices. Practice with our Scam Detector Game!"
  }
};