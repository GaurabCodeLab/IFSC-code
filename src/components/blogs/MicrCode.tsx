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

export default function MicrCode() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose lg:prose-xl dark:prose-invert max-w-none">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          MICR Code: Complete Guide to Understanding Bank Cheque Codes
        </h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span>Published: April 14, 2025</span>
          <span>•</span>
          <span>Last Updated: April 14, 2025</span>
        </div>

        <div className="relative w-full h-[250px] rounded-lg overflow-hidden mb-8">
          <Image
            src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1733173993/Screenshot_from_2024-12-03_02-42-49_pqmvta.png"
            alt="MICR Code on a bank cheque"
            className="object-contain"
            fill
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
            MICR code printed at the bottom of a bank cheque helps in automated
            cheque processing
          </div>
        </div>

        <div className="bg-muted p-5 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">What is MICR Code?</h2>
          <p className="text-lg">
            MICR (Magnetic Ink Character Recognition) code is a 9-digit code
            printed at the bottom of a cheque in special magnetic ink. It helps
            in the automated processing of cheques and identifies the bank
            branch that issued the cheque. MICR code consists of three parts:
            city code (3 digits), bank code (3 digits), and branch code (3
            digits).
          </p>
        </div>

        <p className="lead text-lg font-medium">
          If you've ever looked closely at a cheque, you might have noticed a
          series of numbers printed at the bottom. This is the MICR code, a
          crucial element in banking that ensures smooth processing of cheques.
          In this comprehensive guide, we'll explain everything you need to know
          about MICR codes, how to find them, and why they're important for your
          banking transactions.
        </p>

        <div className="bg-muted p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li>
              <a href="#what-is-micr" className="text-primary hover:underline">
                What is MICR Code in Detail
              </a>
            </li>
            <li>
              <a
                href="#micr-structure"
                className="text-primary hover:underline"
              >
                MICR Code Structure
              </a>
            </li>
            <li>
              <a href="#find-micr" className="text-primary hover:underline">
                How to Find MICR Code on Cheque
              </a>
            </li>
            <li>
              <a href="#major-banks" className="text-primary hover:underline">
                MICR Codes for Major Indian Banks
              </a>
            </li>
            <li>
              <a href="#micr-vs-ifsc" className="text-primary hover:underline">
                MICR Code vs. IFSC Code
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-primary hover:underline">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        <section id="what-is-micr">
          <h2 className="text-2xl font-bold mb-4">
            What is MICR Code in Detail
          </h2>
          <p>
            MICR (Magnetic Ink Character Recognition) is a technology used by
            the banking industry to facilitate the processing and clearance of
            cheques. The MICR code is a numeric code that appears at the bottom
            of a cheque leaf and is printed using special magnetic ink that can
            be read by MICR readers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1744634758/micr_lcgyep.webp"
                alt="MICR Code printed on a cheque"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Key Points About MICR Codes
              </h3>
              <ul className="space-y-2">
                <li>
                  Printed in special magnetic ink that can be read by MICR
                  readers
                </li>
                <li>Helps in the automated processing of cheques</li>
                <li>Reduces the time taken for cheque clearance</li>
                <li>Minimizes errors in cheque processing</li>
                <li>
                  Consists of 9 digits in India (may vary in other countries)
                </li>
                <li>Unique to each bank branch</li>
              </ul>
            </div>
          </div>

          <p>
            The MICR technology was developed in the 1950s to address the
            growing volume of cheques being processed by banks. Before MICR,
            cheque processing was a manual and time-consuming task prone to
            errors. With MICR, banks can process thousands of cheques quickly
            and accurately, even if the cheque is slightly damaged or has
            writing on it.
          </p>
        </section>

        <section id="micr-structure" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            MICR Code Structure: Understanding the 9 Digits
          </h2>
          <p>
            The MICR code consists of 9 digits in India, and each part of the
            code has a specific meaning. Understanding this structure can help
            you verify if a MICR code is correct and identify which bank and
            branch issued a particular cheque.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-3">
              MICR Code Structure in India:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">
                  City Code (First 3 digits)
                </h4>
                <p className="text-sm">
                  Identifies the city where the branch is located. For example,
                  Mumbai is 400, Delhi is 110, Bangalore is 560, etc.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">
                  Bank Code (Middle 3 digits)
                </h4>
                <p className="text-sm">
                  Identifies the bank. For example, State Bank of India is 002,
                  HDFC Bank is 240, ICICI Bank is 229, etc.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">
                  Branch Code (Last 3 digits)
                </h4>
                <p className="text-sm">
                  Identifies the specific branch of the bank. Each branch has a
                  unique 3-digit code.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm my-6">
            <h3 className="text-xl font-semibold mb-3">
              Example: Breaking Down a MICR Code
            </h3>
            <div className="font-mono text-lg mb-4">400002001</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <strong className="text-primary">400</strong> - City Code
                (Mumbai)
              </div>
              <div>
                <strong className="text-primary">002</strong> - Bank Code (State
                Bank of India)
              </div>
              <div>
                <strong className="text-primary">001</strong> - Branch Code
                (Fort Branch)
              </div>
            </div>
            <p className="mt-4 text-sm">
              This MICR code (400002001) represents the State Bank of India's
              Fort Branch in Mumbai.
            </p>
          </div>

          <p>
            It's important to note that MICR code consists of how many digits
            can vary by country. While India uses a 9-digit format, the United
            States uses a 9-digit format with a different structure, and other
            countries may have their own formats.
          </p>
        </section>

        <section id="find-micr" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            How to Find MICR Code on Cheque
          </h2>
          <p>
            Finding the MICR code on a cheque is straightforward once you know
            where to look. The code is always printed at the bottom of the
            cheque in a specific font called E-13B, which is designed to be
            easily read by MICR readers.
          </p>

          <div className="relative w-full h-[300px] rounded-lg overflow-hidden my-6 border">
            <Image
              src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1744636779/micr2_1_o6xzuk.png"
              alt="Location of MICR code on a cheque"
              fill
              className="object-contain -mt-8"
            />
            <div className="absolute -bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
              The MICR code is located at the bottom of the cheque, usually
              between the account number and cheque number
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Steps to Locate MICR Code on a Cheque
              </h3>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Take your cheque and look at the bottom portion</li>
                <li>
                  You'll see three groups of numbers printed in a special font
                  (slightly different from regular numbers)
                </li>
                <li>
                  The first group (on the left) is usually the cheque number
                  (may be 6 or more digits depending on the bank)
                </li>
                <li>The middle group is the 9-digit MICR code</li>
                <li>
                  The last group (on the right) is typically your account number
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700">
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
                No Cheque Book? Other Ways to Find MICR Code
              </h3>
              <ul className="space-y-2 mt-3">
                <li>Check your bank statement (often printed on it)</li>
                <li>
                  Log in to your online banking portal (usually in account
                  details)
                </li>
                <li>Contact your bank's customer service</li>
                <li>Visit your bank branch</li>
                <li>
                  Use our{" "}
                  <Link
                    href="https://www.ifsccodeb.com/micr"
                    className="text-blue-700 hover:underline"
                  >
                    MICR Code Finder tool
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <p>
            If you're wondering how to find MICR code of SBI or any other bank
            without a cheque book, the easiest method is to use{" "}
            <Link
              href="https://www.ifsccodeb.com/micr"
              className="text-blue-700 hover:underline"
            >
              MICR Code Finder tool
            </Link>
            , which has a comprehensive database of MICR codes for all bank
            branches in India.
          </p>
        </section>

        <section id="major-banks" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            MICR Codes for Major Indian Banks
          </h2>
          <p>
            Below are some examples of MICR codes for major Indian banks. Please
            note that these are examples for specific branches, and the actual
            MICR code will depend on the branch where your account is
            maintained.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  State Bank of India MICR Codes
                </h3>
                <p className="mb-4">
                  SBI MICR codes follow the standard 9-digit format. Here are
                  some examples of State Bank of India MICR codes for major
                  cities:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>Mumbai Main Branch:</strong>{" "}
                    <span className="font-mono">400002001</span>
                  </li>
                  <li>
                    <strong>Delhi Main Branch:</strong>{" "}
                    <span className="font-mono">110002001</span>
                  </li>
                  <li>
                    <strong>Kolkata Main Branch:</strong>{" "}
                    <span className="font-mono">700002001</span>
                  </li>
                  <li>
                    <strong>Chennai Main Branch:</strong>{" "}
                    <span className="font-mono">600002001</span>
                  </li>
                  <li>
                    <strong>Bangalore Main Branch:</strong>{" "}
                    <span className="font-mono">560002001</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Union Bank of India MICR Codes
                </h3>
                <p className="mb-4">
                  Union Bank of India MICR codes also follow the standard
                  9-digit format. Here are some examples:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>Mumbai Main Branch:</strong>{" "}
                    <span className="font-mono">400026005</span>
                  </li>
                  <li>
                    <strong>Delhi Main Branch:</strong>{" "}
                    <span className="font-mono">110026005</span>
                  </li>
                  <li>
                    <strong>Kolkata Main Branch:</strong>{" "}
                    <span className="font-mono">700026005</span>
                  </li>
                  <li>
                    <strong>Chennai Main Branch:</strong>{" "}
                    <span className="font-mono">600026005</span>
                  </li>
                  <li>
                    <strong>Bangalore Main Branch:</strong>{" "}
                    <span className="font-mono">560026005</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  HDFC Bank MICR Codes
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Mumbai Main Branch:</strong>{" "}
                    <span className="font-mono">400240071</span>
                  </li>
                  <li>
                    <strong>Delhi Main Branch:</strong>{" "}
                    <span className="font-mono">110240001</span>
                  </li>
                  <li>
                    <strong>Kolkata Main Branch:</strong>{" "}
                    <span className="font-mono">700240003</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  ICICI Bank MICR Codes
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Mumbai Main Branch:</strong>{" "}
                    <span className="font-mono">400229057</span>
                  </li>
                  <li>
                    <strong>Delhi Main Branch:</strong>{" "}
                    <span className="font-mono">110229002</span>
                  </li>
                  <li>
                    <strong>Bangalore Main Branch:</strong>{" "}
                    <span className="font-mono">560229002</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Find Accurate MICR Codes
            </h3>
            <p>
              The examples above are for reference only. For the most accurate
              and up-to-date MICR codes, we recommend using our{" "}
              <Link
                href="https://www.ifsccodeb.com/branch"
                className="text-blue-700 hover:underline"
              >
                MICR Code Finder tool
              </Link>
              . Simply enter your bank name and branch details to get the
              correct MICR code.
            </p>
          </div>
        </section>

        <section id="micr-vs-ifsc" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            MICR Code vs. IFSC Code: Understanding the Difference
          </h2>
          <p>
            Both MICR and IFSC codes are used in banking, but they serve
            different purposes. Understanding the difference can help you use
            the right code for the right transaction.
          </p>

          <div className="bg-primary/10 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-3">
              Key Differences Between MICR and IFSC Codes:
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-transparent">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">Feature</th>
                    <th className="py-2 px-4 text-left">MICR Code</th>
                    <th className="py-2 px-4 text-left">IFSC Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Purpose</td>
                    <td className="py-2 px-4">
                      Cheque processing and clearance
                    </td>
                    <td className="py-2 px-4">
                      Electronic fund transfers (NEFT, RTGS, IMPS)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Format</td>
                    <td className="py-2 px-4">9 digits (numeric only)</td>
                    <td className="py-2 px-4">11 characters (alphanumeric)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Structure</td>
                    <td className="py-2 px-4">
                      City code (3) + Bank code (3) + Branch code (3)
                    </td>
                    <td className="py-2 px-4">
                      Bank code (4) + 0 (1) + Branch code (6)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Where to find</td>
                    <td className="py-2 px-4">Bottom of cheque leaves</td>
                    <td className="py-2 px-4">
                      Bank statements, passbooks, online banking
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">Usage</td>
                    <td className="py-2 px-4">Physical cheque transactions</td>
                    <td className="py-2 px-4">Digital banking transactions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            In simple terms, if you're dealing with a physical cheque, you'll
            need the MICR code. If you're making an electronic fund transfer,
            you'll need the IFSC code. Both codes identify the same bank branch
            but are used in different banking systems.
          </p>
        </section>

        <section id="faqs" className="mt-10">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About MICR Codes
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is MICR code in cheque book?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  The MICR code in a cheque book is a 9-digit code printed at
                  the bottom of each cheque leaf using special magnetic ink. It
                  stands for Magnetic Ink Character Recognition code and helps
                  in the automated processing of cheques. The code identifies
                  the bank branch that issued the cheque and consists of three
                  parts: city code (first 3 digits), bank code (middle 3
                  digits), and branch code (last 3 digits). This code enables
                  banks to process cheques quickly and accurately through MICR
                  readers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is MICR code of bank?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The MICR code of a bank is a unique 9-digit identification
                  code assigned to each bank branch in India. It's used
                  primarily for cheque processing and clearance. The middle 3
                  digits of the MICR code specifically identify the bank (e.g.,
                  002 for State Bank of India, 240 for HDFC Bank, etc.), while
                  the first 3 digits identify the city and the last 3 digits
                  identify the specific branch. Each bank branch has its own
                  unique MICR code, which helps in routing cheques to the
                  correct branch during the clearing process.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How to find MICR code on cheque?
              </AccordionTrigger>
              <AccordionContent>
                <p>To find the MICR code on a cheque, follow these steps:</p>
                <ol className="mt-2 space-y-1 list-decimal pl-5">
                  <li>Look at the bottom portion of your cheque</li>
                  <li>
                    You'll see three groups of numbers printed in a special font
                    (slightly different from regular numbers)
                  </li>
                  <li>
                    The first group (on the left) is usually the cheque number
                  </li>
                  <li>
                    The middle group is the 9-digit MICR code (this is what
                    you're looking for)
                  </li>
                  <li>
                    The last group (on the right) is typically your account
                    number
                  </li>
                </ol>
                <p className="mt-2">
                  The MICR code is always 9 digits long in India and is printed
                  in a special font called E-13B, which is designed to be read
                  by MICR readers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How to find MICR code of SBI?</AccordionTrigger>
              <AccordionContent>
                <p>
                  You can find the MICR code of State Bank of India (SBI)
                  through several methods:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    Check the bottom of your SBI cheque leaf (the middle 9-digit
                    number)
                  </li>
                  <li>
                    Log in to your SBI online banking account and check your
                    account details
                  </li>
                  <li>
                    Check your SBI bank statement or passbook (usually printed
                    on it)
                  </li>
                  <li>Visit any SBI branch and ask a bank representative</li>
                  <li>Call SBI customer care</li>
                  <li>
                    Use our{" "}
                    <Link
                      href="https://www.ifsccodeb.com/branch"
                      className="text-blue-700 hover:underline"
                    >
                      MICR Code Finder tool
                    </Link>{" "}
                    to search for SBI MICR codes by bank name and branch name.
                  </li>
                </ul>
                <p className="mt-2">
                  SBI MICR codes always have "002" as the bank code (middle 3
                  digits). The first 3 digits represent the city code, and the
                  last 3 digits represent the specific branch code.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                MICR code consists of how many digits?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  In India, the MICR code consists of 9 digits. These 9 digits
                  are divided into three parts:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    <strong>First 3 digits:</strong> City code (identifies the
                    city where the branch is located)
                  </li>
                  <li>
                    <strong>Middle 3 digits:</strong> Bank code (identifies the
                    bank)
                  </li>
                  <li>
                    <strong>Last 3 digits:</strong> Branch code (identifies the
                    specific branch)
                  </li>
                </ul>
                <p className="mt-2">
                  It's important to note that the number of digits in MICR codes
                  can vary by country. While India uses a 9-digit format, the
                  United States uses a 9-digit format with a different
                  structure, and other countries may have their own formats.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Is MICR code necessary for online transactions?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  No, MICR code is not necessary for online transactions or
                  electronic fund transfers. For online banking transactions
                  like NEFT, RTGS, or IMPS, you need the IFSC (Indian Financial
                  System Code) of the bank branch, not the MICR code. The MICR
                  code is primarily used for processing physical cheques.
                </p>
                <p className="mt-2">
                  However, some online forms might ask for your MICR code for
                  additional verification or to maintain complete banking
                  records. In such cases, you can provide it if you know it, but
                  it's not used for processing the online transaction itself.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Can I find my MICR code without a cheque book?
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <p>
                    Yes, you can find your MICR code without a cheque book
                    through several methods:
                  </p>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    <li>
                      Check your bank statement or passbook (often printed on
                      it)
                    </li>
                    <li>
                      Log in to your online banking portal (usually available in
                      account details)
                    </li>
                    <li>Contact your bank's customer service</li>
                    <li>Visit your bank branch and ask a representative</li>
                    <li>
                      Use our{" "}
                      <Link
                        href="https://www.ifsccodeb.com/branch"
                        className="text-blue-700 hover:underline"
                      >
                        MICR Code Finder tool
                      </Link>{" "}
                      which has a comprehensive database of MICR codes for all
                      bank branches in India
                    </li>
                  </ul>
                  <p className="mt-2">
                    The MICR Code Finder tool is the most convenient option as
                    it allows you to search for MICR codes by bank name, branch
                    name, or location without needing any banking documents.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mt-12 bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Find Your Bank's MICR Code Instantly
          </h2>
          <p>
            Whether you need to find the MICR code for SBI, Union Bank of India,
            or any other bank in India, our MICR Code Finder tool makes it quick
            and easy. Having the correct MICR code is essential for smooth
            cheque processing and avoiding delays in clearance.
          </p>
          <p className="mt-4">
            Our comprehensive database includes MICR codes for all bank branches
            across India, regularly updated to ensure accuracy. Simply enter
            your bank name and branch details to instantly find the correct MICR
            code.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="https://www.ifsccodeb.com/branch">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Use Our MICR Code Finder Now
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
              The information provided in this article about MICR codes is for
              general informational purposes only. While we strive to keep the
              information up to date and accurate, we make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability, or availability
              of the information contained herein.
            </p>

            <p>
              The MICR codes of banks may change over time. We advise readers to
              contact their respective banks directly through their official
              websites or customer care for the most current information before
              taking any action based on the content of this article.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
