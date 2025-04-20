import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function IfscCode() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose lg:prose-xl dark:prose-invert max-w-none">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          SBI IFSC Code: Complete Guide to State Bank of India Branch Codes
        </h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span>Published: April 14, 2025</span>
          <span>•</span>
          <span>Last Updated: April 14, 2025</span>
        </div>

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1744723079/sbi2_kqtxcr.avif"
            alt="SBI IFSC Code - State Bank of India Branch Codes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
            SBI IFSC codes are essential for all electronic fund transfers with
            State Bank of India
          </div>
        </div>

        <div className="bg-muted p-5 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">
            What is the IFSC code in SBI?
          </h2>
          <p className="text-lg">
            The IFSC code in SBI (State Bank of India) is an 11-character
            alphanumeric code that uniquely identifies a specific SBI branch.
            All SBI IFSC codes start with 'SBIN' followed by a '0' and then 6
            more characters unique to each branch. This code is essential for
            NEFT, RTGS, and IMPS transactions to ensure your money reaches the
            correct SBI branch.
          </p>
        </div>

        <p className="lead text-lg font-medium">
          Whether you're sending money to a family member, receiving your
          salary, or making a business payment through State Bank of India,
          you'll need the correct SBI IFSC code. This comprehensive guide
          explains everything you need to know about SBI IFSC codes, how to find
          them, and why they're crucial for your banking transactions.
        </p>

        <div className="bg-muted p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li>
              <a
                href="#understanding-sbi-ifsc"
                className="text-blue-600 hover:underline"
              >
                Understanding SBI IFSC Code Structure
              </a>
            </li>
            <li>
              <a href="#how-to-find" className="text-blue-600 hover:underline">
                How to Find SBI IFSC Code
              </a>
            </li>
            <li>
              <a
                href="#major-branches"
                className="text-blue-600 hover:underline"
              >
                IFSC Codes for Major SBI Branches
              </a>
            </li>
            <li>
              <a href="#sbi-yono" className="text-blue-600 hover:underline">
                Finding IFSC Code in SBI YONO App
              </a>
            </li>
            <li>
              <a
                href="#sbi-netbanking"
                className="text-blue-600 hover:underline"
              >
                Finding IFSC Code in SBI Net Banking
              </a>
            </li>
            <li>
              <a href="#faqs" className="text-blue-600 hover:underline">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        <section id="understanding-sbi-ifsc">
          <h2 className="text-2xl font-bold mb-4">
            Understanding SBI IFSC Code Structure
          </h2>
          <p>
            Every SBI IFSC code follows a specific structure that provides
            information about the bank and its branch. Understanding this
            structure can help you verify if an SBI IFSC code is correct.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1744725025/sbi3_wyspux.png"
                alt="SBI IFSC Code Structure"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                SBI IFSC Code Format
              </h3>
              <p className="mb-3">
                All SBI IFSC codes are 11 characters long and follow this
                format:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>First 4 characters:</strong> SBIN (identifies State
                  Bank of India)
                </li>
                <li>
                  <strong>5th character:</strong> 0 (zero, reserved for future
                  use)
                </li>
                <li>
                  <strong>Last 6 characters:</strong> Unique branch code
                  (identifies the specific branch)
                </li>
              </ul>
              <p className="mt-3 text-sm">
                For example, the SBI IFSC code SBIN0000691 represents the State
                Bank of India's New Delhi Main Branch.
              </p>
            </div>
          </div>

          <div className="bg-primary/10 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-3">
              Why SBI IFSC Codes Are Important
            </h3>
            <ul className="space-y-2">
              <li>
                Essential for all electronic fund transfers (NEFT, RTGS, IMPS)
              </li>
              <li>Ensures your money reaches the correct SBI branch</li>
              <li>
                Required for setting up direct deposits like salary or pension
              </li>
              <li>Needed for tax refunds and government benefit transfers</li>
              <li>Used for UPI registration and payments</li>
              <li>Required when linking accounts to payment apps</li>
            </ul>
          </div>

          <p>
            Fund transfers may be delayed or transactions may fail if the SBI
            IFSC code is entered incorrectly. Always double-check the IFSC code
            before initiating any transaction with State Bank of India.
          </p>
        </section>

        <section id="how-to-find" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">How to Find SBI IFSC Code</h2>
          <p>
            If you're wondering "how to check IFSC code in SBI" or "what is IFSC
            code of SBI" for your branch, there are several reliable methods to
            find this information:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Official Sources</h3>
              <ul className="space-y-2">
                <li>SBI passbook (printed on the first few pages)</li>
                <li>SBI cheque book (printed on cheque leaves)</li>
                <li>SBI bank statements (usually in the header or footer)</li>
                <li>SBI official website (branch locator section)</li>
                <li>
                  Visiting your SBI branch and asking a bank representative
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Digital Methods</h3>
              <ul className="space-y-2">
                <li>SBI YONO app (under profile or account information)</li>
                <li>SBI Net Banking (account details section)</li>
                <li>SBI SMS Banking (send SMS to specific number)</li>
                <li>
                  <Link
                    href="https://www.ifsccodeb.com/branch"
                    className="text-blue-600 hover:underline"
                  >
                    Our SBI IFSC Code Finder tool
                  </Link>{" "}
                  - search by branch name or location
                </li>
                <li>
                  RBI website (maintains a database of all bank IFSC codes)
                </li>
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
              Important Note
            </h3>
            <p>
              When searching for an SBI IFSC code, always ensure you're using
              the code for the specific branch where your account is maintained.
              Using the IFSC code of a different SBI branch, even if it's in the
              same city, can lead to transaction failures or delays.
            </p>
          </div>
        </section>

        <section id="major-branches" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            IFSC Codes for Major SBI Branches
          </h2>
          <p>
            The IFSC codes for a few of the largest State Bank of India branches
            nationwide are listed below. These are particularly useful if you're
            looking for the SBI main branch IFSC code in major cities:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-transparent">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left">City</th>
                  <th className="py-2 px-4 text-left">Branch</th>
                  <th className="py-2 px-4 text-left">SBI IFSC Code</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">New Delhi</td>
                  <td className="py-2 px-4">Main Branch</td>
                  <td className="py-2 px-4 font-mono">SBIN0000691</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Mumbai</td>
                  <td className="py-2 px-4">Main Branch</td>
                  <td className="py-2 px-4 font-mono">SBIN0000300</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Kolkata</td>
                  <td className="py-2 px-4">Main Branch</td>
                  <td className="py-2 px-4 font-mono">SBIN0000001</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Chennai</td>
                  <td className="py-2 px-4">Main Branch</td>
                  <td className="py-2 px-4 font-mono">SBIN0000800</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Bangalore</td>
                  <td className="py-2 px-4">Main Branch</td>
                  <td className="py-2 px-4 font-mono">SBIN0000813</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Find Your SBI Branch IFSC Code
            </h3>
            <p>
              The table above only lists a few major SBI branches. To find the
              IFSC code for your specific SBI branch, use our{" "}
              <Link
                href="https://www.ifsccodeb.com/branch"
                className="text-blue-600 hover:underline"
              >
                SBI IFSC Code Finder tool
              </Link>
              . Simply enter your bank name and branch name to get the correct
              IFSC code.
            </p>
          </div>
        </section>

        <section id="sbi-yono" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            How to Check IFSC Code in SBI YONO App
          </h2>
          <p>
            The SBI YONO app provides a convenient way to find your account's
            IFSC code. If you're wondering "how to check IFSC code in SBI YONO
            app," follow these simple steps:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Steps to Find IFSC Code in YONO App
              </h3>
              <ol className="space-y-3 list-decimal pl-5">
                <li>Open the SBI YONO application on your mobile phone</li>
                <li>Log in using your credentials</li>
                <li>Tap on the "Dashboard" or "Home" section</li>
                <li>Select the account for which you need the IFSC code</li>
                <li>Tap on "Account Details" or "View Details"</li>
                <li>
                  You'll find the IFSC code listed along with other account
                  information like account number and branch name
                </li>
              </ol>
            </div>
            <div className="relative h-[380px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1744727817/sbiyono_atkddr.png"
                alt="Finding IFSC Code in SBI YONO App"
                fill
                className=""
              />
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
              YONO App Tip
            </h3>
            <p>
              You can also share your account details including the IFSC code
              directly from the YONO app. After viewing your account details,
              look for the "Share" option, which allows you to send the
              information via WhatsApp, email, or other messaging apps.
            </p>
          </div>
        </section>

        <section id="sbi-netbanking" className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            How to Use SBI Net Banking to Find the IFSC Code
          </h2>
          <p>
            If you're wondering "where to check IFSC code in SBI online banking"
            or "how to find IFSC code in SBI net banking," follow these steps:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dqquvmo2p/image/upload/v1744728267/sbi5_wuaftk.webp"
                alt="Finding IFSC Code in SBI Net Banking"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Steps to Find IFSC Code in Net Banking
              </h3>
              <ol className="space-y-3 list-decimal pl-5">
                <li>Log in to your SBI Net Banking account</li>
                <li>Go to the "Accounts Summary" section</li>
                <li>
                  Click on the account number for which you need the IFSC code
                </li>
                <li>Select "Account Statement" or "Account Details"</li>
                <li>
                  The IFSC code will be displayed along with other account
                  information like branch name and address
                </li>
              </ol>
              <p className="mt-3 text-sm">
                Alternatively, you can also check the IFSC code in the "Profile"
                section under "Personal Details" or "Account Details."
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-6 rounded-lg my-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">
              Other Digital Methods to Find SBI IFSC Code
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">SBI SMS Banking</h4>
                <p className="text-sm">
                  Send an SMS with the text "IFSC BRANCH_NAME" to 09223488888
                  from your registered mobile number. For example, "IFSC MUMBAI
                  MAIN".
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">SBI Missed Call Banking</h4>
                <p className="text-sm">
                  Give a missed call to 09223766666 from your registered mobile
                  number. You'll receive an SMS with your account details
                  including the IFSC code.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">SBI Quick App</h4>
                <p className="text-sm">
                  Download the SBI Quick app, fill out the account information
                  form, then visit the account information section to find your
                  IFSC code.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">SBI Official Website</h4>
                <p className="text-sm">
                  Visit the SBI website, go to the "Locate Us" section, search
                  for your branch, and find the IFSC code in the branch details.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="mt-10">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions About SBI IFSC Codes
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is IFSC code of SBI?</AccordionTrigger>
              <AccordionContent>
                <p>
                  The IFSC code of SBI (State Bank of India) is a unique
                  11-character code that identifies a specific SBI branch. All
                  SBI IFSC codes start with "SBIN" followed by a 0 and then 6
                  more characters that identify the specific branch. For
                  example, the IFSC code for SBI's New Delhi Main Branch is
                  SBIN0000691. Each SBI branch has its own unique IFSC code, so
                  there isn't a single IFSC code for the entire bank. You need
                  to use the specific IFSC code of the branch where your account
                  is maintained for any electronic fund transfers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How to check IFSC code in SBI?
              </AccordionTrigger>
              <AccordionContent>
                <p>You can check your SBI IFSC code through several methods:</p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    Check your SBI passbook or bank statement (usually printed
                    on it)
                  </li>
                  <li>
                    Look at your SBI cheque book (printed on cheque leaves)
                  </li>
                  <li>
                    Find your account details by logging into SBI Net Banking.
                  </li>
                  <li>
                    To access your account details and IFSC code, use the SBI
                    YONO app.
                  </li>
                  <li>Send an SMS with "IFSC BRANCH_NAME" to 09223488888</li>
                  <li>Visit any SBI branch and ask a bank representative</li>
                  <li>
                    Use our{" "}
                    <Link
                      href="https://www.ifsccodeb.com/branch"
                      className="text-blue-600 hover:underline"
                    >
                      SBI IFSC Code Finder tool
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                How to check IFSC code in SBI YONO app?
              </AccordionTrigger>
              <AccordionContent>
                <p>To find out IFSC code in the SBI YONO application:</p>
                <ol className="mt-2 space-y-1 list-decimal pl-5">
                  <li>Log in to SBI YONO app</li>
                  <li>Go to the Dashboard or Home section</li>
                  <li>Select the account for which you need the IFSC code</li>
                  <li>Tap on "Account Details" or "View Details"</li>
                  <li>
                    You'll find the IFSC code listed along with other account
                    information like account number and branch name
                  </li>
                </ol>
                <p className="mt-2">
                  You can also share this information directly from the app
                  using the "Share" option, which allows you to send the details
                  via WhatsApp, email, or other messaging apps.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Where to check IFSC code in SBI online banking?
              </AccordionTrigger>
              <AccordionContent>
                <p>Method to find out IFSC code in SBI online net banking:</p>
                <ol className="mt-2 space-y-1 list-decimal pl-5">
                  <li>Log in to your SBI Net Banking account</li>
                  <li>Go to the "Accounts Summary" section</li>
                  <li>
                    Click on the account number for which you need the IFSC code
                  </li>
                  <li>Select "Account Statement" or "Account Details"</li>
                  <li>
                    The IFSC code will be displayed along with other account
                    information like branch name and address
                  </li>
                </ol>
                <p className="mt-2">
                  Alternatively, you can also check the "Profile" section under
                  "Personal Details" or "Account Details" to find your IFSC
                  code.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                How to find IFSC code in SBI net banking?
              </AccordionTrigger>
              <AccordionContent>
                <p>Method to find out IFSC code in SBI online net banking:</p>
                <ol className="mt-2 space-y-1 list-decimal pl-5">
                  <li>
                    Log in to your SBI Net Banking account using your username
                    and password
                  </li>
                  <li>
                    After successful login, click on "Accounts Summary" from the
                    top menu
                  </li>
                  <li>
                    You'll see a list of all your accounts. Click on the
                    specific account number
                  </li>
                  <li>
                    On the account details page, you'll find various information
                    including your IFSC code, usually displayed prominently
                  </li>
                  <li>
                    If not immediately visible, check under "Branch Details" or
                    "Account Information" sections
                  </li>
                </ol>
                <p className="mt-2">
                  The IFSC code is an important piece of information that SBI
                  makes readily available in your net banking portal to
                  facilitate smooth electronic transfers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Is the SBI IFSC code the same for all branches?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  No, the SBI IFSC code is not the same for all branches of a
                  particular bank. Each State Bank of India branch has its own
                  unique IFSC code. While all SBI IFSC codes start with "SBIN0"
                  (SBIN followed by a zero), the last 6 characters are unique to
                  each branch.
                </p>
                <p className="mt-2">
                  For example, the IFSC code for SBI's New Delhi Main Branch is
                  SBIN0000691, while the IFSC code for SBI's Mumbai Main Branch
                  is SBIN0000300. Using the correct branch-specific IFSC code is
                  crucial for ensuring that your money reaches the right
                  destination during electronic fund transfers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                What is SBI main branch IFSC code?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  SBI main branch IFSC codes vary by city as each main branch
                  has its own unique code. Here are the IFSC codes for some
                  major SBI main branches across India:
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>
                    <strong>Mumbai Main Branch:</strong> SBIN0000300
                  </li>
                  <li>
                    <strong>New Delhi Main Branch:</strong> SBIN0000691
                  </li>
                  <li>
                    <strong>Kolkata Main Branch:</strong> SBIN0000001
                  </li>
                  <li>
                    <strong>Chennai Main Branch:</strong> SBIN0000800
                  </li>
                  <li>
                    <strong>Bangalore Main Branch:</strong> SBIN0000813
                  </li>
                </ul>
                <p className="mt-2">
                  If you're looking for the IFSC code of a specific SBI main
                  branch not listed here, you can use our{" "}
                  <Link
                    href="https://www.ifsccodeb.com/branch"
                    className="text-blue-600 hover:underline"
                  >
                    SBI IFSC Code Finder tool
                  </Link>{" "}
                  to find the exact code.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mt-12 bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">
            Find Your SBI IFSC Code Instantly
          </h2>
          <p>
            Having the correct SBI IFSC code is essential for smooth and
            error-free banking transactions. Whether you're sending money to
            family, receiving your salary, or making business payments, using
            the right IFSC code ensures your funds reach the intended
            destination without delays.
          </p>
          <p className="mt-4">
            Our comprehensive SBI IFSC Code Finder tool makes it quick and easy
            to find the correct IFSC code for any State Bank of India branch
            across the country. Simply enter your bank name and branch name, and
            get instant access to the accurate IFSC code along with other branch
            details.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="https://www.ifsccodeb.com/branch">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Use Our SBI IFSC Code Finder Now
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
              The details shared in this article regarding SBI IFSC codes are
              intended solely for general informational use. Although we aim to
              ensure the content remains current and correct, we do not make any
              guarantees or assurances—either explicit or implied—about the
              accuracy, reliability, completeness, or suitability of the
              information provided.
            </p>

            <p>
              This website is independently operated and is not associated with,
              authorized by, or officially linked to the State Bank of India.
              For official information, please visit the State Bank of India's
              website at{" "}
              <a
                href="https://www.onlinesbi.sbi/"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.onlinesbi.com
              </a>
              .
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
