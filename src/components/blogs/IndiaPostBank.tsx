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

export default function IndiaPostBank() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose lg:prose-xl dark:prose-invert max-w-none">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          India Post Payment Bank: Complete Guide to Banking Services
        </h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span>Published: March 25, 2025</span>
          <span>•</span>
          <span>Last Updated: March 25, 2025</span>
        </div>

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1743495244/post2_dnmaak.jpg"
            alt="India Post Payment Bank - IFSC Code and Banking Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
            India Post Payment Bank - Your trusted banking partner with a
            universal IFSC code
          </div>
        </div>

        <p className="lead text-lg font-medium">
          India Post Payment Bank (IPPB) has revolutionized banking
          accessibility in India with its extensive network and simple banking
          solutions. This comprehensive guide covers everything you need to know
          about the India Post Payment Bank IFSC code, banking services, and how
          to make the most of your IPPB account.
        </p>

        <div className="bg-muted p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li>
              <a href="#introduction" className="text-primary hover:underline">
                Introduction to India Post Payment Bank
              </a>
            </li>
            <li>
              <a href="#ifsc-code" className="text-primary hover:underline">
                <strong>India Post Payment Bank IFSC Code</strong>
              </a>
            </li>
            <li>
              <a href="#balance-check" className="text-primary hover:underline">
                How to Check Balance
              </a>
            </li>
            <li>
              <a
                href="#account-opening"
                className="text-primary hover:underline"
              >
                How to Open an Account
              </a>
            </li>
            <li>
              <a href="#customer-care" className="text-primary hover:underline">
                Customer Care Information
              </a>
            </li>
            <li>
              <a href="#branches" className="text-primary hover:underline">
                Branch Network
              </a>
            </li>
            <li>
              <a href="#services" className="text-primary hover:underline">
                Banking Services
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-primary hover:underline">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        <section id="introduction">
          <h2 className="text-2xl font-bold mb-4">
            Introduction to India Post Payment Bank (IPPB)
          </h2>
          <p>
            India Post Payment Bank (IPPB) is a government-owned payment bank
            that was launched on September 1, 2018, with the vision of building
            the most accessible, affordable, and trusted bank for the common
            man. As a subsidiary of the Indian Post, IPPB leverages the vast
            postal network to bring banking services to every corner of the
            country, from urban centers to the remotest villages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1743512315/post13_sutugn.avif"
                alt="India Post Payment Bank Services and IFSC Code"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Key Highlights of India Post Payment Bank
              </h3>
              <ul className="space-y-2">
                <li>Government-owned payment bank under Department of Posts</li>
                <li>Universal IFSC code (IPOS0000001) for all transactions</li>
                <li>Over 1.35 lakh post offices serve as access points</li>
                <li>
                  More than 4 lakh postal employees as banking correspondents
                </li>
                <li>Interest rate of up to 2.25% p.a. on savings accounts</li>
                <li>No minimum balance requirements</li>
                <li>Doorstep banking services</li>
              </ul>
            </div>
          </div>

          <p>
            What makes India Post Payment Bank truly special is how it combines
            the trust and reach of India Post with modern banking technology.
            Whether you're in a bustling city or a remote village, IPPB ensures
            that quality banking services are just a postman away. The bank
            focuses on financial inclusion, making banking accessible to
            everyone, especially those who have been traditionally underserved
            by the banking system.
          </p>
        </section>

        <section id="ifsc-code" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            India Post Payment Bank IFSC Code: Everything You Need to Know
          </h2>
          <p>
            The IFSC (Indian Financial System Code) for India Post Payment Bank
            is essential for receiving funds through NEFT, RTGS, or IMPS. Unlike
            traditional banks with different IFSC codes for different branches,
            India Post Payment Bank uses a single universal IFSC code
            nationwide, making it easier for customers to remember and use.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-3">
              India Post Payment Bank IFSC Code:
            </h3>
            <div className="flex items-center justify-between bg-card p-4 rounded-md border">
              <span className="text-xl font-mono">IPOS0000001</span>
            </div>
            <p className="mt-4">
              <strong>Important:</strong> The India Post Payment Bank IFSC code
              (IPOS0000001) is used for all transactions across India,
              regardless of which branch you opened your account at. This
              universal code simplifies the banking experience for all IPPB
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Understanding the IFSC Code of India Post Payment Bank
              </h3>
              <p>
                The IFSC code for India Post Payment Bank can be broken down as
                follows:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <strong>IPOS</strong>: First four characters represent the
                  bank (India Post)
                </li>
                <li>
                  <strong>0</strong>: The fifth character is reserved (zero)
                </li>
                <li>
                  <strong>000001</strong>: Last six characters represent the
                  branch code
                </li>
              </ul>
              <p className="mt-3">
                This standardized IFSC code is one of the unique features of
                India Post Payment Bank that simplifies banking for its
                customers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                When You Need the India Post Payment Bank IFSC Code
              </h3>
              <ul className="space-y-2">
                <li>Receiving salary or pension payments</li>
                <li>Receiving money from friends or family</li>
                <li>Setting up direct benefit transfers (DBT)</li>
                <li>Receiving tax refunds or government benefits</li>
                <li>Receiving business payments or client transfers</li>
                <li>Setting up automatic recurring transfers</li>
                <li>Linking your account to payment apps</li>
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
              Pro Tip About India Post Payment Bank IFSC Code
            </h3>
            <p>
              When someone asks you "India Post Payment Bank ka IFSC code kya
              hai?" you can confidently tell them it's IPOS0000001. This code
              works for all IPPB accounts across India, so there's no need to
              worry about branch-specific codes. Keep this code handy in your
              phone contacts or wallet for quick reference when setting up
              transfers or receiving payments.
            </p>
          </div>

          <div className="relative w-full h-[250px] rounded-lg overflow-hidden my-6">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1743497729/post5_xnwkt6.png"
              alt="Using India Post Payment Bank IFSC Code for transactions"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section id="balance-check" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            How to Check the Balance of India Post Payments Bank
          </h2>
          <p>
            Checking your India Post Payment Bank account balance is easy!
            Whether you prefer using digital methods or traditional options,
            there are multiple ways to do it, making it convenient for everyone.
          </p>

          <Tabs defaultValue="mobile" className="my-6">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="mobile">Mobile Banking</TabsTrigger>
              <TabsTrigger value="missed">Missed Call</TabsTrigger>
              <TabsTrigger value="sms">SMS Banking</TabsTrigger>
              <TabsTrigger value="visit">Visit Branch</TabsTrigger>
            </TabsList>
            <TabsContent
              value="mobile"
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold mb-3">
                Check Balance via Mobile Banking App
              </h3>
              <ol className="space-y-3">
                <li>
                  1. Download the India Post Payment Bank Mobile Banking App
                  from Google Play Store or Apple App Store
                </li>
                <li>2. Log in using your Customer ID and mPIN</li>
                <li>
                  3. Your account balance will be clearly visible on the
                  dashboard.
                </li>
                <li>
                  4. For a detailed view, tap on the "View Statement" to see
                  recent transactions
                </li>
              </ol>
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden mt-4">
                <Image
                  src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1743505366/pppppp_ra3enf.png"
                  alt="India Post Payment Bank Mobile Banking App Balance Check"
                  fill
                  className="object-contain"
                />
              </div>
            </TabsContent>
            <TabsContent
              value="missed"
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold mb-3">
                Check Balance via Missed Call
              </h3>
              <p className="mb-4">
                India Post Payment Bank offers a simple missed call service to
                check your account balance:
              </p>
              <div className="bg-primary/5 p-4 rounded-lg mb-4">
                <p className="text-center font-semibold text-lg">
                  Give a missed call to:{" "}
                  <span className="font-mono">
                    7799022509 for balance enquiry
                  </span>
                </p>
                <p className="text-center font-semibold text-lg">
                  Give a missed call to:{" "}
                  <span className="font-mono">
                    7799022708 for Mini statement
                  </span>
                </p>
              </div>
              <p>
                After giving a missed call from your registered mobile number,
                you'll receive an SMS with your current account balance/mini
                statement. This service is available 24/7 and is entirely free
                of cost.
              </p>
              <div className="mt-4 p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Note: Make sure you're calling from the mobile number
                  registered with your India Post Payment Bank account. To
                  register, give a miss call to 8424054994 from your registered
                  number linked to your saving/current bank account.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="sms" className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">
                Check Balance via SMS Banking
              </h3>
              <p className="mb-4">To check your balance via SMS:</p>
              <div className="bg-primary/5 p-4 rounded-lg mb-4">
                <p className="font-semibold">
                  Send SMS in the following format:
                </p>
                <p className="font-mono mt-2">BAL</p>
                <p className="mt-2">
                  To: <span className="font-mono">7738062873</span>
                </p>
              </div>
              <p>
                You'll receive an SMS with your current account balance shortly.
                This service works even on basic feature phones without internet
                connectivity.
              </p>
              <div className="mt-4 p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Note: Make sure you first register by sending keyword
                  "REGISTER" to 7738062873 from your mobile number linked to
                  your saving/current account.
                </p>
              </div>
            </TabsContent>
            <TabsContent
              value="visit"
              className="bg-card p-6 rounded-lg border"
            >
              <h3 className="text-xl font-semibold mb-3">
                Check Balance by Visiting a Branch
              </h3>
              <p>
                You can check your balance by visiting any India Post Payment
                Bank branch or access point:
              </p>
              <ol className="space-y-3 mt-4">
                <li>
                  1. Visit your nearest post office that offers India Post
                  Payment Bank services
                </li>
                <li>2. Carry your IPPB account details and a valid ID proof</li>
                <li>
                  3. Fill out the balance enquiry form or directly request the
                  postal staff
                </li>
                <li>4. The staff will provide you with your current balance</li>
              </ol>
            </TabsContent>
          </Tabs>
        </section>

        <section id="account-opening" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            How to Open an India Post Payment Bank Account
          </h2>
          <p>
            Opening an account with India Post Payment Bank is a straightforward
            process. You can choose from multiple convenient options based on
            your preference and location.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">At Post Office</h3>
              <ol className="space-y-2">
                <li>
                  1. Visit your nearest post office offering India Post Payment
                  Bank services
                </li>
                <li>
                  2. Carry your Aadhaar card, PAN card, and a recent photograph
                </li>
                <li>3. Fill out the account opening form</li>
                <li>4. Complete the biometric verification</li>
                <li>5. Receive your account details and IFSC code instantly</li>
              </ol>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Doorstep Banking</h3>
              <ol className="space-y-2">
                <li>
                  1. Call India Post Payment Bank customer care at 155299 or
                  033-22029000
                </li>
                <li>2. Request for doorstep account opening service</li>
                <li>
                  3. You can request the service for a date between T+2 (2 days
                  from today) and T+10 (10 days from today).
                </li>
                <li>
                  4. On the selected date, you can choose a delivery time slot
                  between 11:00 AM and 4:00 PM.
                </li>
                <li>
                  5. A postal agent will visit your home at the scheduled time
                </li>
                <li>6. Complete documentation and biometric verification</li>
                <li>
                  7. Get your account with IFSC code activated on the spot
                </li>
              </ol>
            </div>
          </div>

          <div className="relative w-full h-[500px] rounded-lg overflow-hidden my-6">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1743508586/post10_cd2nfj.avif"
              alt="India Post Payment Bank Account Opening Process"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Documents Required for Account Opening
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Identity Proof (any one)</h4>
                <ul className="space-y-1">
                  <li>Aadhaar Card (preferred)</li>
                  <li>Voter ID Card</li>
                  <li>Driving License</li>
                  <li>Passport</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Additional Documents</h4>
                <ul className="space-y-1">
                  <li>PAN Card or Form 60</li>
                  <li>Recent passport-sized photograph</li>
                  <li>Mobile number (for SMS alerts)</li>
                  <li>Email ID (optional)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm">
              <strong>Note:</strong> India Post Payment Bank me account kaise
              khole? The process is designed to be simple and accessible. If you
              have any difficulties, the postal staff are trained to assist you
              at every step.
            </p>
          </div>
        </section>

        <section id="customer-care" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            India Post Payment Bank Customer Care
          </h2>
          <p>
            India Post Payment Bank offers comprehensive customer support
            through multiple channels to ensure that help is always at hand
            whenever you need it.
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
                  <h3 className="text-xl font-semibold mb-2">
                    Toll-Free Helpline
                  </h3>
                  <p className="text-lg font-mono mb-2"> 1800-8899-860</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Available 24x7 for all your queries
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
                  <p className="text-lg font-mono">contact@ippbonline.in</p>
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
                  <h3 className="text-xl font-semibold mb-2">
                    Mobile Banking Support
                  </h3>
                  <p className="text-lg">In-App Help Section</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Instant solutions at your fingertips
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
                <li>IFSC code confirmation and assistance</li>
                <li>Reporting lost/stolen cards</li>
                <li>Account statement requests</li>
              </ul>
              <ul className="space-y-2">
                <li>Failed transaction resolution</li>
                <li>KYC update assistance</li>
                <li>Account closure requests</li>
                <li>Complaint registration and tracking</li>
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
              Important Note About Customer Care
            </h3>
            <p>
              When you're wondering "India Post Payment Bank ka number kya hai?"
              For any customer support needs, always contact the official
              toll-free number 1800-8899-860. Be cautious of fraudulent calls
              claiming to be from India Post Payment Bank. Remember that genuine
              bank representatives will never ask for your complete card
              details, PIN, or OTP over the phone.
            </p>
          </div>
        </section>

        <section id="branches" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            India Post Payment Bank Branch Network
          </h2>
          <p>
            One of India Post Payment Bank's greatest strengths is its extensive
            network of access points across India. By leveraging the vastpostal
            network, IPPB has created one of the largest banking networks in the
            country.
          </p>

          <div className="relative w-full h-[500px] rounded-lg overflow-hidden my-6">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1743511551/post13_htogjq.jpg"
              alt="India Post Payment Bank Branch Network"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Branch Types</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Main Branches:</strong> 650+ dedicated India Post
                  Payment Bank branches
                </li>
                <li>
                  <strong>Post Office Access Points:</strong> More than 1.35
                  lakh post offices
                </li>
                <li>
                  <strong>Doorstep Service:</strong> 2 lakh+ postal employees
                </li>
                <li>
                  <strong>Micro ATMs:</strong> Available with postal agents
                </li>
                <li>
                  <strong>Digital Channels:</strong> Mobile and internet banking
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Finding Your Nearest Branch
              </h3>
              <p>
                If you're wondering "India Post Payment Bank ka branch kahan
                hai?" There are multiple ways to find out near you:
              </p>
              <ul className="space-y-2 mt-3">
                <li>
                  Visit the official India Post Payment Bank website and use the
                  branch locator
                </li>
                <li>Check with your local post office</li>
                <li>Use the IPPB mobile app's branch locator feature</li>
                <li>Ask any postal employee for guidance</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Unique Branch Features
            </h3>
            <p className="mb-4">
              India Post Payment Bank branches offer several unique features
              that set them apart from traditional banks:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Doorstep Banking:</strong> Banking services delivered
                right to your home
              </li>
              <li>
                <strong>Extended Hours:</strong> Many branches follow post
                office timings
              </li>
              <li>
                <strong>Rural Reach:</strong> Branches in areas where other
                banks don't operate
              </li>
              <li>
                <strong>Postal Integration:</strong> Combined postal and banking
                services
              </li>
              <li>
                <strong>Biometric Authentication:</strong> Aadhaar-based
                services for convenience
              </li>
              <li>
                <strong>Universal IFSC Code:</strong> Same IFSC code
                (IPOS0000001) across all branches
              </li>
            </ul>
          </div>
        </section>

        <section id="services" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            India Post Payment Bank Services
          </h2>
          <p>
            India Post Payment Bank offers a comprehensive range of banking and
            financial services designed to meet the needs of diverse customers,
            from urban professionals to rural residents.
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
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">
                    Savings Accounts
                  </h3>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>Regular Savings Account</li>
                    <li>Digital Savings Account</li>
                    <li>Basic Savings Account</li>
                  </ul>
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
                      x="1"
                      y="4"
                      width="22"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">IPPB Cards</h3>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>QR Card (non-chip based)</li>
                    <li>ATM-cum-Debit Card</li>
                    <li>Virtual Debit Card</li>
                    <li>Contactless payments</li>
                  </ul>
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
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">
                    Money Transfers
                  </h3>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>NEFT/RTGS/IMPS using IFSC code</li>
                    <li>UPI Payments</li>
                    <li>Domestic Money Transfers</li>
                    <li>Bill Payments & Recharges</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Government Services
              </h3>
              <ul className="space-y-2">
                <li>Direct Benefit Transfer (DBT) receipts</li>
                <li>Pension disbursements</li>
                <li>MNREGA wage payments</li>
                <li>Scholarship disbursements</li>
                <li>Government subsidies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Third-Party Products
              </h3>
              <ul className="space-y-2">
                <li>Insurance (Life, Health, General)</li>
                <li>Mutual Funds</li>
                <li>Loan services</li>
                <li>Bill payment services</li>
                <li>Aadhaar Enabled Payment System (AePS)</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full h-[450px] rounded-lg overflow-hidden my-6">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1743512315/post13_sutugn.avif"
              alt="India Post Payment Bank Services"
              fill
              className="object-cover"
            />
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
              Finding Your Customer ID
            </h3>
            <p>
              If you're wondering "India Post Payment Bank customer ID kaise
              nikale?", Here are some ways to find it:
            </p>
            <ul className="mt-3 space-y-2">
              <li>Check your welcome kit or account opening receipt</li>
              <li>Look at your IPPB passbook or statement</li>
              <li>
                Log in to the India Post Payment Bank mobile app (visible on
                dashboard)
              </li>
              <li>
                Call customer care at 1800-8899-860 with your registered mobile
                number
              </li>
              <li>
                Visit your nearest India Post Payment Bank branch with your ID
                proof
              </li>
            </ul>
            <p className="mt-3">
              Your Customer ID is essential for many services, so keep it handy
              but secure.
            </p>
          </div>
        </section>

        <section id="faqs" className="mt-10">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions(FAQ'S) About India Post Payment Bank
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                India Post Payment Bank ka IFSC code kya hota hai?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  India Post Payment Bank का IFSC code{" "}
                  <strong>IPOS0000001</strong> है। यह IFSC code पूरे भारत में
                  India Post Payment Bank के लिए एक ही है, क्योंकि यह एक डिजिटल
                  बैंक है और इसकी सभी शाखाओं के लिए एक ही IFSC code काम करता है।
                  आप इस IFSC code का उपयोग NEFT, RTGS, या IMPS के माध्यम से पैसे
                  प्राप्त करने के लिए कर सकते हैं।
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How to Check the Balance of India Post Payments Bank?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  You can check your India Post Payment Bank balance through
                  multiple methods:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    <strong>Missed Call:</strong> Give a missed call to
                    7799022509 from your registered mobile number
                  </li>
                  <li>
                    <strong>SMS Banking:</strong> Send SMS "BALANCE to
                    7738062873
                  </li>
                  <li>
                    <strong>Mobile App:</strong> Check through the India Post
                    Payment Bank Mobile Banking App
                  </li>
                  <li>
                    <strong>Customer Care:</strong> Call 1800-8899-860 and
                    follow the IVR instructions
                  </li>
                  <li>
                    <strong>Visit Branch:</strong> Check at any India Post
                    Payment Bank branch or post office access point
                  </li>
                  <li>
                    <strong>Doorstep Banking:</strong> Request a postal agent to
                    visit with a micro-ATM
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Does India Post Payment Bank have the same IFSC code for all its
                branches?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Yes, India Post Payment Bank uses a single universal IFSC code
                  (IPOS0000001) for all its branches across India. This is
                  different from traditional banks that have unique IFSC codes
                  for each branch. The universal IFSC code simplifies the
                  banking experience as you don't need to worry about
                  branch-specific codes when receiving funds through NEFT, RTGS,
                  or IMPS. This single IFSC code works for all India Post
                  Payment Bank accounts regardless of where you opened your
                  account.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What is the process to open an account with India Post Payment
                Bank?
              </AccordionTrigger>
              <AccordionContent>
                <p>Opening an account in India Post Payment Bank is simple:</p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    <strong>Visit Post Office:</strong> Go to any post office
                    offering India Post Payment Bank services with your Aadhaar,
                    PAN, and a photograph
                  </li>
                  <li>
                    <strong>Doorstep Service:</strong> Call India Post Payment
                    Bank customer care at 155299 or 033-22029000 to request a
                    postal agent to visit your home for account opening
                  </li>
                </ul>
                <p className="mt-2">
                  The basic requirements include a valid ID proof (preferably
                  Aadhaar), address proof, PAN card or Form 60, and a recent
                  photograph. The account is typically activated instantly after
                  biometric verification.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                India Post Payment Bank ka branch kahan hai?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  India Post Payment Bank has an extensive network of branches
                  and access points:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    650+ dedicated India Post Payment Bank branches across India
                  </li>
                  <li>Above 1.35 lakh post offices serving as access points</li>
                  <li>Presence in urban, semi-urban, and rural areas</li>
                </ul>
                <p className="mt-2">
                  To find the nearest India Post Payment Bank branch or access
                  point:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    Visit the official India Post Payment Bank website and use
                    the branch locator
                  </li>
                  <li>Call customer care at 1800-8899-860</li>
                  <li>Check with your local post office</li>
                  <li>
                    Use the India Post Payment Bank mobile app's branch locator
                    feature
                  </li>
                </ul>
                <p className="mt-2">
                  Most post offices now offer India Post Payment Bank services,
                  making it one of the most accessible banking networks in
                  India.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                What is the maximum balance limit in India Post Payment Bank?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  As per RBI guidelines for payments banks, India Post Payment
                  Bank has a maximum balance limit of ₹2 lakhs per customer. If
                  your account balance exceeds this limit, the excess amount may
                  need to be transferred to a regular Post Office Savings
                  Account (POSA) or another bank account. This limit applies to
                  the end-of-day balance, and there are no restrictions on the
                  number of transactions or the total amount that can flow
                  through the account during the day.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                How can I find my customer ID for India Post Payment Bank?
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>
                    You can find your India Post Payment Bank customer ID
                    through these methods:
                  </p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>Check your welcome kit or account opening receipt</li>
                    <li>Look at your IPPB passbook or statement</li>
                    <li>
                      Log in to the India Post Payment Bank mobile app (visible
                      on dashboard)
                    </li>
                    <li>
                      Call customer care at 1800-8899-860 with your registered
                      mobile number
                    </li>
                    <li>
                      Visit your nearest India Post Payment Bank branch with
                      your ID proof
                    </li>
                    <li>
                      Check SMS notifications received during account opening
                    </li>
                  </ul>
                  <p className="mt-2">
                    Your Customer ID is a unique identifier for your account and
                    is required for various banking services, so it's important
                    to keep it accessible but secure.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mt-12 bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Conclusion: Banking Made Accessible with India Post Payment Bank
          </h2>
          <p>
            India Post Payment Bank has truly revolutionized banking in India by
            making financial services accessible to everyone, everywhere. By
            leveraging the vast postal network, IPPB has brought banking to the
            doorsteps of millions of Indians who previously had limited access
            to formal banking.
          </p>
          <p className="mt-4">
            Whether you're looking to open an account, check your balance, find
            the correct IFSC code for transactions, or understand the various
            services offered, India Post Payment Bank provides simple and
            straightforward solutions that cater to diverse needs.
          </p>
          <p className="mt-4">
            Remember that the IFSC code for India Post Payment Bank
            (IPOS0000001) remains the same across India, making it easier to
            receive funds regardless of your location. For any assistance with
            India Post Payment Bank services or IFSC codes, you can always refer
            to our{" "}
            <Link href="/" className="text-green-700 underline">
              IFSC code finder tool
            </Link>{" "}
            or contact IPPB's customer care.
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
              The details shared in this article about India Post Payment Bank’s
              IFSC code and banking services are for general informational
              purposes only. We do our best to ensure the accuracy and relevance
              of the information, but we cannot guarantee that it is always
              complete, up-to-date, or error-free.
            </p>
            <p>
              The IFSC code (IPOS0000001) mentioned here is based on the latest
              available data. However, we strongly recommend verifying it
              through official sources before using it for any financial
              transactions.
            </p>
            <p>
              Banking procedures, contact details, and services may change over
              time. To get the most accurate and updated information, please
              visit India Post Payment Bank’s official website{" "}
              <a
                href="https://www.ippbonline.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.ippbonline.com
              </a>{" "}
              or contact their customer support before making any decisions
              based on this article.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
