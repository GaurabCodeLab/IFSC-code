import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AirtelPaymentBank() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose lg:prose-xl dark:prose-invert max-w-none">
        {/* <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-6 text-primary">
          Airtel Payment Bank: Complete Guide to IFSC Codes, Services & Features
        </h1> */}

        {/* <div className="relative w-full h-[500px] rounded-lg overflow-hidden mb-8">
          <Image
            src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1742658269/Airtel-Payments-26-8-17_zonu8m.png"
            alt="Airtel Payment Bank - Digital Banking Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
            Airtel Payment Bank - India's first payments bank offering digital
            banking solutions
          </div>
        </div> */}

        <div className="bg-muted p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li>
              <a
                href="#introduction"
                className="text-primary underline text-blue-800"
              >
                Introduction to Airtel Payment Bank
              </a>
            </li>
            <li>
              <a
                href="#ifsc-code"
                className="text-primary underline text-blue-800"
              >
                Airtel Payment Bank IFSC Code
              </a>
            </li>
            <li>
              <a
                href="#account-opening"
                className="text-primary underline text-blue-800"
              >
                How to Open an Account
              </a>
            </li>
            <li>
              <a
                href="#customer-care"
                className="text-primary underline text-blue-800"
              >
                Customer Care Information
              </a>
            </li>
            <li>
              <a
                href="#branches"
                className="text-primary underline text-blue-800"
              >
                Branch Network
              </a>
            </li>
            <li>
              <a
                href="#app-features"
                className="text-primary underline text-blue-800"
              >
                Mobile App Features
              </a>
            </li>
            <li>
              <a
                href="#retailer-network"
                className="text-primary underline text-blue-800"
              >
                Retailer Network
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-primary underline text-blue-800">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        <section id="introduction">
          <h2 className="text-2xl font-bold mb-4">
            Introduction to Airtel Payment Bank
          </h2>
          <p>
            Airtel Payment Bank is India's first payments bank that began
            operations in January 2017. As a subsidiary of Bharti Airtel, it has
            leveraged the telecom giant's extensive network to create a robust
            digital banking infrastructure across the country. The bank was
            established with the aim of promoting financial inclusion and
            providing banking services to underserved segments of the
            population.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1742659146/Screenshot-2024-03-28-1517233d981674-a0a7-4bc0-9f3c-2400e810aca6_vx13es.png"
                alt="Airtel Payment Bank Digital Services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                <li>India's first payments bank</li>
                <li>Over 500,000 banking points nationwide</li>
                <li>Interest rate up to 7% p.a. on savings</li>
                <li>No minimum balance requirements</li>
                <li>Earn reward on every transaction with Rewards123</li>
                <li>Seamless integration with Airtel mobile services</li>
                <li>Extensive retailer and merchant network</li>
              </ul>
            </div>
          </div>

          <p>
            Airtel Payment Bank offers a range of services including savings
            accounts, money transfers, bill payments, mobile recharges, and
            various digital financial services. With its digital-first approach,
            the bank has made significant strides in bringing banking services
            to remote areas and promoting cashless transactions across India.
          </p>
        </section>

        <section id="ifsc-code" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Airtel Payment Bank IFSC Code
          </h2>
          <p>
            The IFSC (Indian Financial System Code) is a crucial 11-character
            alphanumeric code used for electronic fund transfers between banks
            in India. For Airtel Payment Bank, understanding the IFSC code is
            essential for receiving funds via NEFT, RTGS, or IMPS.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-3">
              Airtel Payment Bank IFSC Code:
            </h3>
            <div className="flex items-center justify-between bg-card p-4 rounded-md border">
              <span className="text-xl font-mono">AIRP0000001</span>
            </div>
            <p className="mt-4 text-sm">
              <strong>Note:</strong> Airtel Payment Bank uses the same IFSC code
              (AIRP0000001) for all transactions across India as it operates as
              a digital bank without traditional physical branches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Understanding the IFSC Code
              </h3>
              <p>
                The IFSC code for Airtel Payment Bank can be broken down as
                follows:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <strong>AIRP</strong>: First four characters represent the
                  bank (Airtel Payments)
                </li>
                <li>
                  <strong>0</strong>: The fifth character is reserved (zero)
                </li>
                <li>
                  <strong>000001</strong>: Last six characters represent the
                  branch code
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                When You Need the IFSC Code
              </h3>
              <ul className="space-y-2">
                <li>Receiving salary or other regular payments</li>
                <li>Receiving money from friends or family</li>
                <li>Setting up automatic payments or standing instructions</li>
                <li>Receiving tax refunds or government benefits</li>
                <li>Receiving business payments or client transfers</li>
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
              Important Note About IFSC Code
            </h3>
            <p>
              Always verify the Airtel Payment Bank IFSC code before initiating
              any transaction. Using an incorrect IFSC code may result in failed
              transactions or funds being transferred to the wrong account. You
              can verify the IFSC code through the Airtel Thanks app, customer
              care, or our{" "}
              <Link href="/" className="underline">
                IFSC code finder tool.
              </Link>
            </p>
          </div>
        </section>

        <section id="account-opening" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            How to Open an Airtel Payment Bank Account
          </h2>
          <p>
            Opening an account with Airtel Payment Bank is a straightforward
            process that can be completed through multiple channels. The bank
            has simplified the account opening process to ensure maximum
            accessibility.
          </p>

          <Tabs defaultValue="app" className="my-6">
            <TabsList className="grid lg:grid-cols-2 lg:mb-4 mb-16 grid-cols-1 gap-3">
              <TabsTrigger value="app" className="border">
                Via Airtel Thanks App
              </TabsTrigger>
              <TabsTrigger value="retailer" className="border">
                Via Airtel Retailer
              </TabsTrigger>
            </TabsList>
            <TabsContent value="app" className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">
                Opening Account via Airtel Thanks App
              </h3>
              <ol className="space-y-3">
                <li>
                  1. Download the Airtel Thanks app from Google Play Store or
                  Apple App Store
                </li>
                <li>2. Open the app and navigate to the Banking section</li>
                <li>3. Select "Open a Savings Account"</li>
                <li>4. Enter your Airtel mobile number (must be active)</li>
                <li>
                  5. Complete the KYC verification process by uploading your
                  Aadhaar and PAN card
                </li>
                <li>6. Set your transaction PIN</li>
                <li>
                  7. Your account will be activated within 24-48 hours after
                  successful verification
                </li>
              </ol>
              <div className="relative h-[400px] rounded-lg overflow-hidden mt-4">
                <Image
                  src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1742660597/Screenshot_from_2025-03-22_21-52-34_xs5nr2.png"
                  alt="Opening Airtel Payment Bank account via app"
                  fill
                  className="object-contain"
                />
              </div>
            </TabsContent>
            <TabsContent
              value="retailer"
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold mb-3">
                Opening Account via Airtel Retailer
              </h3>
              <ol className="space-y-3">
                <li>
                  1. Visit any nearby Airtel retailer displaying the Airtel
                  Payment Bank logo
                </li>
                <li>
                  2. Carry your Aadhaar card, PAN card, and an active Airtel
                  mobile number
                </li>
                <li>
                  3. The retailer will help you fill out the application form
                </li>
                <li>4. Complete biometric verification using your Aadhaar</li>
                <li>5. Deposit the minimum amount (if required)</li>
                <li>6. Receive your welcome kit and account details</li>
                <li>
                  7. Download the Airtel Thanks app to manage your account
                </li>
              </ol>
            </TabsContent>
          </Tabs>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Documents Required for Account Opening
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Primary Documents</h4>
                <ul className="space-y-1">
                  <li>Aadhaar Card</li>
                  <li>PAN Card</li>
                  <li>Active Airtel mobile number</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Additional Documents (if applicable)
                </h4>
                <ul className="space-y-1">
                  <li>Passport-sized photographs</li>
                  <li>Address proof (if different from Aadhaar)</li>
                  <li>Form 60 (if PAN is not available)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="customer-care" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Airtel Payment Bank Customer Care
          </h2>
          <p>
            Airtel Payment Bank offers multiple channels for customer support to
            address queries, concerns, and service requests. Their customer care
            services are available 24/7 to ensure uninterrupted banking
            experience.
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                  <p className="text-lg font-mono mb-2">400 (Airtel Mobile)</p>
                  <p className="text-lg font-mono">1800-23400</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Toll-free from any network
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p className="text-lg font-mono">wecare@airtelbank.com</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    24-48 hour response time
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
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">In-App Support</h3>
                  <p className="text-lg">Airtel Thanks App</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fastest resolution time
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Common Customer Care Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>Account balance and transaction inquiries</li>
                <li>Reporting lost/stolen debit cards</li>
                <li>Account statement requests</li>
                <li>PIN reset assistance</li>
              </ul>
              <ul className="space-y-2">
                <li>Failed transaction resolution</li>
                <li>KYC update assistance</li>
                <li>Account closure requests</li>
                <li>Complaint registration and tracking</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full md:h-[450px] h-[150px] rounded-lg overflow-hidden my-6">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1742663824/hqdefault_inm6mq.jpg"
              alt="Airtel Payment Bank Customer Care Center"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section id="branches" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Airtel Payment Bank Branch Network
          </h2>
          <p>
            Unlike traditional banks, Airtel Payment Bank operates on a
            different model. Instead of conventional branches, it leverages its
            vast network of Airtel retail outlets that function as banking
            points. These banking points provide various services including
            account opening, cash deposits, withdrawals, and other banking
            operations.
          </p>

          <div className="relative w-full h-[400px] rounded-lg overflow-hidden my-6">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1742754471/airtel-2_sxizz5.jpg"
              alt="Airtel Payment Bank Banking Point"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Banking Points Network
              </h3>
              <ul className="space-y-2">
                <li>Over 500,000 banking points nationwide</li>
                <li>Present in both urban and rural areas</li>
                <li>Easily identifiable by Airtel Payment Bank branding</li>
                <li>Operated by trained Airtel retailers</li>
                <li>Extended operating hours compared to traditional banks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Services Available at Banking Points
              </h3>
              <ul className="space-y-2">
                <li>New account opening with instant activation</li>
                <li>Cash deposits and withdrawals</li>
                <li>Money transfers (domestic remittances)</li>
                <li>Bill payments and mobile recharges</li>
                <li>Insurance product enrollment</li>
                <li>Airtel Thanks card issuance</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Finding the Nearest Banking Point
            </h3>
            <p className="mb-4">
              You can locate the nearest Airtel Payment Bank banking point
              through multiple channels:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Airtel Thanks App:</strong> Use the "Locate Us" feature
                in the Banking section
              </li>
              <li>
                <strong>SMS:</strong> Send 'FIND' to 400 from your Airtel mobile
                number
              </li>
              <li>
                <strong>Website:</strong> Use the branch locator tool on the
                official website
              </li>
              <li>
                <strong>Customer Care:</strong> Call 1800-23400 for assistance
                in finding the nearest banking point
              </li>
            </ul>
          </div>
        </section>

        <section id="app-features" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Airtel Payment Bank App Features
          </h2>
          <p>
            The Airtel Thanks app serves as the digital interface for Airtel
            Payment Bank, offering a comprehensive suite of banking and
            financial services. The app is designed to provide a seamless and
            secure banking experience on your smartphone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1742754758/Airtel-Payments-Bank-1_k0mltl.png"
                alt="Airtel Payment Bank App Interface"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key App Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <strong>Account Management:</strong> Check balance, view
                    transaction history, and download statements
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <strong>Money Transfers:</strong> Send money via UPI, IMPS,
                    or to other bank accounts using IFSC code
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <strong>Bill Payments:</strong> Pay utility bills, mobile
                    recharges, DTH, and other services
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <strong>Digital Debit Card:</strong> Virtual debit card for
                    online transactions
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <strong>Rewards & Offers:</strong> Exclusive cashback and
                    discount offers
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <strong>Insurance:</strong> Purchase and manage insurance
                    products
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <strong>Banking Point Locator:</strong> Find nearby Airtel
                    Payment Bank points
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary mt-1"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <strong>Customer Support:</strong> In-app chat and support
                    ticket system
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Security Features in the App
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>Biometric authentication (fingerprint/face recognition)</li>
                <li>Two-factor authentication for transactions</li>
                <li>Transaction PIN protection</li>
                <li>Real-time transaction alerts</li>
              </ul>
              <ul className="space-y-2">
                <li>Remote device management</li>
                <li>Secure encrypted connections</li>
                <li>Automatic session timeouts</li>
                <li>Transaction limits customization</li>
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
              App Download Tip
            </h3>
            <p>
              Always download the Airtel Thanks app from official sources only -
              Google Play Store for Android devices or Apple App Store for iOS
              devices. Avoid downloading the app from third-party websites to
              prevent potential security risks.
            </p>
          </div>
        </section>

        <section id="retailer-network" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Airtel Payment Bank Retailer Network
          </h2>
          <p>
            The backbone of Airtel Payment Bank's reach is its extensive
            retailer network. These retailers serve as banking correspondents,
            bringing banking services to neighborhoods across India, including
            remote and underserved areas.
          </p>

          <div className="relative w-full h-[400px] rounded-lg overflow-hidden my-6">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1742755103/aad1c1ad53cd06aa50e77bd4ef98154b_hlwdu3.jpg"
              alt="Airtel Payment Bank Retailer Shop"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Retailer Network Highlights
              </h3>
              <ul className="space-y-2">
                <li>Over 500,000 retailers nationwide</li>
                <li>Present in 5,000+ towns and 500,000+ villages</li>
                <li>Easily identifiable by Airtel Payment Bank signage</li>
                <li>Trained in banking operations and KYC procedures</li>
                <li>Extended operating hours (often 8 AM to 10 PM)</li>
                <li>Many retailers operate seven days a week</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Services Offered by Retailers
              </h3>
              <ul className="space-y-2">
                <li>Account opening assistance</li>
                <li>Cash deposits and withdrawals</li>
                <li>Money transfers and remittances</li>
                <li>Bill payments and recharges</li>
                <li>Airtel Thanks card issuance</li>
                <li>Basic account queries and support</li>
                <li>Insurance enrollment assistance</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Becoming an Airtel Payment Bank Retailer
            </h3>
            <p className="mb-4">
              If you're interested in becoming an Airtel Payment Bank retailer,
              the process involves:
            </p>
            <ol className="space-y-2">
              <li>
                1. Contact Airtel through their website or nearest distributor
              </li>
              <li>
                2. Complete the application form with required documentation
              </li>
              <li>3. Undergo verification and background checks</li>
              <li>4. Complete mandatory training on banking operations</li>
              <li>
                5. Set up the required infrastructure (smartphone/tablet,
                internet connection)
              </li>
              <li>6. Receive retailer ID and start operations</li>
            </ol>
            <p className="mt-4 text-sm">
              Retailers earn commissions on transactions, making it a viable
              business opportunity while contributing to financial inclusion.
            </p>
          </div>
        </section>

        <section id="faqs" className="mt-10">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions(FAQ'S) About Airtel Payment Bank
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How to close Airtel Payment Bank account?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  To close your Airtel Payment Bank account, you can follow
                  these steps:
                </p>
                <ol className="mt-2 space-y-1 list-decimal pl-5">
                  <li>
                    Visit any Airtel Payment Bank banking point with your ID
                    proof
                  </li>
                  <li>
                    Submit a written application requesting account closure
                  </li>
                  <li>
                    Alternatively, call customer care at 1800-23400 to initiate
                    the closure process
                  </li>
                  <li>
                    You can also request account closure through the Airtel
                    Thanks app by navigating to Help & Support section
                  </li>
                </ol>
                <p className="mt-2">
                  Before closing your account, ensure you've withdrawn all funds
                  or transferred them to another account.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Airtel Payment Bank ka IFSC code kya hai?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Airtel Payment Bank का IFSC code <strong>AIRP0000001</strong>{" "}
                  है। यह IFSC code पूरे भारत में Airtel Payment Bank के लिए एक
                  ही है, क्योंकि यह एक डिजिटल बैंक है और इसकी पारंपरिक शाखाएँ
                  नहीं हैं। आप इस IFSC code का उपयोग NEFT, RTGS, या IMPS के
                  माध्यम से पैसे प्राप्त करने के लिए कर सकते हैं।
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How to create Airtel Payment Bank account?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  You can create an Airtel Payment Bank account through multiple
                  channels:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    <strong>Via Airtel Thanks App:</strong> Download the app,
                    navigate to Banking section, select "Open a Savings
                    Account", and follow the on-screen instructions for KYC
                    verification.
                  </li>
                  <li>
                    <strong>Via Airtel Retailer:</strong> Visit any Airtel
                    retailer with Airtel Payment Bank signage, carry your
                    Aadhaar and PAN card, and complete the biometric
                    verification process.
                  </li>
                  <li>
                    <strong>Via Website:</strong> Visit the official Airtel
                    Payment Bank website, click on "Open an Account", and follow
                    the guided process including video KYC.
                  </li>
                </ul>
                <p className="mt-2">
                  The basic requirements include an active Airtel mobile number,
                  Aadhaar card, and PAN card. The account is typically activated
                  within 24-48 hours after successful verification.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is Airtel Payment Bank safe?</AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>
                    Yes, Airtel Payment Bank is safe and secure for the
                    following reasons:
                  </p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>
                      It is a licensed payments bank regulated by the Reserve
                      Bank of India (RBI)
                    </li>

                    <li>
                      The bank employs industry-standard encryption and security
                      protocols
                    </li>
                    <li>
                      Multi-factor authentication is required for all
                      transactions
                    </li>
                    <li>
                      Real-time transaction monitoring systems detect and
                      prevent fraudulent activities
                    </li>
                    <li>
                      Routine security assessments and compliance evaluations
                      are performed regularly.
                    </li>
                  </ul>
                  <p className="mt-2">
                    However, as with any banking service, users should follow
                    security best practices such as not sharing PINs or OTPs,
                    using strong passwords, and keeping their mobile devices
                    secure.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What is the maximum balance limit in Airtel Payment Bank?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  As per RBI guidelines for payments banks, Airtel Payment Bank
                  has a maximum balance limit of ₹2 lakhs per customer. If your
                  account balance exceeds this limit, the excess amount may be
                  automatically swept out to a partner bank account or you may
                  be requested to withdraw the excess funds. This limit applies
                  to the end-of-day balance, and there are no restrictions on
                  the number of transactions or the total amount that can flow
                  through the account during the day.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Can I have both Airtel Payment Bank and a regular bank account?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, you can maintain both an Airtel Payment Bank account and
                  accounts with other regular banks simultaneously. There are no
                  restrictions on having multiple bank accounts across different
                  banking institutions. In fact, many customers use Airtel
                  Payment Bank for day-to-day transactions, bill payments, and
                  mobile recharges while maintaining traditional bank accounts
                  for salary, loans, and other financial services that payments
                  banks don't offer.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                What are the charges for Airtel Payment Bank services?
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>
                    Airtel Payment Bank charges for various services are as
                    follows:
                  </p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>
                      <strong>Account opening:</strong> Free
                    </li>
                    <li>
                      <strong>Minimum balance requirement:</strong> None
                    </li>
                    <li>
                      <strong>Cash deposits:</strong> Free up to certain limits,
                      then nominal charges apply
                    </li>
                    <li>
                      <strong>Cash withdrawals:</strong> Limited free
                      withdrawals per month, then ₹25 per transaction
                    </li>
                    <li>
                      <strong>Fund transfers (IMPS/NEFT/UPI):</strong> Free up
                      to certain limits
                    </li>
                    <li>
                      <strong>Debit card issuance:</strong> ₹150-200 (physical
                      card)
                    </li>
                    <li>
                      <strong>Annual maintenance:</strong> No annual maintenance
                      charges
                    </li>
                    <li>
                      <strong>SMS alerts:</strong> Free
                    </li>
                  </ul>
                  <p className="mt-2">
                    Note: These charges are subject to change. For the most
                    current fee structure, please check the Airtel Payment Bank
                    website or the Airtel Thanks app.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mt-12 bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Conclusion: Banking Simplified with Airtel Payment Bank
          </h2>
          <p>
            Airtel Payment Bank has revolutionized banking in India by
            leveraging technology and an extensive retail network to bring
            financial services to every corner of the country. With its
            digital-first approach, the bank offers a convenient, secure, and
            accessible banking experience.
          </p>
          <p className="mt-4">
            Whether you're looking to open a new account, find the correct IFSC
            code for transactions, or understand the various services offered,
            Airtel Payment Bank provides a comprehensive banking solution that
            meets the varied demands of today's consumers.
          </p>
          <p className="mt-4">
            Remember that the IFSC code for Airtel Payment Bank (AIRP0000001)
            remains the same across India, making it easier to receive funds
            regardless of your location. For any assistance with Airtel Payment
            Bank services or IFSC codes, you can always refer to our{" "}
            <Link href="/" className="underline text-blue-600">
              IFSC code finder
            </Link>{" "}
            tool or contact Airtel's customer care.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Find More Bank IFSC Codes
            </Link>
          </div>
        </section>
        <section className="mt-12 bg-gray-50 dark:bg-gray-800/30 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">
            Disclaimer
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
            <p>
              The details shared in this article about Airtel Payment Bank’s
              IFSC code and banking services are for general informational
              purposes only. We do our best to ensure the accuracy and relevance
              of the information, but we cannot guarantee that it is always
              complete, up-to-date, or error-free.
            </p>
            <p>
              The IFSC code (AIRP0000001) mentioned here is based on the latest
              available data. However, we strongly recommend verifying it
              through official sources before using it for any financial
              transactions.
            </p>
            <p>
              Banking procedures, contact details, and services may change over
              time. To get the most accurate and updated information, please
              visit Airtel Payment Bank’s official website{" "}
              <a
                href="https://www.airtel.in/bank"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.airtel.in/bank
              </a>{" "}
              or contact their customer support before making any decisions.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
