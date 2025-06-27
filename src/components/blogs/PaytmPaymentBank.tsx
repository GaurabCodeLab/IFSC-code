import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PaytmPaymentBankBlogClient() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose lg:prose-xl dark:prose-invert max-w-none">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          Understanding Paytm Payment Bank: Services, Features, and Latest
          Updates
        </h1>

        {/* <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span>Published: April 20, 2025</span>
          <span>•</span>
          <span>Last Updated: April 20, 2025</span>
        </div> */}

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1746737651/paytm-payments-bank-rbi-_wwkk56.jpg"
            alt="Paytm Payment Bank Services and Features"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
            Paytm Payment Bank offers digital banking services with a focus on
            mobile-first experiences
          </div>
        </div>

        <div className="bg-muted p-5 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">
            What is Paytm Payment Bank?
          </h2>
          <p className="text-lg">
            Paytm Payment Bank is a digital bank that offers banking services
            primarily through mobile applications. It was launched in 2017 and
            operates under the guidelines of the Reserve Bank of India (RBI).
            The bank provides services like savings accounts, current accounts,
            digital wallets, UPI payments, and more. Unlike traditional banks,
            Paytm Payment Bank focuses on small-value transactions and digital
            financial inclusion. However, as of March 15, 2024, the RBI has
            imposed significant restrictions on its operations.
          </p>
        </div>

        <p className="lead text-lg font-medium">
          In today's digital age, Paytm Payment Bank has emerged as a
          significant player in India's financial technology landscape. Whether
          you're looking to open an account, understand recent RBI regulations,
          or simply learn how to use its various features, this guide covers
          everything you need to know about Paytm Payment Bank.
        </p>

        <div className="bg-muted p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li>
              <a href="#rbi-updates" className="text-primary hover:underline">
                RBI Updates on Paytm Payments Bank
              </a>
            </li>
            <li>
              <a href="#open-account" className="text-primary hover:underline">
                How to Open a Paytm Payment Bank Account
              </a>
            </li>
            <li>
              <a href="#ifsc-code" className="text-primary hover:underline">
                Paytm Payment Bank IFSC Code
              </a>
            </li>
            <li>
              <a
                href="#wallet-features"
                className="text-primary hover:underline"
              >
                Digital Wallet Features
              </a>
            </li>
            <li>
              <a href="#earn-cash" className="text-primary hover:underline">
                How to Earn Paytm Cash
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-primary hover:underline">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        <section id="rbi-updates">
          <h2 className="text-2xl font-bold mb-4">
            RBI Updates on Paytm Payments Bank
          </h2>
          <p>
            The Reserve Bank of India (RBI) has implemented significant
            regulatory actions affecting Paytm Payment Bank's operations. These
            recent developments have substantially changed how the bank
            functions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1746737713/65bf5b4eb882c-the-enforcement-directorate-will-probe-paytm-payments-bank-if-any-evidence-of-illegal-activity-is-fo-043925672-16x9_q34xoi.jpg"
                alt="RBI Restrictions on Paytm Payment Bank"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Current RBI Restrictions
              </h3>
              <ul className="space-y-2">
                <li>
                  As of March 15, 2024, Paytm Payments Bank cannot accept new
                  deposits
                </li>
                <li>
                  No credit transactions are allowed into accounts or wallets
                  after this date
                </li>
                <li>Opening of new accounts has been suspended</li>
                <li>
                  Existing customers can still withdraw their funds without
                  restrictions
                </li>
                <li>UPI transactions from existing accounts may be affected</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border border-yellow-200 dark:border-yellow-700">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-yellow-600 dark:text-yellow-400"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Important Update
            </h3>
            <p>
              In response to the question "is Paytm Payments Bank working?" -
              Paytm Payments Bank continues to operate but with significant
              limitations. Existing customers can withdraw their funds, but
              cannot deposit new money or receive incoming transfers. New
              customers cannot open accounts at this time. These restrictions
              were imposed by the RBI due to concerns about compliance and
              operational issues.
            </p>
          </div>

          <p>
            The RBI's regulatory action was taken after supervisory concerns
            were noted, including issues related to KYC processes, transaction
            monitoring, and IT infrastructure. These restrictions are intended
            to protect customer interests while addressing compliance concerns.
          </p>
        </section>

        <section id="open-account" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Paytm Payment Bank Account Opening (Currently Suspended)
          </h2>
          <p>
            Due to the RBI's regulatory action, Paytm Payment Bank is currently
            not allowed to open new accounts. This restriction came into effect
            on March 15, 2024, and will remain until further notice from the
            RBI.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-3">
              Alternative Digital Banking Options
            </h3>
            <p className="mb-4">
              While new Paytm Payment Bank accounts cannot be opened at this
              time, consumers looking for digital banking services may consider
              these alternatives:
            </p>
            <ul className="space-y-2">
              <li>
                Other payment banks like Airtel Payments Bank or India Post
                Payments Bank
              </li>
              <li>
                To know about these banking services go to our{" "}
                <a href="" className="text-blue-700 hover:underline">
                  Airtel Payments Bank
                </a>{" "}
                or{" "}
                <a href="" className="text-blue-700 hover:underline">
                  India Post Payments Bank
                </a>{" "}
                blogs for more details
              </li>
              <li>
                Digital services from traditional banks (SBI YONO, ICICI
                iMobile, etc.)
              </li>
              <li>Neo-banking platforms that partner with established banks</li>
              <li>UPI services through other bank accounts</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border border-yellow-200 dark:border-yellow-700">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-yellow-600 dark:text-yellow-400"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              For Existing Customers
            </h3>
            <p>
              If you already have a Paytm Payment Bank account, you can continue
              to use it for withdrawals and outgoing payments until your balance
              is exhausted. However, you cannot add new funds to the account.
              It's advisable to consider transferring your funds to another bank
              account for long-term banking needs.
            </p>
          </div>
        </section>

        <section id="ifsc-code" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Paytm Payment Bank IFSC Code
          </h2>
          <p>
            The IFSC (Indian Financial System Code) for Paytm Payment Bank is
            essential for receiving funds through NEFT, RTGS, or IMPS. Unlike
            traditional banks with different IFSC codes for different branches,
            Paytm Payment Bank uses a single IFSC code nationwide.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-3">
              Paytm Payment Bank IFSC Code:
            </h3>
            <div className="flex items-center justify-between bg-card p-4 rounded-md border">
              <span className="text-xl font-mono">PYTM0123456</span>
              {/* <button
                className="text-sm text-primary hover:underline"
                // onClick={() => {
                //   navigator.clipboard.writeText('PYTM0123456');
                // }}
              >
                Copy to Clipboard
              </button> */}
            </div>
            <p className="mt-4">
              <strong>Important:</strong> This IFSC code is used for all Paytm
              Payment Bank accounts across India. You can use this code for
              receiving money from any bank through NEFT, RTGS, or IMPS.
            </p>
          </div>

          <p>
            If you need to verify this IFSC code or find IFSC codes for other
            banks, you can use the{" "}
            <Link
              href="https://www.ifsccodeb.com"
              className="text-blue-600 hover:underline"
            >
              IFSC Code Finder tool
            </Link>
            . This tool provides accurate IFSC codes for all banks in India,
            including Paytm Payment Bank.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border border-yellow-200 dark:border-yellow-700">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-yellow-600 dark:text-yellow-400"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Using IFSC Codes Correctly
            </h3>
            <p>
              When sharing your Paytm Payment Bank account details for receiving
              money, always provide both your account number and the IFSC code.
              Double-check the IFSC code before initiating any transaction to
              avoid delays or failed transfers.
            </p>
          </div>
        </section>

        <section id="wallet-features" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Digital Wallet Features</h2>
          <p>
            The Paytm Wallet is one of the most popular features of Paytm
            Payment Bank. It allows you to store money digitally and use it for
            various transactions. Here's what you need to know about using the
            Paytm Wallet:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Paytm Wallet Restrictions
                </h3>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
                  <p className="font-medium">
                    Important: Due to RBI restrictions effective March 15, 2024,
                    customers cannot add money to Paytm Payments Bank wallets.
                    Existing balances can still be used for payments or
                    withdrawn.
                  </p>
                </div>
                <p className="mb-4">
                  Prior to these restrictions, adding money to Paytm wallet
                  involved:
                </p>
                <ol className="space-y-2 list-decimal pl-5 opacity-75">
                  <li>Opening the Paytm app</li>
                  <li>Tapping on "Balance" or "Wallet" section</li>
                  <li>Selecting "Add Money" option</li>
                  <li>Choosing a payment method</li>
                  <li>Completing the transaction</li>
                </ol>
                <p className="mt-4 text-sm">
                  Users are advised to use alternative payment methods or
                  digital wallets until these restrictions are lifted.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  How to Check Balance in Paytm
                </h3>
                <p className="mb-4">
                  There are multiple ways to check your Paytm balance:
                </p>
                <h4 className="font-semibold mb-2">
                  Method 1: Through the App
                </h4>
                <ol className="space-y-1 list-decimal pl-5">
                  <li>Open the Paytm app</li>
                  <li>Your wallet balance is displayed on the home screen</li>
                  <li>
                    For detailed view, tap on "Balance" or "Wallet" section
                  </li>
                </ol>
                {/* <h4 className="font-semibold mt-4 mb-2">
                  Method 2: Through SMS
                </h4> */}
                {/* <ol className="space-y-1 list-decimal pl-5">
                  <li>
                    Send SMS "BAL" to 85959 from your registered mobile number
                  </li>
                  <li>You'll receive an SMS with your current Paytm balance</li>
                </ol> */}
                <h4 className="font-semibold mt-4 mb-2">
                  Method 2: Through Website
                </h4>
                <ol className="space-y-1 list-decimal pl-5">
                  <li>Visit paytm.com and log in to your account</li>
                  <li>
                    Your wallet balance will be displayed on the dashboard
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Paytm Wallet Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>Quick and convenient digital payments</li>
                <li>Secure transactions with passcode/biometric protection</li>
                <li>Cashback offers and rewards on transactions</li>
                <li>No need to carry physical cash</li>
              </ul>
              <ul className="space-y-2">
                <li>Pay utility bills, recharge mobile, and more</li>
                <li>Send money to friends and family instantly</li>
                <li>Integration with UPI for wider acceptance</li>
                <li>Transaction history for better expense tracking</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="earn-cash" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">How to Earn Paytm Cash</h2>
          <p>
            Paytm offers various ways to earn cashback and rewards that get
            added to your Paytm Wallet. Here are some effective methods to earn
            Paytm cash:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-4 text-primary"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">
                    Cashback Offers
                  </h3>
                  <p className="text-sm">
                    Take advantage of regular cashback offers on bill payments,
                    shopping, and recharges. Paytm frequently runs special
                    promotions that give you cashback on transactions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-4 text-primary"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">
                    Referral Programs
                  </h3>
                  <p className="text-sm">
                    Invite friends and family to use Paytm. When they sign up
                    using your referral code and complete qualifying
                    transactions, both you and your friend earn Paytm cash.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-4 text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">
                    Reward Activities
                  </h3>
                  <p className="text-sm">
                    Participate in quizzes, games, and challenges within the
                    Paytm app. These activities often offer Paytm cash as
                    rewards for successful completion.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border border-yellow-200 dark:border-yellow-700">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-yellow-600 dark:text-yellow-400"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Cashback Tips
            </h3>
            <p>
              To maximize your Paytm cash earnings, regularly check the "Offers"
              section in the app, enable notifications for new promotions, and
              consider using Paytm for recurring payments like utility bills and
              subscriptions where cashback offers are frequently available.
            </p>
          </div>
        </section>

        <section id="faqs" className="mt-10">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About Paytm Payment Bank
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is Paytm Payments Bank working?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Paytm Payments Bank is operating with significant restrictions
                  imposed by the Reserve Bank of India (RBI) effective March 15,
                  2024. Under these restrictions:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    No new deposits or credit transactions are allowed into
                    accounts or wallets
                  </li>
                  <li>New account openings have been suspended</li>
                  <li>
                    Existing customers can still withdraw their funds and make
                    payments until their balance is exhausted
                  </li>
                  <li>
                    Outgoing payments and transfers from existing accounts are
                    still functional
                  </li>
                </ul>
                <p className="mt-2">
                  These restrictions were imposed due to compliance concerns
                  identified by the RBI. Customers with existing accounts should
                  consider transferring their funds to other banking options for
                  long-term needs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How to add money in Paytm wallet?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Currently, adding money to Paytm wallets linked to Paytm
                  Payments Bank is not possible due to RBI restrictions
                  effective March 15, 2024. These restrictions prohibit any new
                  deposits or credit transactions into Paytm Payments Bank
                  accounts or wallets.
                </p>
                <p className="mt-2">Existing customers can still:</p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    Use their available wallet balance for payments and
                    transactions
                  </li>
                  <li>
                    Withdraw funds from their wallet to other bank accounts
                  </li>
                  <li>
                    Make outgoing payments until their balance is exhausted
                  </li>
                </ul>
                <p className="mt-2">
                  For digital payment needs, customers are advised to explore
                  alternative payment methods or digital wallets until these
                  restrictions are lifted or clarified further by regulatory
                  authorities.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How to check balance in Paytm?
              </AccordionTrigger>
              <AccordionContent>
                <p>There are several ways to check your Paytm balance:</p>
                <ol className="mt-2 space-y-1 list-decimal pl-5">
                  <li>
                    <strong>Through the Paytm App:</strong>
                    <ul className="ml-5 mt-1 space-y-1 list-disc">
                      <li>Open the Paytm app</li>
                      <li>
                        Your wallet balance is displayed on the home screen
                      </li>
                      <li>
                        For a detailed view, tap on "Balance" or "Wallet"
                        section
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <strong>Through SMS:</strong>
                    <ul className="ml-5 mt-1 space-y-1 list-disc">
                      <li>
                        Send SMS "BAL" to 85959 from your registered mobile
                        number
                      </li>
                      <li>
                        You'll receive an SMS with your current Paytm balance
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <strong>Through Website:</strong>
                    <ul className="ml-5 mt-1 space-y-1 list-disc">
                      <li>Visit paytm.com and log in to your account</li>
                      <li>
                        Your wallet balance will be displayed on the dashboard
                      </li>
                    </ul>
                  </li>
                </ol>
                <p className="mt-2">
                  Checking your balance regularly helps you keep track of your
                  spending and ensures you have sufficient funds for
                  transactions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What is the Paytm Payment Bank IFSC code?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  The IFSC code for Paytm Payment Bank is{" "}
                  <strong>PYTM0123456</strong>. This is a universal IFSC code
                  used for all Paytm Payment Bank accounts across India. You can
                  use this code for receiving money from any bank through NEFT,
                  RTGS, or IMPS transactions. Unlike traditional banks that have
                  different IFSC codes for different branches, Paytm Payment
                  Bank uses this single IFSC code nationwide, making it easier
                  to remember and use. When providing your bank details for
                  receiving payments, always include both your Paytm Payment
                  Bank account number and this IFSC code.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How to earn Paytm cash?</AccordionTrigger>
              <AccordionContent>
                <p>There are several ways to earn Paytm cash:</p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    <strong>Cashback Offers:</strong> Take advantage of cashback
                    offers on bill payments, shopping, and recharges
                  </li>
                  <li>
                    <strong>Referral Programs:</strong> Invite friends to use
                    Paytm and earn rewards when they sign up and transact
                  </li>
                  <li>
                    <strong>Reward Activities:</strong> Participate in quizzes,
                    games, and challenges within the Paytm app
                  </li>
                  <li>
                    <strong>Promotional Offers:</strong> Look for special
                    promotional offers during festivals and sales events
                  </li>
                  <li>
                    <strong>Loyalty Programs:</strong> Earn rewards for regular
                    usage of Paytm services
                  </li>
                </ul>
                <p className="mt-2">
                  To maximize your earnings, regularly check the "Offers"
                  section in the app and enable notifications for new
                  promotions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                What is the maximum balance limit in Paytm Payment Bank?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  As per RBI guidelines for payment banks, Paytm Payment Bank
                  has a maximum balance limit of ₹2 lakhs per customer. If your
                  account balance exceeds this limit, the excess amount may need
                  to be transferred to another bank account. This limit applies
                  to the end-of-day balance, and there are no restrictions on
                  the number of transactions or the total amount that can flow
                  through the account during the day. For wallet users with
                  minimal KYC, the limit is typically lower at ₹10,000, while
                  fully KYC-verified wallet users can maintain up to ₹1 lakh.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Can I open a Paytm Payment Bank account online?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  No, currently you cannot open a new Paytm Payment Bank
                  account. As part of the regulatory action by the Reserve Bank
                  of India (RBI), Paytm Payments Bank has been prohibited from
                  opening new accounts effective March 15, 2024. This
                  restriction will remain in place until further notice from the
                  RBI.
                </p>
                <p className="mt-2">
                  If you're looking for digital banking services, you may want
                  to consider alternatives such as:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    Other payment banks (Airtel Payments Bank, India Post
                    Payments Bank)
                  </li>
                  <li>
                    To know about these banking services go to our{" "}
                    <a href="" className="text-blue-700 hover:underline">
                      Airtel Payments Bank
                    </a>{" "}
                    or{" "}
                    <a href="" className="text-blue-700 hover:underline">
                      India Post Payments Bank
                    </a>{" "}
                    blogs for more details
                  </li>
                  <li>Digital services from traditional banks</li>
                  <li>
                    Neo-banking platforms that partner with established banks
                  </li>
                  <li>
                    Standard savings accounts with traditional banks that offer
                    robust mobile banking
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mt-12 bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Understanding the Current State of Paytm Payment Bank
          </h2>
          <p>
            Paytm Payment Bank is currently operating under significant
            restrictions imposed by the RBI. While existing customers can still
            access and use their funds, no new deposits can be made and new
            accounts cannot be opened. These regulatory measures highlight the
            importance of compliance in the banking sector.
          </p>
          <p className="mt-4">
            For those affected by these restrictions, it's advisable to explore
            alternative banking options. If you need to find IFSC codes for
            other banks in India, our comprehensive IFSC Code Finder tool makes
            the process quick and easy. Simply visit{" "}
            <Link
              href="https://www.ifsccodeb.com"
              className="text-blue-600 hover:underline"
            >
              ifsccodeb.com
            </Link>{" "}
            to find accurate IFSC codes for all banks and branches across India.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="https://www.ifsccodeb.com/branch">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Find Bank IFSC Codes Now
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-12 bg-gray-50 dark:bg-gray-800/30 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">
            Disclaimer
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
            <p>
              The information provided in this article about Paytm Payment Bank
              is for general informational purposes only. While we strive to
              keep the information up to date and accurate, we make no
              representations or warranties of any kind, express or implied,
              about the completeness, accuracy, reliability, suitability, or
              availability of the information contained herein.
            </p>
            <p>
              Any reliance you place on such information is strictly at your own
              risk. The IFSC codes and procedures mentioned in this article are
              based on current information, but we recommend verifying them from
              official sources before initiating any financial transactions.
            </p>
            <p>
              This website is not affiliated with, endorsed by, or officially
              connected with Paytm Payment Bank or any of its subsidiaries or
              affiliates. The official Paytm Payment Bank website can be found
              at{" "}
              <a
                href="https://www.paytmbank.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.paytmbank.com
              </a>
              .
            </p>
            {/* <p>Last Updated: May 9, 2025</p> */}
          </div>
        </section>
      </article>
    </div>
  );
}
