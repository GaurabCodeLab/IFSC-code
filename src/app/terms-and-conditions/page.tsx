import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | BankInfo Hub",
  description:
    "Review BankInfo Hub's terms and conditions for using our IFSC code, MICR code, and SWIFT code lookup services. Understand our disclaimer on banking information accuracy and your responsibilities.",
  keywords: [
    "terms and conditions",
    "banking information terms",
    "IFSC code lookup terms",
    "disclaimer",
    "user agreement",
    "banking data terms of use",
    "legal terms",
  ],
  alternates: {
    canonical: "https://ifsccodeb.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | BankInfo Hub",
    description:
      "Review BankInfo Hub's terms and conditions for using our banking information services.",
    url: "https://ifsccodeb.com/terms-and-conditions",
    siteName: "BankInfo Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | BankInfo Hub",
    description:
      "Review BankInfo Hub's terms and conditions for using our banking information services.",
  },
};

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <p className="mb-4 text-sm text-gray-600">
          Last Updated: April 22, 2025
        </p>

        <div className="prose max-w-none">
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and
            Conditions") carefully before using the ifsccodeb.com website (the
            "Service") operated by BankInfo Hub ("us", "we", or "our").
          </p>

          <p>
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users, and others who access or use the Service.
          </p>

          <p>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access the Service.
          </p>

          <h2>Use of Service</h2>
          <p>
            BankInfo Hub provides a service that allows users to look up banking
            information such as IFSC codes, MICR codes, and SWIFT codes. The
            information provided through our Service is for informational
            purposes only.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We strive to provide the most accurate and up-to-date information
            available from the Reserve Bank of India (RBI) and other
            authoritative sources. However, users are advised to verify details
            with the respective bank before relying on the information provided.
            The author assumes no responsibility for the accuracy, completeness,
            timeliness, or quality of the content. Any claims for damages
            resulting from the use of the information, whether incomplete or
            inaccurate, will not be entertained.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of BankInfo Hub and its
            licensors. The Service is protected by copyright, trademark, and
            other laws of both India and foreign countries. Our trademarks and
            trade dress may not be used in connection with any product or
            service without the prior written consent of BankInfo Hub.
          </p>

          <h2>User Content</h2>
          <p>
            Our Service may allow you to post, link, store, share and otherwise
            make available certain information, text, graphics, or other
            material. You are responsible for the content that you post to the
            Service, including its legality, reliability, and appropriateness.
          </p>

          <h2>Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by BankInfo Hub.
          </p>
          <p>
            BankInfo Hub has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third-party web
            sites or services. You further acknowledge and agree that BankInfo
            Hub shall not be responsible or liable, directly or indirectly, for
            any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods,
            or services available on or through any such web sites or services.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall BankInfo Hub, nor its directors, employees,
            partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from:
          </p>
          <ol>
            <li>
              Your access to or use of or inability to access or use the
              Service;
            </li>
            <li>Any conduct or content of any third party on the Service;</li>
            <li>Any content obtained from the Service; and</li>
            <li>
              Unauthorized access, use, or alteration of your transmissions or
              content, whether based on warranty, contract, tort (including
              negligence), or any other legal theory, whether or not we have
              been informed of the possibility of such damage.
            </li>
          </ol>

          <h2>Disclaimer</h2>
          <p>
            Your use of the Service is at your sole risk. The Service is
            provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
            provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement,
            or course of performance.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of India, without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. If any provision of
            these Terms is held to be invalid or unenforceable by a court, the
            remaining provisions of these Terms will remain in effect.
          </p>

          <h2>Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will try to
            provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after those revisions
            become effective, you agree to be bound by the revised terms. If you
            do not agree to the new terms, please stop using the Service.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul>
            <li>By email: kumargaurab56@gmail.com</li>
            <li>
              By visiting our{" "}
              <Link
                href="/contact-us"
                className="text-blue-600 hover:underline"
              >
                Contact Us
              </Link>{" "}
              page
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
