import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Ifsc = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What is an IFSC code?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          IFSC (Indian Financial System Code) is an 11-character code that
          uniquely identifies a bank branch in India. It's used for electronic
          funds transfers and is essential for NEFT, RTGS, and IMPS
          transactions.
        </p>
        <p className="mb-2">
          <strong>Format:</strong> AAAABCCXXX
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>First 4 characters (AAAA): Bank code</li>
          <li>5th character (B): 0 (zero)</li>
          <li>Last 6 characters (CCXXX): Branch code</li>
        </ul>
        <p>
          <strong>Example:</strong> AIRP0000001 (
          <strong>airtel payment bank ifsc code</strong>)
        </p>
        <p>
          The IFSC (Indian Financial System Code) uniquely identifies bank
          branches for electronic payments in India, ensuring secure
          transactions.
        </p>
      </CardContent>
    </Card>
  );
};

export default Ifsc;
