import { Metadata } from "next";
import IFSCLookup from "./ifsc-lookup";

export const metadata: Metadata = {
  title: "ifsc code search | Find Bank Details",
  description:
    "Enter your IFSC code to quickly find bank details including branch name, address, and more.",
  keywords:
    "IFSC, bank details, ifsc code kya hota hai, branch lookup, Indian Financial System Code, airtel payment bank ifsc code, bank of baroda ifsc code, sbi ifsc code, indian bank ifsc code, ifsc code sbi, canara bank ifsc code, india post payment bank ifsc code",
  openGraph: {
    title: "ifsc code search",
    description:
      "Enter your IFSC code to quickly find bank details including branch name, address, and more.",
    images: [
      {
        url: "https://res.cloudinary.com/dqquvmo2p/image/upload/v1737315122/ifsc_vgmhx4.webp",
        width: 1200,
        height: 630,
        alt: "ifsc code search",
      },
    ],
    url: "https://ifsccodeb.com/",
  },
};

export default function Home() {
  return <IFSCLookup />;
}
