// FinVerse - Complete Data & Logic

const MODULES = {
  financial: {
    title: "Financial Literacy",
    icon: "💰",
    color: "teal",
    lessons: [
      {id: "money", title: "What is Money?", desc: "Understand fiat currency, its history, and how money works in the modern Indian economy."},
      {id: "income", title: "Income & Expenses", desc: "Learn to track where your money comes from and where it goes. Build your first budget."},
      {id: "saving", title: "Saving vs Spending", desc: "Discover the power of saving early, emergency funds, and the 50-30-20 rule."},
      {id: "compound", title: "Power of Compounding", desc: "See how small amounts grow exponentially over time with real Indian examples."}
    ]
  },
  banking: {
    title: "Banking Essentials",
    icon: "🏦",
    color: "teal",
    lessons: [
      {id: "accounts", title: "Types of Bank Accounts", desc: "Savings, current, fixed deposit — learn which account suits your needs and how interest works."},
      {id: "upi", title: "UPI & Digital Payments", desc: "How UPI works, setting up PhonePe/GPay, transaction limits, and staying safe online."},
      {id: "cards", title: "Debit vs Credit Cards", desc: "Understand the difference, when to use each, credit limits, and avoiding debt traps."},
      {id: "kyc", title: "KYC & Account Safety", desc: "What is KYC, why banks need it, and how to protect your account from fraud."}
    ]
  },
  investments: {
    title: "Investments & Markets",
    icon: "📈",
    color: "purple",
    lessons: [
      {id: "investing", title: "What is Investing?", desc: "Learn the difference between saving and investing, and why investing matters for wealth building."},
      {id: "assets", title: "Asset Classes", desc: "Stocks, mutual funds, bonds, fixed deposits, gold — understand different investment options."},
      {id: "risk", title: "Risk & Return", desc: "Higher returns come with higher risk. Learn to balance your portfolio based on your goals."},
      {id: "diversify", title: "Diversification", desc: "Spread investments across multiple assets to reduce risk and increase stability."}
    ]
  },
  taxation: {
    title: "Taxation Essentials",
    icon: "🧾",
    color: "orange",
    lessons: [
      {id: "tax", title: "What is Taxation?", desc: "Understand direct vs indirect taxes and why we pay taxes."},
      {id: "incometax", title: "Income Tax Basics", desc: "Learn tax slabs, exemptions, and how income tax is calculated."},
      {id: "gst", title: "GST Explained", desc: "Understand GST rates, categories, and how it impacts your everyday purchases."},
      {id: "compliance", title: "Tax Compliance", desc: "TDS, ITR filing, Form 16, and maintaining financial records."}
    ]
  },
  cyber: {
    title: "Digital Fraud & Cyber Safety",
    icon: "🛡️",
    color: "red",
    lessons: [
      {id: "phishing", title: "What is Phishing?", desc: "Learn how attackers use fake emails to steal passwords and personal information."},
      {id: "qr", title: "QR Code Scams", desc: "Unknown QR codes can initiate unauthorized payments. Always verify the sender."},
      {id: "scamcalls", title: "Scam Calls & Impersonation", desc: "Banks never call asking for OTPs or PINs. Disconnect and call the official bank number."},
      {id: "passwords", title: "Strong Passwords & OTP Safety", desc: "OTPs are one-time use codes. Never share them. Create passwords with 10+ characters."}
    ]
  }
};

const LESSONS = {
  money: {
    module: "financial",
    title: "What is Money?",
    intro: "Money is anything widely accepted as a medium of exchange for goods and services. In India, the Reserve Bank of India (RBI) issues currency notes and coins that we use daily.",
    sections: [
      {heading: "Key Concepts", type: "list", items: [
        "<strong>Fiat Currency:</strong> Money issued by the government that isn't backed by a physical commodity like gold. The Indian Rupee (₹) is fiat currency.",
        "<strong>Legal Tender:</strong> Currency that must be accepted for payment by law.",
        "<strong>Digital Money:</strong> UPI, net banking, and wallets represent the same rupee digitally.",
        "<strong>Inflation:</strong> When prices rise over time, the purchasing power of money decreases."
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> In 2016, the ₹500 and ₹1000 notes were demonetized overnight. This showed that money's value depends on government backing, not the paper itself.",
    takeaways: [
      "Money is a medium of exchange, store of value, and unit of account",
      "The Indian Rupee is fiat currency backed by RBI",
      "Inflation reduces purchasing power over time",
      "Digital payments represent the same money in electronic form"
    ],
    sources: [
      {name: "Reserve Bank of India (RBI)", url: "https://www.rbi.org.in"},
      {name: "Ministry of Finance, Government of India", url: "https://finmin.nic.in"},
      {name: "NCFE - National Centre for Financial Education", url: "https://www.ncfe.org.in"}
    ]
  },
  income: {
    module: "financial",
    title: "Income & Expenses",
    intro: "Understanding where your money comes from (income) and where it goes (expenses) is the foundation of financial health.",
    sections: [
      {heading: "Types of Income", type: "list", items: [
        "<strong>Earned Income:</strong> Salary, wages, freelancing",
        "<strong>Passive Income:</strong> Rent, dividends, interest",
        "<strong>Pocket Money/Stipend:</strong> For students, this is your starting income to manage"
      ]},
      {heading: "Types of Expenses", type: "list", items: [
        "<strong>Fixed Expenses:</strong> Rent, EMIs, subscriptions",
        "<strong>Variable Expenses:</strong> Food, entertainment, shopping",
        "<strong>Discretionary:</strong> Wants vs needs"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> A college student gets ₹5,000/month. Fixed: ₹1,500 (transport). Variable: ₹2,000 (food). Discretionary: ₹1,500 (movies, shopping).",
    takeaways: [
      "Track every rupee coming in and going out",
      "Distinguish between needs and wants",
      "Apply the 50-30-20 rule to any income level",
      "Start budgeting now — even with pocket money"
    ],
    sources: [
      {name: "SEBI Investor Education", url: "https://investor.sebi.gov.in"},
      {name: "RBI Financial Literacy", url: "https://www.rbi.org.in/financialeducation"},
      {name: "MoneyControl - Personal Finance", url: "https://www.moneycontrol.com/personal-finance"}
    ]
  },
  saving: {
    module: "financial",
    title: "Saving vs Spending",
    intro: "Saving means setting aside money for future use. Spending is using money now. The balance between these two determines your financial freedom.",
    sections: [
      {heading: "Why Save?", type: "list", items: [
        "<strong>Emergency Fund:</strong> 3-6 months of expenses saved for unexpected events",
        "<strong>Goals:</strong> A new phone, college fees, travel",
        "<strong>Financial Independence:</strong> Savings give you choices"
      ]},
      {heading: "The 50-30-20 Rule", type: "list", items: [
        "<strong>50% Needs:</strong> Rent, groceries, transport",
        "<strong>30% Wants:</strong> Dining out, entertainment",
        "<strong>20% Savings:</strong> Emergency fund, investments"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> Priya earns ₹30,000/month. She saves ₹6,000 (20%) in a recurring deposit. In 2 years, she has ₹1.5 lakh+ for her MBA coaching fees.",
    takeaways: [
      "Pay yourself first — save before you spend",
      "Build an emergency fund as priority #1",
      "Small consistent savings beat large irregular ones",
      "The 50-30-20 rule works at any income level"
    ],
    sources: [
      {name: "RBI Awareness Campaign", url: "https://www.rbi.org.in"},
      {name: "NPCI - Financial Literacy", url: "https://www.npci.org.in"},
      {name: "Groww - Personal Finance Blog", url: "https://groww.in/blog"}
    ]
  },
  compound: {
    module: "financial",
    title: "Power of Compounding",
    intro: "Compound interest is often called the \"8th wonder of the world.\" It means you earn interest not just on your original amount, but also on the interest already earned.",
    sections: [
      {heading: "Simple vs Compound Interest", type: "list", items: [
        "<strong>Simple Interest:</strong> Interest on principal only. ₹10,000 at 10% = ₹1,000/year, always.",
        "<strong>Compound Interest:</strong> Interest on principal + past interest. Grows exponentially."
      ]},
      {heading: "The Rule of 72", type: "text", content: "Divide 72 by the interest rate to find how many years it takes to double your money. At 12%, money doubles in 6 years."}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> ₹1,000/month SIP at 12% returns: After 10 years: ₹2.3 lakh. After 20 years: ₹10 lakh. After 30 years: ₹35 lakh.",
    takeaways: [
      "Compound interest = interest on interest",
      "Rule of 72: divide 72 by rate to find doubling time",
      "Starting early matters more than investing large amounts",
      "Even ₹500/month can grow to lakhs over decades"
    ],
    sources: [
      {name: "AMFI - Association of Mutual Funds in India", url: "https://www.amfiindia.com"},
      {name: "SEBI Investor Portal", url: "https://investor.sebi.gov.in"},
      {name: "Zerodha Varsity - Personal Finance", url: "https://zerodha.com/varsity"}
    ]
  },
  accounts: {
    module: "banking",
    title: "Types of Bank Accounts",
    intro: "Banks offer different accounts for different needs. Choosing the right one can save you money and earn you interest.",
    sections: [
      {heading: "Account Types", type: "list", items: [
        "<strong>Savings Account:</strong> For individuals. Earns 2.5-4% interest.",
        "<strong>Current Account:</strong> For businesses. No interest.",
        "<strong>Fixed Deposit (FD):</strong> Lock money for a period. Earns 5-7% interest.",
        "<strong>Recurring Deposit (RD):</strong> Save a fixed amount monthly."
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> A student opens a zero-balance savings account (like SBI's BSBD account). They deposit ₹1,000/month. After a year: ₹12,000 + ~₹200 interest.",
    takeaways: [
      "Savings accounts are best for students",
      "FDs give higher returns but lock your money",
      "RDs build discipline",
      "Compare interest rates across banks"
    ],
    sources: [
      {name: "RBI - Banking Regulations", url: "https://www.rbi.org.in"},
      {name: "SBI Official Website", url: "https://www.sbi.co.in"},
      {name: "BankBazaar - Compare Accounts", url: "https://www.bankbazaar.com"}
    ]
  },
  upi: {
    module: "banking",
    title: "UPI & Digital Payments",
    intro: "UPI revolutionized how India transacts. Launched in 2016, it processed over 10 billion transactions/month by 2024.",
    sections: [
      {heading: "How UPI Works", type: "list", items: [
        "Links your bank account to a Virtual Payment Address",
        "Transactions are instant, 24/7, and free",
        "Apps: PhonePe, Google Pay, Paytm, BHIM"
      ]},
      {heading: "Staying Safe", type: "list", items: [
        "Never share your UPI PIN",
        "Don't scan unknown QR codes",
        "You never need to enter PIN to receive money"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> A scammer sends a \"collect request\" disguised as a refund. Always check if it says \"Pay\" or \"Receive\" before entering PIN.",
    takeaways: [
      "UPI is free, instant, and works 24/7",
      "Never enter PIN to receive money",
      "Verify QR codes carefully"
    ],
    sources: [
      {name: "NPCI - UPI Official", url: "https://www.npci.org.in/what-we-do/upi"},
      {name: "RBI Digital Payments", url: "https://www.rbi.org.in"},
      {name: "Cyber Crime Portal - Report Fraud", url: "https://cybercrime.gov.in"}
    ]
  },
  cards: {
    module: "banking",
    title: "Debit vs Credit Cards",
    intro: "Debit and credit cards look similar but work very differently.",
    sections: [
      {heading: "Debit Card", type: "list", items: [
        "Spends YOUR money from your bank account",
        "No debt — can't spend more than balance"
      ]},
      {heading: "Credit Card", type: "list", items: [
        "Spends the BANK'S money — you repay later",
        "Interest rates: 24-42% p.a. on unpaid balance"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> Rahul buys a ₹50,000 phone on credit card paying only minimum due. At 36% interest, he pays ₹72,000+ over 2 years.",
    takeaways: [
      "Debit = your money. Credit = borrowed money",
      "Always pay credit card bills in full",
      "Minimum payment is a debt trap"
    ],
    sources: [
      {name: "RBI - Credit Card Guidelines", url: "https://www.rbi.org.in"},
      {name: "CIBIL - Credit Score", url: "https://www.cibil.com"},
      {name: "Paisabazaar Credit Card Guide", url: "https://www.paisabazaar.com"}
    ]
  },
  kyc: {
    module: "banking",
    title: "KYC & Account Safety",
    intro: "KYC (Know Your Customer) is mandatory verification before opening any bank account in India.",
    sections: [
      {heading: "What is KYC?", type: "list", items: [
        "Identity verification mandated by RBI",
        "Documents: Aadhaar, PAN, passport, voter ID"
      ]},
      {heading: "Account Safety", type: "list", items: [
        "Enable SMS alerts for all transactions",
        "Use strong passwords for net banking",
        "Report unauthorized transactions within 3 days"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> SEBI now allows eKYC via Aadhaar — open a demat account in 10 minutes. But verify the app is legitimate first.",
    takeaways: [
      "KYC protects you and the financial system",
      "Report fraud within 3 days for zero liability",
      "Enable all security features your bank offers"
    ],
    sources: [
      {name: "RBI - KYC Guidelines", url: "https://www.rbi.org.in"},
      {name: "UIDAI - Aadhaar", url: "https://uidai.gov.in"},
      {name: "Cyber Crime Reporting Portal", url: "https://cybercrime.gov.in"}
    ]
  },
  investing: {
    module: "investments",
    title: "What is Investing?",
    intro: "Investing means putting your money to work so it grows over time. Unlike saving, investing aims to multiply it.",
    sections: [
      {heading: "Saving vs Investing", type: "list", items: [
        "<strong>Saving:</strong> Low risk, low return (3-4%)",
        "<strong>Investing:</strong> Higher risk, higher return (8-15%+)"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> ₹1 lakh in savings (3.5%) for 20 years = ₹2 lakh. Same in Nifty 50 index fund (12%) = ₹9.6 lakh.",
    takeaways: [
      "Investing grows money; saving preserves it",
      "Start investing early to beat inflation",
      "Even small amounts compound into wealth"
    ],
    sources: [
      {name: "SEBI - Investor Education", url: "https://investor.sebi.gov.in"},
      {name: "NSE India", url: "https://www.nseindia.com"},
      {name: "Zerodha Varsity", url: "https://zerodha.com/varsity"}
    ]
  },
  assets: {
    module: "investments",
    title: "Asset Classes",
    intro: "An asset class is a category of investment with similar characteristics.",
    sections: [
      {heading: "Major Asset Classes in India", type: "list", items: [
        "<strong>Stocks:</strong> Own a piece of a company. High risk, high return.",
        "<strong>Mutual Funds:</strong> Pool money with other investors. SIP from ₹500/month.",
        "<strong>Fixed Deposits:</strong> Guaranteed returns, zero risk.",
        "<strong>Gold:</strong> Traditional Indian investment. Available as digital gold, SGBs.",
        "<strong>Bonds:</strong> Lend money to government/companies."
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> Sovereign Gold Bonds give gold returns + 2.5% annual interest. No making charges, government-backed.",
    takeaways: [
      "Different asset classes suit different goals",
      "Mutual funds are easiest entry for beginners",
      "Gold and FDs provide stability; stocks provide growth"
    ],
    sources: [
      {name: "SEBI - Mutual Funds", url: "https://www.sebi.gov.in"},
      {name: "AMFI - Mutual Fund Data", url: "https://www.amfiindia.com"},
      {name: "RBI - Sovereign Gold Bonds", url: "https://www.rbi.org.in"}
    ]
  },
  risk: {
    module: "investments",
    title: "Risk & Return",
    intro: "Risk and return are always linked. Higher potential returns come with higher potential losses.",
    sections: [
      {heading: "Risk Spectrum", type: "list", items: [
        "<strong>Low Risk:</strong> FDs, PPF, government bonds (5-8%)",
        "<strong>Medium Risk:</strong> Balanced mutual funds (10-14%)",
        "<strong>High Risk:</strong> Small-cap stocks, crypto (15%+ or losses)"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> During COVID (March 2020), Nifty crashed 38%. Those who held on saw 100%+ recovery by 2021.",
    takeaways: [
      "Higher return always means higher risk",
      "Young investors can afford more equity exposure",
      "Never invest money you need within 1-2 years in stocks"
    ],
    sources: [
      {name: "SEBI - Risk Guidelines", url: "https://www.sebi.gov.in"},
      {name: "NSE - Market Data", url: "https://www.nseindia.com"},
      {name: "Value Research Online", url: "https://www.valueresearchonline.com"}
    ]
  },
  diversify: {
    module: "investments",
    title: "Diversification",
    intro: "Diversification means not putting all your eggs in one basket.",
    sections: [
      {heading: "How to Diversify", type: "list", items: [
        "<strong>Across asset classes:</strong> Mix stocks, bonds, gold, FDs",
        "<strong>Within asset classes:</strong> Buy many sectors",
        "<strong>Across time:</strong> Use SIP (rupee cost averaging)"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> Balanced portfolio for a 20-year-old: 60% equity mutual funds, 20% gold (SGBs), 15% FDs, 5% international fund.",
    takeaways: [
      "Never put all money in one investment",
      "SIP automates diversification across time",
      "Index funds offer instant diversification"
    ],
    sources: [
      {name: "SEBI - Portfolio Management", url: "https://www.sebi.gov.in"},
      {name: "Morningstar India", url: "https://www.morningstar.in"},
      {name: "ET Money", url: "https://www.etmoney.com"}
    ]
  },
  tax: {
    module: "taxation",
    title: "What is Taxation?",
    intro: "Taxes are compulsory payments to the government that fund public services.",
    sections: [
      {heading: "Direct vs Indirect Taxes", type: "list", items: [
        "<strong>Direct Tax:</strong> Paid directly to government. Examples: Income Tax.",
        "<strong>Indirect Tax:</strong> Collected via intermediary. Example: GST."
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> When you buy a ₹100 chocolate with 5% GST, you pay ₹105. The ₹5 goes to the government via the shopkeeper.",
    takeaways: [
      "Direct taxes: you pay directly (income tax)",
      "Indirect taxes: included in product price (GST)",
      "Everyone pays indirect taxes, even students"
    ],
    sources: [
      {name: "Income Tax Department", url: "https://www.incometax.gov.in"},
      {name: "GST Portal - Government of India", url: "https://www.gst.gov.in"},
      {name: "Ministry of Finance", url: "https://finmin.nic.in"}
    ]
  },
  incometax: {
    module: "taxation",
    title: "Income Tax Basics",
    intro: "Income tax is levied on your annual earnings. If income exceeds ₹3 lakh (new regime), you must pay.",
    sections: [
      {heading: "Tax Slabs (New Regime FY 2025-26)", type: "list", items: [
        "₹0 – ₹3 lakh: No tax",
        "₹3 – ₹7 lakh: 5%",
        "₹7 – ₹10 lakh: 10%",
        "₹10 – ₹12 lakh: 15%",
        "₹12 – ₹15 lakh: 20%",
        "Above ₹15 lakh: 30%"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> A fresher earning ₹6 lakh/year pays ₹15,000 tax (5% on ₹3L above exemption).",
    takeaways: [
      "Income below ₹3 lakh is tax-free",
      "PAN is essential for financial transactions",
      "Tax planning starts with understanding slabs"
    ],
    sources: [
      {name: "Income Tax Department - Official", url: "https://www.incometax.gov.in"},
      {name: "ClearTax - Tax Guide", url: "https://cleartax.in"},
      {name: "Ministry of Finance - Budget", url: "https://www.indiabudget.gov.in"}
    ]
  },
  gst: {
    module: "taxation",
    title: "GST Explained",
    intro: "GST replaced 17 different taxes in 2017, creating \"One Nation, One Tax.\"",
    sections: [
      {heading: "GST Rate Categories", type: "list", items: [
        "<strong>0%:</strong> Fresh vegetables, milk",
        "<strong>5%:</strong> Packaged food, economy train tickets",
        "<strong>12%:</strong> Processed food, business class travel",
        "<strong>18%:</strong> Electronics, restaurant food",
        "<strong>28%:</strong> Cars, tobacco, luxury hotels"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> Your ₹300 movie ticket includes 18% GST. Actual ticket = ₹254, GST = ₹46.",
    takeaways: [
      "GST is included in everything you buy",
      "Essential items taxed less, luxury items more",
      "GSTIN on bills means legitimate business"
    ],
    sources: [
      {name: "GST Portal - Government of India", url: "https://www.gst.gov.in"},
      {name: "CBIC - Central Board of Indirect Taxes", url: "https://www.cbic.gov.in"},
      {name: "ClearTax - GST Guide", url: "https://cleartax.in/gst"}
    ]
  },
  compliance: {
    module: "taxation",
    title: "Tax Compliance",
    intro: "Tax compliance means filing returns on time, paying correct amounts, and maintaining records.",
    sections: [
      {heading: "Key Concepts", type: "list", items: [
        "<strong>TDS:</strong> Tax Deducted at Source by employer/bank",
        "<strong>ITR Filing:</strong> Annual return filed by July 31",
        "<strong>Form 16:</strong> Certificate from employer showing salary and TDS"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> A freelancer earning ₹8 lakh from YouTube must calculate tax, pay advance tax quarterly, and file ITR. Missing deadline = ₹5,000 penalty.",
    takeaways: [
      "File ITR even if you don't owe tax",
      "TDS is not final tax — file ITR to claim refunds",
      "Keep financial records for 7 years"
    ],
    sources: [
      {name: "Income Tax e-Filing Portal", url: "https://www.incometax.gov.in"},
      {name: "TIN NSDL", url: "https://www.tin-nsdl.com"},
      {name: "ClearTax ITR Filing", url: "https://cleartax.in"}
    ]
  },
  phishing: {
    module: "cyber",
    title: "What is Phishing?",
    intro: "Phishing is when attackers pretend to be a trusted entity to steal your personal information.",
    sections: [
      {heading: "How Phishing Works", type: "list", items: [
        "Fake email/SMS that looks official",
        "Link leads to fake website",
        "You enter credentials, they steal them"
      ]},
      {heading: "Red Flags", type: "list", items: [
        "Urgency: \"Act NOW or lose your account\"",
        "Spelling mistakes in URL",
        "Asking for OTP or password via message"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> \"SBI Alert: Update KYC at sbi-kyc-update.xyz\" — SCAM! Real SBI URL is onlinesbi.sbi.",
    takeaways: [
      "Banks NEVER ask for passwords via email/SMS",
      "Always verify URLs before clicking",
      "When in doubt, call the official bank number"
    ],
    sources: [
      {name: "Cyber Crime Portal - Report", url: "https://cybercrime.gov.in"},
      {name: "CERT-In - Cyber Security", url: "https://www.cert-in.org.in"},
      {name: "RBI - Sachet (Fraud Awareness)", url: "https://sachet.rbi.org.in"}
    ]
  },
  qr: {
    module: "cyber",
    title: "QR Code Scams",
    intro: "QR code scams are rising in India. Scammers exploit confusion between \"pay\" and \"receive.\"",
    sections: [
      {heading: "How QR Scams Work", type: "list", items: [
        "Scammer sends QR saying \"scan to receive money\"",
        "When you scan and enter PIN, money goes FROM you",
        "You NEVER need to enter PIN to receive money"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> Amit listed his phone on OLX. \"Buyer\" sent QR — ₹15,000 was DEBITED. Receiving money NEVER requires PIN.",
    takeaways: [
      "You NEVER scan QR or enter PIN to RECEIVE money",
      "Only share your UPI ID for receiving",
      "Verify payment in bank app before handing over goods"
    ],
    sources: [
      {name: "NPCI - UPI Safety", url: "https://www.npci.org.in"},
      {name: "Cyber Crime Portal", url: "https://cybercrime.gov.in"},
      {name: "RBI Awareness - Sachet", url: "https://sachet.rbi.org.in"}
    ]
  },
  scamcalls: {
    module: "cyber",
    title: "Scam Calls & Impersonation",
    intro: "Scam calls involve fraudsters impersonating bank officials or police to extract money.",
    sections: [
      {heading: "Common Scripts", type: "list", items: [
        "\"Your account is used for money laundering — transfer to safe account\"",
        "\"Your number will be disconnected — press 1\"",
        "\"You won ₹25 lakh — pay ₹5,000 processing fee\""
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> \"Digital Arrest\" scams — fraudsters on video call wear police uniforms. Real police NEVER arrest on video calls.",
    takeaways: [
      "Disconnect suspicious calls immediately",
      "Verify by calling official numbers",
      "No authority demands money over phone"
    ],
    sources: [
      {name: "Cyber Crime Helpline - 1930", url: "https://cybercrime.gov.in"},
      {name: "TRAI - Telecom Regulator", url: "https://www.trai.gov.in"},
      {name: "Ministry of Home Affairs", url: "https://www.mha.gov.in"}
    ]
  },
  passwords: {
    module: "cyber",
    title: "Strong Passwords & OTP Safety",
    intro: "Your passwords and OTPs are the keys to your digital life.",
    sections: [
      {heading: "Strong Passwords", type: "list", items: [
        "Minimum 12 characters",
        "Mix of uppercase, lowercase, numbers, symbols",
        "Never use personal info",
        "Use different passwords for each account"
      ]},
      {heading: "OTP Safety", type: "list", items: [
        "NEVER share OTP with anyone",
        "Unrequested OTP = someone trying to access your account"
      ]}
    ],
    example: "🇮🇳 <strong>Indian Example:</strong> \"We need your OTP to process your new debit card\" — SCAM! Banks never need YOUR OTP for THEIR operations.",
    takeaways: [
      "Strong password = 12+ characters with mixed types",
      "OTP is NEVER to be shared",
      "Enable 2FA and biometric security"
    ],
    sources: [
      {name: "CERT-In Password Guidelines", url: "https://www.cert-in.org.in"},
      {name: "Google Account Safety", url: "https://safety.google"},
      {name: "Cyber Crime Portal", url: "https://cybercrime.gov.in"}
    ]
  }
};

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
      {q: "SIP of ₹1,000/month at 12% for 30 years becomes approximately:", options: ["₹3.6 lakh", "₹10 lakh", "₹35 lakh", "₹5 lakh"], correct: 2, explain: "Thanks to compounding, small monthly investments grow into lakhs over decades!"},
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

function getURLParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function saveQuizResult(moduleId, score, total) {
  const results = JSON.parse(localStorage.getItem('quizResults') || '{}');
  results[moduleId] = {score, total, date: new Date().toISOString()};
  localStorage.setItem('quizResults', JSON.stringify(results));
}

function getQuizResult(moduleId) {
  const results = JSON.parse(localStorage.getItem('quizResults') || '{}');
  return results[moduleId] || null;
}

function getAllResults() {
  return JSON.parse(localStorage.getItem('quizResults') || '{}');
}

function getGrade(percent) {
  if (percent >= 90) return {grade: 'A+', label: 'Outstanding', color: '#00ffb2'};
  if (percent >= 80) return {grade: 'A', label: 'Excellent', color: '#00ffb2'};
  if (percent >= 70) return {grade: 'B+', label: 'Very Good', color: '#3b82f6'};
  if (percent >= 60) return {grade: 'B', label: 'Good', color: '#a78bfa'};
  if (percent >= 50) return {grade: 'C', label: 'Average', color: '#fb923c'};
  if (percent >= 40) return {grade: 'D', label: 'Below Average', color: '#f97316'};
  return {grade: 'F', label: 'Needs Improvement', color: '#ef4444'};
