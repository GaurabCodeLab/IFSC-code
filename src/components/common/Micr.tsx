import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Micr = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What is MICR code?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          MICR (Magnetic Ink Character Recognition) code is a 9-digit code that
          uniquely identifies a bank branch in India. It's primarily used for
          processing cheques and other documents.
        </p>
        <p className="mb-2">
          <strong>Format:</strong> CCCBBBSSS
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>First 3 digits (CCC): City code</li>
          <li>Next 3 digits (BBB): Bank code</li>
          <li>Last 3 digits (SSS): Branch code</li>
        </ul>
        <p>
          <strong>Example:</strong> 248026002 (
          <strong>union bank micr code</strong> ,Branch-Dehradun)
        </p>
        <p className="mt-4">
          MICR codes are printed on cheques using special magnetic ink, allowing
          for quick and accurate processing of financial documents.
        </p>
      </CardContent>
    </Card>
  );
};

export default Micr;
