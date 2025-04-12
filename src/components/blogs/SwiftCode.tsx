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

export default function SwiftCode() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose lg:prose-xl dark:prose-invert max-w-none">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          SWIFT Code Finder: Complete Guide to International Banking Codes
        </h1>

        {/* <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span>Published: April 10, 2025</span>
          <span>•</span>
          <span>Last Updated: April 10, 2025</span>
        </div> */}

        <div className="relative w-full h-[470px] rounded-lg overflow-hidden mb-8">
          <Image
            src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1744301522/swiftcode3_fbgsw5.jpg"
            alt="SWIFT Code Finder - International Banking Codes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
            SWIFT codes are essential for international money transfers between
            banks
          </div>
        </div>

        <p className="lead text-lg font-medium">
          When sending money internationally, you'll surely encounter the term
          "SWIFT code." These codes are crucial for ensuring your money reaches
          the correct destination. This comprehensive guide explains everything
          you need to know about SWIFT codes, how they differ from IFSC codes,
          and how to find the SWIFT codes for major Indian banks like SBI, HDFC,
          and Kotak.
        </p>

        <div className="bg-muted p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li>
              <a
                href="#what-is-swift-code"
                className="text-primary hover:underline"
              >
                What is a SWIFT Code?
              </a>
            </li>
            <li>
              <a href="#swift-vs-ifsc" className="text-primary hover:underline">
                SWIFT Code vs. IFSC Code
              </a>
            </li>
            <li>
              <a
                href="#swift-code-format"
                className="text-primary hover:underline"
              >
                SWIFT Code Format
              </a>
            </li>
            <li>
              <a
                href="#indian-bank-swift"
                className="text-primary hover:underline"
              >
                SWIFT Codes for Major Indian Banks
              </a>
            </li>
            <li>
              <a href="#how-to-find" className="text-primary hover:underline">
                How to Find SWIFT Codes
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-primary hover:underline">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        <section id="what-is-swift-code">
          <h2 className="text-2xl font-bold mb-4">What is a SWIFT Code?</h2>
          <p>
            A SWIFT code (also known as BIC - Bank Identifier Code) is a
            standard format of Business Identifier Codes approved by the
            International Organization for Standardization (ISO). These codes
            are crucial for enabling bank-to-bank money transfers, especially
            when conducting international wire transfers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1744305924/swift4_rqd6ip.webp"
                alt="SWIFT Code International Banking Network"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Key Points About SWIFT Codes
              </h3>
              <ul className="space-y-2">
                <li>
                  SWIFT full from is Society for Worldwide Interbank Financial
                  Telecommunication
                </li>
                <li>Used primarily for international money transfers</li>
                <li>Identifies banks and financial institutions globally</li>
                <li>Consists of 8 or 11 characters</li>
                <li>Different from domestic codes like IFSC (used in India)</li>
                <li>Essential for foreign currency transactions</li>
              </ul>
            </div>
          </div>

          <p>
            Founded in 1973, the SWIFT network is based in Belgium and serves as
            a central hub for global financial communications. Today, it
            connects more than 11,000 financial institutions in over 200
            countries and territories. To transfer money internationally or
            receive funds from another country, the sending bank needs the SWIFT
            code of the recipient's bank to guarantee the funds are directed to
            the correct financial institution.
          </p>
        </section>

        <section id="swift-vs-ifsc" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            SWIFT Code vs. IFSC Code: Understanding the Difference
          </h2>
          <p>
            The question "Is SWIFT code and IFSC code same?" is one that gets
            asked a lot. The answer is no - they serve different purposes in the
            banking system, though both are used for identifying banks in
            transactions.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-3">
              Key Differences Between SWIFT and IFSC Codes:
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-transparent">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">Feature</th>
                    <th className="py-2 px-4 text-left">SWIFT Code</th>
                    <th className="py-2 px-4 text-left">IFSC Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Purpose</td>
                    <td className="py-2 px-4">International transfers</td>
                    <td className="py-2 px-4">
                      Domestic transfers within India
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Format</td>
                    <td className="py-2 px-4">8 or 11 characters</td>
                    <td className="py-2 px-4">11 characters</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Usage</td>
                    <td className="py-2 px-4">Global</td>
                    <td className="py-2 px-4">India only</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Governing Body</td>
                    <td className="py-2 px-4">SWIFT Organization</td>
                    <td className="py-2 px-4">Reserve Bank of India (RBI)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">Transfer Systems</td>
                    <td className="py-2 px-4">International wire transfers</td>
                    <td className="py-2 px-4">NEFT, RTGS, IMPS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            In simple terms, if you're transferring money within India, you'll
            use the IFSC code. The SWIFT code is necessary when sending or
            receiving money abroad. For Indian banks, both codes exist, but
            they're used for different types of transactions.
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
              Important Note
            </h3>
            <p>
              When someone asks "Swift code kya hota hai?" (What is a SWIFT
              code?), explain that it's an international bank code used for
              foreign money transfers, while IFSC codes are used only for
              domestic transfers within India. You'll need both codes if you
              regularly handle both domestic and international transactions.
            </p>
          </div>
        </section>

        <section id="swift-code-format" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Understanding SWIFT Code Format
          </h2>
          <p>
            SWIFT codes follow a specific structure that provides information
            about the bank and its location. A standard SWIFT code consists of 8
            or 11 characters, broken down as follows:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                SWIFT Code Structure
              </h3>
              <ul className="space-y-3">
                <li>
                  <strong>First 4 characters:</strong> Bank code (identifies the
                  bank)
                </li>
                <li>
                  <strong>Next 2 characters:</strong> Country code (based on the
                  ISO standard)
                </li>
                <li>
                  <strong>Next 2 characters:</strong> Location code (city or
                  region)
                </li>
                <li>
                  <strong>Last 3 characters (optional):</strong> Branch code
                  (specific branch)
                </li>
              </ul>
              <p className="mt-3 text-sm">
                If the SWIFT code is 8 characters long, it refers to the bank's
                head office. An 11-character code specifies a particular branch.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Example: HDFC Bank SWIFT Code
              </h3>
              <div className="font-mono text-lg">HDFCINBB</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <strong>HDFC</strong> - Bank code (HDFC Bank)
                </li>
                <li>
                  <strong>IN</strong> - Country code (India)
                </li>
                <li>
                  <strong>BB</strong> - Location code (Mumbai)
                </li>
                <li>
                  <strong>XXX</strong> - Branch code (not mentioned, refers to
                  head office)
                </li>
              </ul>
            </div>
          </div>

          <p>
            Understanding this format can help you verify if a SWIFT code is
            correct. For example, the SWIFT codes of all banks in India will
            include "IN" to indicate the country code. If you see a different
            country code, it might be incorrect or belong to an international
            branch of the bank.
          </p>
        </section>

        <section id="indian-bank-swift" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            SWIFT Codes for Major Indian Banks
          </h2>
          <p>
            If you're wondering "What is SWIFT code of SBI?" or looking for
            SWIFT codes of other major Indian banks, here's a quick reference
            guide to the most commonly used SWIFT codes in India:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  State Bank of India SWIFT Code
                </h3>
                <div className="font-mono text-lg mb-2">SBININBB</div>
                <p className="text-sm text-muted-foreground">
                  This is the primary SWIFT code for State Bank of India's head
                  office. For specific branches, additional characters may be
                  added.
                </p>
                <div className="mt-4">
                  <strong>Common Variations:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>SBININBBXXX - Head Office</li>
                    <li>SBININBB104 - New Delhi Main Branch</li>
                    <li>SBININBB157 - Mumbai Main Branch</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  HDFC Bank SWIFT Code
                </h3>
                <div className="font-mono text-lg mb-2">HDFCINBB</div>
                <p className="text-sm text-muted-foreground">
                  This is the primary SWIFT code of the head office of HDFC
                  Bank. For specific branches, additional characters may be
                  added.
                </p>
                <div className="mt-4">
                  <strong>Common Variations:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>HDFCINBBXXX - Head Office</li>
                    <li>HDFCINBBDEL - Delhi Branch</li>
                    <li>HDFCINBBCHE - Chennai Branch</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Kotak Mahindra Bank SWIFT Code
                </h3>
                <div className="font-mono text-lg mb-2">KKBKINBB</div>
                <p className="text-sm text-muted-foreground">
                  This is the primary SWIFT code of Kotak Mahindra Bank's head
                  office. For specific branches, additional characters may be
                  added.
                </p>
                <div className="mt-4">
                  <strong>Common Variations:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>KKBKINBBXXX - Head Office</li>
                    <li>KKBKINBBBLR - Bangalore Branch</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Other Major Indian Banks
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong>ICICI Bank:</strong>{" "}
                    <span className="font-mono">ICICINBB</span>
                  </li>
                  <li>
                    <strong>Axis Bank:</strong>{" "}
                    <span className="font-mono">AXISINBB</span>
                  </li>
                  <li>
                    <strong>Punjab National Bank:</strong>{" "}
                    <span className="font-mono">PUNBINBB</span>
                  </li>
                  <li>
                    <strong>Bank of Baroda:</strong>{" "}
                    <span className="font-mono">BARBINBB</span>
                  </li>
                  <li>
                    <strong>Canara Bank:</strong>{" "}
                    <span className="font-mono">CNRBINBB</span>
                  </li>
                  <li>
                    <strong>Union Bank of India:</strong>{" "}
                    <span className="font-mono">UBININBB</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Important Note About Bank SWIFT Codes
            </h3>
            <p>
              While the SWIFT codes provided above are generally correct for the
              head offices of these banks, specific branches may have different
              codes. Additionally, banks occasionally update their SWIFT codes.
              For the most up-to-date and precise information, we recommend the
              following:
            </p>
            <ul className="mt-3 space-y-2">
              <li>Checking the official website of the bank</li>
              <li>Contacting the bank's customer service</li>
              <li>
                Using our{" "}
                <Link
                  href="https://www.ifsccodeb.com/swiftcode"
                  className="text-blue-700 hover:underline"
                >
                  SWIFT Code Finder tool
                </Link>{" "}
                for verified and updated codes
              </li>
            </ul>
          </div>
        </section>

        <section id="how-to-find" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">How to Find SWIFT Codes</h2>
          <p>
            If you're wondering "What is a SWIFT code for a bank?" and how to
            find it, there are several reliable methods to locate the correct
            SWIFT code for any bank:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Official Sources</h3>
              <ul className="space-y-2">
                <li>
                  Bank's official website (usually in the "International
                  Banking" section)
                </li>
                <li>Bank statements or account documentation</li>
                <li>Directly contacting the bank's customer service</li>
                <li>Asking to a bank agent in a branch</li>
                <li>
                  Online banking portal (may be listed in account details)
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Online Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.ifsccodeb.com/swiftcode"
                    className="text-blue-700 hover:underline"
                  >
                    Our SWIFT Code Finder website
                  </Link>{" "}
                  - complete database of Indian bank SWIFT codes
                </li>
                <li>The official SWIFT website (requires registration)</li>
                <li>Your bank's mobile banking app</li>
                <li>Central bank websites (like RBI for Indian banks)</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full h-[300px] rounded-lg overflow-hidden my-6">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1744307127/swift5_jqbbra.png"
              alt="Using SWIFT Code Finder Tool for International Transfers"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Using Our SWIFT Code Finder Tool
            </h3>
            <p>
              The easiest and most reliable way to find accurate SWIFT codes for
              Indian banks is to use our dedicated SWIFT Code Finder tool. Our
              database is regularly updated and includes all major Indian banks
              and their branches.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="https://www.ifsccodeb.com/swiftcode">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Find SWIFT Codes Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="faqs" className="mt-10">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About SWIFT Codes
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is SWIFT code and IFSC code same?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  No, They are different. SWIFT codes are used for international
                  money transfers between banks worldwide, while IFSC (Indian
                  Financial System Code) codes are used exclusively for domestic
                  transfers within India. SWIFT codes typically have 8 or 11
                  characters and identify banks globally, whereas IFSC codes
                  have 11 characters and identify bank branches only in India.
                  When sending or receiving money from overseas, you'll need a
                  SWIFT code; for transactions within India, you'll need an IFSC
                  code.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is SWIFT code of SBI?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The primary SWIFT code for State Bank of India (SBI) is{" "}
                  <strong>SBININBB</strong>. This code is used for the head
                  office. Specific SBI branches may have additional characters
                  added to this base code. For example, SBI New Delhi Main
                  Branch uses SBININBB104, while SBI Mumbai Main Branch uses
                  SBININBB157. For the most accurate SWIFT code for a specific
                  SBI branch, you should check with the branch directly or use
                  our{" "}
                  <Link
                    href="https://www.ifsccodeb.com/swiftcode"
                    className="text-blue-700 hover:underline"
                  >
                    SWIFT Code Finder tool.
                  </Link>
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                What is SWIFT code of HDFC Bank?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  The primary SWIFT code for HDFC Bank is{" "}
                  <strong>HDFCINBB</strong>. This code is used for the head
                  office. Specific HDFC Bank branches may have additional
                  characters added to this base code. For example, HDFC Bank
                  Delhi Branch uses HDFCINBBDEL, while HDFC Bank Chennai Branch
                  uses HDFCINBBCHE. For the most accurate SWIFT code for a
                  specific HDFC Bank branch, you should check with the branch
                  directly or use our{" "}
                  <Link
                    href="https://www.ifsccodeb.com/swiftcode"
                    className="text-blue-700 hover:underline"
                  >
                    SWIFT Code Finder tool.
                  </Link>
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Swift code kya hota hai?</AccordionTrigger>
              <AccordionContent>
                <p>
                  SWIFT कोड एक अंतरराष्ट्रीय मानक बैंकिंग कोड है, जिसका उपयोग
                  विदेशों में धन भेजने या प्राप्त करने के लिए किया जाता है। यह
                  कोड आमतौर पर 8 या 11 अक्षरों का होता है और इसका उद्देश्य
                  दुनिया भर के बैंकों की पहचान सुनिश्चित करना होता है। SWIFT का
                  पूरा नाम Society for Worldwide Interbank Financial
                  Telecommunication है। जब आप विदेश से पैसे भेजते या प्राप्त
                  करते हैं, तब आपको SWIFT कोड की आवश्यकता होती है। भारत में,
                  घरेलू ट्रांसफर के लिए IFSC कोड का उपयोग किया जाता है, जबकि
                  अंतरराष्ट्रीय ट्रांसफर के लिए SWIFT कोड का उपयोग होता है।
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What is a SWIFT code for a bank?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  A SWIFT code, also known as a BIC code, is a special
                  identifying number that is given to financial institutions and
                  banks all over the world. It consists of 8 or 11 characters
                  that identify the bank, country, location, and optionally, the
                  specific branch. In order to guarantee that funds are
                  transferred to the appropriate bank, SWIFT codes are mostly
                  utilised for international wire transfers. The code helps the
                  sending bank identify exactly where to send the funds in the
                  global banking network. Without the correct SWIFT code,
                  international transfers may be delayed or sent to the wrong
                  institution.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                How do I find my bank's SWIFT code?
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>There are multiple ways to find your bank's SWIFT code:</p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>
                      Check your bank's official website (usually in the
                      International Banking section)
                    </li>
                    <li>Examine your account papers or bank statements.</li>
                    <li>Log in to your online banking portal</li>
                    <li>Contact your bank's customer service</li>
                    <li>Visit a branch and ask a bank representative</li>
                    <li>
                      Use our{" "}
                      <Link
                        href="https://www.ifsccodeb.com/swiftcode"
                        className="text-blue-700 hover:underline"
                      >
                        SWIFT Code Finder tool
                      </Link>
                    </li>
                  </ul>
                  <p className="mt-2">
                    For Indian banks, you can also check the Reserve Bank of
                    India (RBI) website, which maintains a directory of SWIFT
                    codes for authorized banks in India.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                What is Kotak Bank SWIFT code?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  <strong>KKBKINBB</strong> is Kotak Mahindra Bank's main SWIFT
                  code. This code is used for the head office. Specific Kotak
                  Bank branches may have additional characters added to this
                  base code. For example, Kotak Bank Bangalore Branch swift code
                  is KKBKINBBBLR. For the most accurate SWIFT code for a
                  specific Kotak Bank branch, you should check with the branch
                  directly or use our{" "}
                  <Link
                    href="https://www.ifsccodeb.com/swiftcode"
                    className="text-blue-700 hover:underline"
                  >
                    SWIFT Code Finder tool.
                  </Link>
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mt-12 bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Choose the Appropriate SWIFT Code for Your Foreign Transactions
          </h2>
          <p>
            For international money transactions to go smoothly, SWIFT codes are
            necessary. Using the wrong code can lead to delays or even failed
            transactions. Whether you're sending money to family abroad,
            receiving payments from international clients, or managing
            cross-border business transactions, having the correct SWIFT code is
            crucial.
          </p>
          <p className="mt-4">
            Our comprehensive SWIFT Code Finder tool makes it easy to find
            accurate SWIFT codes for all major Indian banks, including State
            Bank of India, HDFC Bank, Kotak Mahindra Bank, and many more. Our
            database is regularly updated to ensure you always have access to
            the most current information.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="https://www.ifsccodeb.com/swiftcode">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Use Our SWIFT Code Finder Now
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
              The information provided in this article about SWIFT codes is for
              general informational purposes only. Despite our best efforts to
              maintain the information current and accurate, we make no explicit
              or implied claims or warranties on the availability, suitability,
              accuracy, completeness, or reliability of the material provided
              here.
            </p>
            <p>
              It is entirely at your own responsibility to rely on such
              information. The SWIFT codes mentioned in this article are based
              on current information, but we recommend verifying them from
              official sources before initiating any financial transactions.
            </p>
            <p>
              This website is not affiliated with, endorsed by, or officially
              connected with SWIFT or any of the banks mentioned. You can access
              the official SWIFT website at{" "}
              <a
                href="https://www.swift.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.swift.com
              </a>
              .
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
