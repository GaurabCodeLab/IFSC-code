import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 p-6 text-white">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-blue-100">Last Updated: April 22, 2025</p>
        </div>

        <div className="p-6 sm:p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-sm text-gray-500 border-b pb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                This policy explains how BankInfo Hub collects, uses, and
                protects your information
              </span>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy describes how BankInfo Hub ("we," "us," or
                "our") collects, uses, and shares your personal information when
                you visit or use our website ifsccodeb.com (the "Site"). We
                respect your privacy and are committed to protecting your
                personal data.
              </p>
            </section>

            <section className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Personal Information
                  </h3>
                  <p className="text-gray-600 mt-1">
                    We may collect the following types of personal information:
                  </p>
                  <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
                    <li>
                      Contact information (such as name and email address) when
                      you submit a contact form
                    </li>
                    <li>
                      Usage data (such as IFSC codes, MICR codes, or SWIFT codes
                      you search for)
                    </li>
                    <li>Device and browser information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Banking Information Searches
                  </h3>
                  <p className="text-gray-600 mt-1">
                    When you use our IFSC code, MICR code, or SWIFT code lookup
                    services, we collect the search terms you enter to provide
                    you with the relevant banking information. We do not collect
                    or store any of your personal banking details, account
                    numbers, or financial information through these searches.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-3">
                We use the information we collect to:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Provide, operate, and maintain our website
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Improve, personalize, and expand our website
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Understand and analyze how you use our website
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Develop new products, services, features, and
                        functionality
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Communicate with you and respond to your inquiries
                      </span>
                    </li>

                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Send you technical notices, updates, and support
                        messages
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">
                        Find and prevent fraud
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 mb-3">
                We use cookies and similar tracking technologies to track
                activity on our Site and hold certain information. Cookies are
                files with a small amount of data that may include an anonymous
                unique identifier.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Essential cookies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Necessary for the basic function of the website.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Analytical/performance cookies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Allow us to recognize and count the number of visitors and
                    see how visitors move around our website.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Functionality cookies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Used to recognize you when you return to our website.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Targeting cookies
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Record your visit to our website, the pages you have
                    visited, and the links you have followed.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Google AdSense & Analytics
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-gray-700">
                  We may use Google AdSense to serve ads on our Site and Google
                  Analytics to analyze the use of our website. Google may use
                  cookies to personalize the advertisements and to track your
                  visits to our Site and other websites. Google's use of
                  advertising cookies enables it and its partners to serve ads
                  based on your visit to our Site and/or other sites on the
                  Internet.
                </p>
              </div>
              <p className="text-gray-600">
                You can opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Google Ads Settings
                </a>
                .
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Data Retention
                </h2>
                <p className="text-gray-600">
                  We will retain your personal information only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use your information to the extent
                  necessary to comply with our legal obligations, resolve
                  disputes, and enforce our policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Data Security
                </h2>
                <p className="text-gray-600">
                  We have implemented appropriate technical and organizational
                  security measures designed to protect the security of any
                  personal information we process. However, please also remember
                  that we cannot guarantee that the Internet itself is 100%
                  secure.
                </p>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 mb-3">
                Depending on your location, you may have certain rights
                regarding your personal information, such as:
              </p>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  <li className="p-4 hover:bg-gray-50">
                    <span className="text-gray-700">
                      The right to access the personal information we hold about
                      you
                    </span>
                  </li>
                  <li className="p-4 hover:bg-gray-50">
                    <span className="text-gray-700">
                      The right to request correction or deletion of your
                      personal information
                    </span>
                  </li>
                  <li className="p-4 hover:bg-gray-50">
                    <span className="text-gray-700">
                      The right to restrict or object to our processing of your
                      personal information
                    </span>
                  </li>
                  <li className="p-4 hover:bg-gray-50">
                    <span className="text-gray-700">
                      The right to data portability
                    </span>
                  </li>
                  <li className="p-4 hover:bg-gray-50">
                    <span className="text-gray-700">
                      The right to withdraw consent at any time, where we rely
                      on consent to process your personal information
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="bg-gray-50 p-5 rounded-lg border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-3">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-white p-4 rounded-md border border-gray-200">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-700 font-medium">By email:</span>
                  </div>
                  <p className="mt-1 text-gray-600 ml-7">
                    kumargaurab56@gmail.com
                  </p>
                </div>
                <div className="flex-1 bg-white p-4 rounded-md border border-gray-200">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                    <span className="text-gray-700 font-medium">
                      By contact form:
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600 ml-7">
                    <Link
                      href="/contact-us"
                      className="text-blue-600 hover:underline"
                    >
                      Visit our Contact Us page
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
