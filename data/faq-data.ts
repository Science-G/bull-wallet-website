export interface FaqParagraph {
  type: "text" | "heading" | "subheading" | "list" | "note" | "warning" | "table"
  text?: string
  items?: string[]
  headers?: string[]
  rows?: string[][]
}

export interface FaqItem {
  id: string
  title: string
  content: FaqParagraph[]
}

export interface FaqCategory {
  id: string
  title: string
  items: FaqItem[]
}

export interface FaqData {
  categories: FaqCategory[]
}

export const faqData: FaqData = {
  categories: [
    {
      id: "getting-started",
      title: "Getting Started",
      items: [
        {
          id: "what-is-bull-bitcoin",
          title: "What is Bull Bitcoin?",
          content: [
            {
              type: "text",
              text: "Bull Bitcoin is a non-custodial Bitcoin exchange service that allows you to buy, sell, and use Bitcoin without compromising on security or privacy.",
            },
            {
              type: "heading",
              text: "Our Philosophy",
            },
            {
              type: "text",
              text: "At Bull Bitcoin, we believe in the core principles of Bitcoin: security, privacy, and sovereignty. We never hold your Bitcoin - it's sent directly to your own wallet.",
            },
          ],
        },
        {
          id: "countries-available",
          title: "Where is Bull Bitcoin Available?",
          content: [
            {
              type: "text",
              text: "Bull Bitcoin is currently available in the following countries:",
            },
            {
              type: "list",
              items: ["Canada", "Costa Rica", "European Union", "Mexico", "Argentina"],
            },
            {
              type: "text",
              text: "Each country may have different services and features available based on local regulations and partnerships.",
            },
          ],
        },
        {
          id: "account-login",
          title: "How to Log In",
          content: [
            {
              type: "heading",
              text: "Standard Login",
            },
            {
              type: "list",
              items: [
                "Go to the Bull Bitcoin login page",
                "Input your registered email address and password",
                "Access your account by clicking the login button",
              ],
            },
            {
              type: "heading",
              text: "Magic Login (Passwordless)",
            },
            {
              type: "list",
              items: [
                "Visit the Bull Bitcoin login page",
                "Click on the 'Magic Login' option",
                "Provide your registered email address",
                "Open the email sent by Bull Bitcoin and click the login link",
              ],
            },
            {
              type: "note",
              text: "Take some time to review your Account Security before making any transactions",
            },
          ],
        },
        {
          id: "account-security",
          title: "Securing Your Account",
          content: [
            {
              type: "text",
              text: "If an unauthorized person gets access to your account, they will be able to do the following:",
            },
            {
              type: "list",
              items: [
                "View and export the personal information you have provided for identity verification",
                "View and export your transaction history",
                "Conduct Bitcoin transactions using your identity",
                "Steal funds from your Bull Bitcoin account balance",
              ],
            },
            {
              type: "heading",
              text: "Security Best Practices",
            },
            {
              type: "list",
              items: [
                "Choose a unique password and keep it safe",
                "Secure your email account",
                "Use Two-Factor authentication (2FA)",
              ],
            },
            {
              type: "note",
              text: "Having solid account security is one way to protect against scammers and fraud.",
            },
          ],
        },
      ],
    },
    {
      id: "identity-verification",
      title: "Identity Verification",
      items: [
        {
          id: "verification-overview",
          title: "Verification Overview",
          content: [
            {
              type: "text",
              text: "For legal and security reasons, Bull Bitcoin may need to verify your identity before you can use Bull Bitcoin's services. Our philosophy is that we collect the minimum amount of information required by law.",
            },
            {
              type: "note",
              text: "Not all services require the same levels of identity verification. Requirements may vary depending on transaction amounts and your country.",
            },
            {
              type: "heading",
              text: "Verification Levels",
            },
            {
              type: "list",
              items: [
                "Basic verification: gives you access to some services in some countries, with low limits",
                "Full verification: gives you access to all services in all countries, with no limits",
                "Business verification: same as full verification, but for corporations and business accounts",
              ],
            },
            {
              type: "heading",
              text: "Special Verification Types",
            },
            {
              type: "list",
              items: [
                "Light verification: increases your sell limits without ID documents, but doesn't let you fund your account with Bank transfers (Canada only)",
                "SINPE verification: lets you buy Bitcoin with SINPE transfers without ID documents, but only available to residents of Costa Rica",
              ],
            },
          ],
        },
        {
          id: "verification-requirements",
          title: "Verification Requirements",
          content: [
            {
              type: "heading",
              text: "Basic vs Full Verification",
            },
            {
              type: "table",
              headers: ["Requirement", "Basic", "Full"],
              rows: [
                ["Verified email", "✓", "✓"],
                ["Verified phone number", "✓", "✓"],
                ["First and last name", "✓", "✓"],
                ["Residential address", "", "✓"],
                ["Date of birth", "", "✓"],
                ["Occupation", "", "✓"],
                ["Identity verified (automated or manual)", "", "✓"],
              ],
            },
            {
              type: "heading",
              text: "Service Availability by Verification Level",
            },
            {
              type: "table",
              headers: ["Service", "Basic", "Full"],
              rows: [
                ["Fund your account with bank transfer", "", "✓"],
                ["Sell Bitcoin to account balance", "✓", "✓"],
                ["Pay bills or send bank transfers", "✓", "✓"],
                ["Buy Bitcoin from account balance", "✓", "✓"],
              ],
            },
          ],
        },
        {
          id: "phone-verification",
          title: "Phone Verification",
          content: [
            {
              type: "text",
              text: "Phone verification is both quick and simple. There are two methods to verify your phone number:",
            },
            {
              type: "heading",
              text: "SMS Verification",
            },
            {
              type: "list",
              items: [
                "Select the country of your phone number",
                "Enter phone number (must be able to accept SMS messages)",
                "You will receive an SMS message with a verification code",
                "Enter the verification code",
              ],
            },
            {
              type: "heading",
              text: "Phone Call Verification",
            },
            {
              type: "list",
              items: [
                "Select country",
                "Enter phone number",
                "You will receive a phone call with the verification code read to you",
                "Enter the verification code",
              ],
            },
            {
              type: "note",
              text: "If you are using an internet-based phone or a virtual sim card, you may not be able to receive text messages from Bull Bitcoin. In that case, try verification via Phone Call.",
            },
          ],
        },
        {
          id: "business-verification",
          title: "Business Account Verification",
          content: [
            {
              type: "text",
              text: "Business accounts require a little bit more customer due diligence. On-boarding may take a little bit longer but no longer than a day or two.",
            },
            {
              type: "heading",
              text: "Required Information",
            },
            {
              type: "list",
              items: [
                "Legal name of the business",
                "Business address",
                "Phone number",
                "Business identification number (BIN) or Tax ID",
                "Nature of the principal business",
                "Beneficial owners: Name and address of individuals who directly or indirectly own or control 25% or more of the company",
                "Directors: Names of all directors of the company",
                "Legal representative: Personal information of the beneficiary owner and/or authorized person",
              ],
            },
            {
              type: "heading",
              text: "Required Documents",
            },
            {
              type: "list",
              items: [
                "Certificate of Incorporation or registration document",
                "Company ownership or legal structure document",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "account-funding",
      title: "Account Funding",
      items: [
        {
          id: "funding-overview",
          title: "Funding Overview",
          content: [
            {
              type: "text",
              text: "Before you can buy Bitcoin on Bull Bitcoin, you need to add funds to your Bull Bitcoin account balance. When purchasing Bitcoin, the funds will be deducted from your account balance.",
            },
            {
              type: "note",
              text: "The account funding methods available depend on your country.",
            },
            {
              type: "text",
              text: "You can also fund your account balance with Bitcoin. This is the same as selling Bitcoin to your account balance.",
            },
          ],
        },
        {
          id: "funding-methods-canada",
          title: "Funding Methods (Canada)",
          content: [
            {
              type: "table",
              headers: ["Method", "Processing Time", "Fees", "Limits", "Required Level"],
              rows: [
                [
                  "Cash or Debit at Canada Post",
                  "Typically within minutes",
                  "$3.50 for $10-$500, $3.95 for $500-$1000",
                  "$999.99 per transaction, $7000 per day",
                  "LIMITED",
                ],
                ["Email Money Transfer", "30 mins*", "No fees**", "$3000 per day***", "VERIFIED"],
                ["Wire Transfer", "1-3 business days", "No fees**", "No limits", "VERIFIED"],
                ["Bill Payment", "2-3 business days", "No fees**", "No limits", "VERIFIED"],
              ],
            },
            {
              type: "note",
              text: "*During business hours (Mon-Sun 09:00-01:00). **Fees may be charged by your bank. ***Some banks allow up to $10,000 per day.",
            },
            {
              type: "text",
              text: "On receipt of payment, Satoshi Portal manually checks its origin to ensure that it comes from the user's bank account.",
            },
            {
              type: "warning",
              text: "Wire Transfer: The originator's name must match the user's details. If you need to return your funds to your bank account, please contact us via the Messages inbox of your Bull Bitcoin account. Please note that there is a fee for voucher refunds.",
            },
          ],
        },
        {
          id: "email-money-transfer",
          title: "Email Money Transfer (Canada)",
          content: [
            {
              type: "text",
              text: "You can send up to $3000 CAD per day (some banks allow up to $10,000 per day). Funding an account via Email Money Transfer requires a Verified Account.",
            },
            {
              type: "heading",
              text: "How to Fund Your Account",
            },
            {
              type: "list",
              items: [
                "Log into your Bull Bitcoin Account",
                "Click on 'Fund your account'",
                "Select Email Money Transfer and note the payment information",
                "Log into your online banking account",
                "Send an Interac e-transfer using the provided payment information",
              ],
            },
            {
              type: "note",
              text: "You must always send the payments from your own bank account. Make sure that the name and email on the bank account matches the name of your Bull Bitcoin account.",
            },
          ],
        },
        {
          id: "cash-debit-canada-post",
          title: "Cash or Debit at Canada Post",
          content: [
            {
              type: "text",
              text: "You can fund your Bull Bitcoin account through either cash or debit card at any Canada Post kiosk. Funding an account via Cash or Debit requires a Limited Account.",
            },
            {
              type: "heading",
              text: "How to Fund Your Account",
            },
            {
              type: "list",
              items: [
                "Click on 'Fund your account'",
                "Select 'Cash or Debit at Canada Post'",
                "Locate the QR Code at the bottom of the page and print or save it",
                "Go to any Canada Post location",
                "Ask the cashier to scan the QR code you saved",
                "Tell the cashier the amount you want to deposit",
                "The cashier will ask to see a piece of government-issued ID",
                "Pay with cash or debit card",
                "Keep the receipt as your proof of payment",
                "The funds will be added to your Bull Bitcoin account balance within 30 minutes",
              ],
            },
            {
              type: "note",
              text: "Your QR code will not change. You can re-use this code multiple times. Bull Bitcoin does not charge any fee for this deposit method. Canada Post will charge you a flat fee for the service.",
            },
          ],
        },
      ],
    },
    {
      id: "buying-bitcoin",
      title: "Buying Bitcoin",
      items: [
        {
          id: "buying-overview",
          title: "Buying Overview",
          content: [
            {
              type: "text",
              text: "Bull Bitcoin is a non-custodial exchange. Before you buy Bitcoin, you first need to install your own Bitcoin wallet.",
            },
            {
              type: "note",
              text: "You cannot create a Buy Order without first having provided a Bitcoin address, because as soon as you confirm the order, the Bitcoin will be sent straight to your own Bitcoin wallet.",
            },
            {
              type: "heading",
              text: "How to Buy Bitcoin",
            },
            {
              type: "list",
              items: [
                "Select an amount of fiat you want to spend or a precise amount of Bitcoin you want to receive",
                "Select the payment network you want to receive the payment in (Bitcoin Network, Lightning Network, or Liquid Network)",
                "Add your Bitcoin address (unless using the Lightning Network)",
                "Confirm the order",
              ],
            },
          ],
        },
        {
          id: "buying-process",
          title: "Buying Process",
          content: [
            {
              type: "text",
              text: "You can buy bitcoin as soon as your funds are available. Check the FAQ Fund your account for more information about the funding options.",
            },
            {
              type: "heading",
              text: "Step-by-Step Process",
            },
            {
              type: "list",
              items: [
                "Click on 'Buy Bitcoin'",
                "Enter the amount of $CAD you want to spend (Minimum buy amounts: Bitcoin - 200$, Lightning 5$, Liquid 25$)",
                "Add your Bitcoin address",
                "Click on 'Create Buy Bitcoin order'",
                "Verify the Bitcoin address and the amount",
                "Click 'Confirm purchase' to send the bitcoins",
                "Check your Bitcoin wallet!",
              ],
            },
            {
              type: "note",
              text: "The rate is locked for 2 minutes. If the rate expires, click on 'Refresh' to get a new rate. Bitcoin transactions are sent in batches every hour or so. You can opt-out of a batch and receive the Bitcoin transaction faster by clicking on the 'Express transaction' button once the order is confirmed.",
            },
          ],
        },
        {
          id: "recurring-buys",
          title: "Recurring Buys (DCA)",
          content: [
            {
              type: "text",
              text: "The Recurring Buy is a feature that allows users to schedule and automate Bitcoin purchases. Dollar Cost Averaging (DCA) is a strategic approach wherein a user consistently allocates the same dollar amount to purchase Bitcoin, irrespective of its current market price.",
            },
            {
              type: "heading",
              text: "How It Works",
            },
            {
              type: "list",
              items: [
                "Activation: The scheduling of these recurring transactions will commence immediately upon clicking 'schedule'",
                "Frequency Options: Users have the flexibility to determine the frequency of their purchases (hourly, daily, or custom intervals)",
                "Initial Transaction: Upon activating the Recurring Buy, the first transaction is executed promptly",
                "Flexibility and Cancellation: Users can alter the Bitcoin address for each transaction and cancel at any point without penalties",
              ],
            },
            {
              type: "heading",
              text: "Recurring Buy Duration",
            },
            {
              type: "text",
              text: "A Recurring Buy schedule will persist until:",
            },
            {
              type: "list",
              items: [
                "The user's balance is insufficient to support the next transaction",
                "The user reaches their specified target amount",
                "The user elects to halt the Recurring Buy feature",
              ],
            },
            {
              type: "note",
              text: "Users are not obligated to maintain a balance that covers the entirety of the target amount for the Recurring Buy schedule.",
            },
          ],
        },
      ],
    },
    {
      id: "selling-bitcoin",
      title: "Selling Bitcoin",
      items: [
        {
          id: "selling-overview",
          title: "Selling Overview",
          content: [
            {
              type: "text",
              text: "You cannot deposit Bitcoin in a Bull Bitcoin account. There is no Bitcoin balance in your Bull Bitcoin account. As soon as you send Bitcoin to Bull Bitcoin, the funds are instantly converted to fiat currency.",
            },
            {
              type: "note",
              text: "Before you sell Bitcoin, you must first tell us where you want the fiat currency resulting from that Bitcoin sale to be sent.",
            },
            {
              type: "heading",
              text: "When Ownership Changes",
            },
            {
              type: "list",
              items: [
                "Bitcoin Network: when the transaction is confirmed",
                "Lightning Network: when the Lightning payment is successful",
                "Liquid Network: when the transaction is confirmed",
              ],
            },
            {
              type: "heading",
              text: "Exchange Rate Guarantee",
            },
            {
              type: "text",
              text: "One of the major benefits of using Bull Bitcoin is that when you sell Bitcoin, the exchange rate is guaranteed as soon as you send a Bitcoin transaction.",
            },
            {
              type: "list",
              items: [
                "Bitcoin Network: when the unconfirmed transaction is included in the mempool of our Bitcoin Node",
                "Lightning Network: when the Lightning payment is detected by our Lightning Network node",
                "Liquid Network: when the unconfirmed transaction is included in the mempool of our Liquid Network Node",
              ],
            },
          ],
        },
        {
          id: "selling-options",
          title: "Selling Options",
          content: [
            {
              type: "text",
              text: "Before selling Bitcoin on Bull Bitcoin, you must choose where you want to receive the funds. You have two options:",
            },
            {
              type: "list",
              items: ["Convert funds to your account balance", "Pay a bill or send money to a bank account"],
            },
            {
              type: "heading",
              text: "Account Balance vs. Direct Payment",
            },
            {
              type: "text",
              text: "There is one major reason why you might want to sell Bitcoin and receive the money in your Bull Bitcoin account balance: if you plan to buy Bitcoin again later.",
            },
            {
              type: "warning",
              text: "You are not allowed to use funds from your Bull Bitcoin account to send payments to a beneficiary other than yourself. Bull Bitcoin is not a bank. If you want to pay someone else, you must use the 'Pay with Bitcoin' service directly and you must not sell Bitcoin to your account balance first.",
            },
            {
              type: "heading",
              text: "After Selling to Account Balance",
            },
            {
              type: "list",
              items: [
                "You can buy Bitcoin back later from your account balance",
                "You can withdraw the funds from your account balance and send the funds to your bank account",
              ],
            },
          ],
        },
        {
          id: "pay-with-bitcoin",
          title: "Pay with Bitcoin",
          content: [
            {
              type: "heading",
              text: "A Different Way to Sell Bitcoin",
            },
            {
              type: "text",
              text: "When you are using the 'pay with Bitcoin' service, what you are really doing is selling Bitcoin to Bull Bitcoin in exchange for fiat currency. The difference is that instead of receiving the money in your Bull Bitcoin account or your bank account, you are asking Bull Bitcoin to send the money to someone else.",
            },
            {
              type: "note",
              text: "No, the person you pay with Bitcoin does not need to sign-up with Bull Bitcoin. In fact, they don't even need to know that you are paying them with Bitcoin.",
            },
            {
              type: "heading",
              text: "Payment Options by Country",
            },
            {
              type: "list",
              items: [
                "Canada: Send an Interac e-transfer, EFT payment, wire transfer, pay off credit cards, or pay billers",
                "Costa Rica: Send a SINPE Movil payment or bank transfer in USD/CRC",
                "Europe: Send a SEPA or SEPA INSTANT payment",
                "Mexico: Send a SPEI payment",
              ],
            },
          ],
        },
        {
          id: "interac-e-transfer",
          title: "Interac E-Transfer (Canada)",
          content: [
            {
              type: "text",
              text: "Bull Bitcoin allows its users to send Interac e-transfers to anyone in Canada with Bitcoin!",
            },
            {
              type: "heading",
              text: "How It Works",
            },
            {
              type: "list",
              items: [
                "In the 'Sell Bitcoin' section, choose 'Email Money Transfer' as the beneficiary type",
                "Select the amount of Canadian dollars that you want the beneficiary to receive",
                "Add the Secret Question and Secret Answer for your beneficiary",
                "Add a personalized memo to the e-transfer (important since it will come from Bull Bitcoin's account)",
                "Create the Sell Bitcoin order",
                "Pay the Bitcoin invoice with a Bitcoin transaction, Lightning Network payment, or Liquid Network payment",
                "Once your Bitcoin payment is confirmed, the e-transfer will automatically be sent to your beneficiary",
                "The beneficiary will receive an e-transfer email with a link to accept the e-transfer",
              ],
            },
            {
              type: "warning",
              text: "You can only withdraw from your Bull Bitcoin to a bank account that you own. When creating an Interac e-transfer beneficiary, you must not create a beneficiary for yourself using someone else's email address.",
            },
          ],
        },
      ],
    },
    {
      id: "rates-and-fees",
      title: "Rates and Fees",
      items: [
        {
          id: "how-bull-bitcoin-makes-money",
          title: "How Bull Bitcoin Makes Money",
          content: [
            {
              type: "heading",
              text: "Our Business Model",
            },
            {
              type: "list",
              items: [
                "When you buy Bitcoin, Bull Bitcoin sells its own inventory of Bitcoin to you. The price at which we sell Bitcoin to you is slightly higher than the price of Bitcoin at which we acquired it. The difference between those two prices is called our spread and that is how we make money.",
                "When you sell Bitcoin, Bull Bitcoin will buy the Bitcoin off of you at a slightly lower price than the price at which we will resell them. You are, in essence, our supplier of Bitcoin. The difference between the price we pay for your Bitcoin and the price at which we sell it is called our spread and that is how we make money.",
              ],
            },
            {
              type: "note",
              text: "Our rates are public here: WWW.BULLBITCOIN.COM/RATES",
            },
            {
              type: "heading",
              text: "Funding and Withdrawal Fees",
            },
            {
              type: "list",
              items: [
                "Bull Bitcoin does not collect fees from you when you fund your Bull Bitcoin account",
                "It is possible that your bank will charge you fees for those transactions",
                "When you buy Bitcoin on Bull Bitcoin, you do not have to pay Bitcoin withdrawal fees",
                "Bull Bitcoin pays the Bitcoin network fee (also known as 'mining fee') for you",
              ],
            },
          ],
        },
        {
          id: "batching-and-express-withdrawals",
          title: "Batching and Express Withdrawals",
          content: [
            {
              type: "heading",
              text: "Batched Withdrawals",
            },
            {
              type: "text",
              text: "In order to cut down on Bitcoin network fee costs, Bull Bitcoin will 'batch together' the Bitcoin withdrawals of many of its users. In practice, this means that we are sending Bitcoin to multiple customers within a single Bitcoin transaction.",
            },
            {
              type: "list",
              items: [
                "Our batched bitcoin withdrawals usually happen every 2 or 3 hours",
                "Lightning Network based withdrawals are always free. Bull Bitcoin will pay the Lightning Network routing fees for you",
                "Liquid Network based withdrawals are always free. Bull Bitcoin will pay the Liquid Network federation fees for you",
              ],
            },
            {
              type: "heading",
              text: "Express Withdrawals",
            },
            {
              type: "text",
              text: "If you decide to opt-out of scheduled withdrawals and select an express withdrawal, you will have to pay the Bitcoin network fee (aka 'mining fee').",
            },
            {
              type: "list",
              items: [
                "Bull Bitcoin does not collect these transaction fees, they are sent directly to the Bitcoin miners",
                "The amount of the express withdraw network fee is not decided by Bull Bitcoin, it is always the current Bitcoin network fee required by Bitcoin miners to confirm a Bitcoin transaction within 1-2 blocks",
              ],
            },
            {
              type: "note",
              text: "The current Bitcoin network fees can be viewed at https://mempool.space/",
            },
          ],
        },
      ],
    },
    {
      id: "legal",
      title: "Legal",
      items: [
        {
          id: "legal-entities",
          title: "Legal Entities",
          content: [
            {
              type: "heading",
              text: "Who You Are Having a Business Relationship With",
            },
            {
              type: "text",
              text: "Depending on which country you are using Bull Bitcoin, you will be entering into a business relationship with different legal entities.",
            },
            {
              type: "list",
              items: [
                "Canada: Canadian users are entering into a business relationship with Satoshi Portal Inc., a Canadian corporation headquartered in Calgary, Alberta.",
                "European Union: If you are located in one of the countries of the European Union, or one of the countries of the SEPA zone, or one of the countries of the EEA, you are dealing with Leonod SARL, a French company headquartered in Lyon.",
                "Costa Rica: If you are located in Costa Rica, you are dealing with Toro Pagos Limitata, a Costa Rican company headquartered in San Jose.",
                "Mexico: If you are located in Mexico, you are dealing with Toro Pagos, a Mexican company headquartered in Mexico City.",
              ],
            },
          ],
        },
        {
          id: "terms-and-conditions",
          title: "Terms and Conditions",
          content: [
            {
              type: "text",
              text: "These Terms and Conditions ('Terms') govern the use of Bull Bitcoin services, software, website, and applications (collectively, the 'Services') provided by the respective Bull Bitcoin entities ('we,' 'us,' 'our,' or 'Bull Bitcoin').",
            },
            {
              type: "heading",
              text: "Key Points",
            },
            {
              type: "list",
              items: [
                "Bull Bitcoin offers two primary services: Buy Bitcoin (exchange of fiat for Bitcoin) and Sell Bitcoin (exchange of Bitcoin for fiat)",
                "Bull Bitcoin acts as the direct counterparty in all Bitcoin exchange transactions",
                "Bull Bitcoin does not offer Bitcoin custody services",
                "Users are responsible for maintaining the confidentiality of their account credentials",
                "Bull Bitcoin account balances are not insured and do not constitute a bank account",
                "All Bitcoin sales are final and non-refundable",
                "Users are prohibited from using Bull Bitcoin services for any illegal or unauthorized purpose",
              ],
            },
            {
              type: "note",
              text: "For the complete Terms and Conditions, please visit the Bull Bitcoin website.",
            },
          ],
        },
        {
          id: "privacy-policy",
          title: "Privacy Policy",
          content: [
            {
              type: "text",
              text: "This Privacy Policy outlines our practices regarding the collection, utilization, and disclosure of your information while you engage with our services.",
            },
            {
              type: "heading",
              text: "Information We Collect",
            },
            {
              type: "list",
              items: [
                "Email address: For login, transaction confirmations, and communications",
                "Name: For KYC/AML compliance and fraud prevention",
                "Phone number: For KYC/AML compliance and as an additional contact method",
                "Residential address: For KYC/AML compliance and residency verification",
                "Date of birth: For KYC/AML compliance",
                "Occupation and source of funds: For KYC/AML compliance",
                "IP address and device information: For account security and fraud prevention",
                "Identification documents and selfies: For KYC/AML compliance",
              ],
            },
            {
              type: "heading",
              text: "Data Security and Retention",
            },
            {
              type: "text",
              text: "We are committed to keeping your information safe. We employ technological and administrative safeguards to protect your data. We retain your personal information as necessary, subject to applicable laws and regulations, generally for 5 to 7 years post-last transaction.",
            },
            {
              type: "note",
              text: "For the complete Privacy Policy, please visit the Bull Bitcoin website.",
            },
          ],
        },
      ],
    },
    {
      id: "common-issues",
      title: "Common Issues",
      items: [
        {
          id: "sms-code-issues",
          title: "SMS Code Issues",
          content: [
            {
              type: "heading",
              text: "What to do if you don't receive the SMS code",
            },
            {
              type: "text",
              text: "Some phones cannot receive SMS messages from Bull Bitcoin.",
            },
            {
              type: "list",
              items: [
                "If you are using a landline, you cannot receive SMS",
                "If you are using an internet-based phone number (VOIP) you may have issues receiving SMS",
              ],
            },
            {
              type: "heading",
              text: "Solution",
            },
            {
              type: "list",
              items: [
                "Use the 'call me instead' feature",
                "Wait to receive the phone call",
                "Listen to the voice message, it will tell you your verification code",
              ],
            },
            {
              type: "note",
              text: "If you still experience issues, contact Bull Bitcoin support.",
            },
          ],
        },
        {
          id: "transaction-issues",
          title: "Transaction Issues",
          content: [
            {
              type: "heading",
              text: "Common Bitcoin Transaction Issues",
            },
            {
              type: "list",
              items: [
                "Batching delays: Bitcoin transactions are sent in batches every hour or so",
                "Wallet issues: Make sure your wallet is properly set up and can receive Bitcoin",
                "Lightning Network issues: Some wallets may not be compatible with Lightning payments",
                "Using the wrong wallet: Always use your own wallet, not an exchange wallet",
              ],
            },
            {
              type: "note",
              text: "If you're experiencing transaction issues, first check your transaction ID on a block explorer like mempool.space. If the transaction is confirmed but not showing in your wallet, the issue is likely with your wallet.",
            },
          ],
        },
        {
          id: "export-orders",
          title: "Exporting Order History",
          content: [
            {
              type: "text",
              text: "If you need a CSV file of your orders, go to 'My Account' - 'Financials, and click on 'Export my orders'.",
            },
            {
              type: "heading",
              text: "How to View the CSV File",
            },
            {
              type: "list",
              items: [
                "Once downloaded, you can open the csv file with any spreadsheet app like Excel, Google Sheet or LibreOffice",
                "Then, go to 'Data' - 'Split text to columns' and select Semicolon or ; to split the text in columns",
              ],
            },
          ],
        },
      ],
    },
  ],
}
