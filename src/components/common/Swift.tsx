import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Swift = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>What is a SWIFT code?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          SWIFT (Society for Worldwide Interbank Financial Telecommunication)
          code, also known as BIC (Bank Identifier Code), is a unique
          identification code for banks and financial institutions worldwide.
        </p>
        <p className="mb-2">
          <strong>Format:</strong> AAAABBCCXXX
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>First 4 characters (AAAA): Bank code</li>
          <li>Next 2 characters (BB): Country code</li>
          <li>Next 2 characters (CC): Location code</li>
          <li>Last 3 characters (XXX): Branch code (optional)</li>
        </ul>
        <p>
          <strong>Example:</strong> HDFCINBBHYD (
          <strong>hdfc bank swift code</strong>, Hyderabad)
        </p>
        <p className="mt-4">
          SWIFT codes are essential for international wire transfers and help
          ensure that funds are sent to the correct bank and account.
        </p>
      </CardContent>
    </Card>
  );
};

export default Swift;
