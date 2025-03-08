import { Metadata } from "next";
import MICRlOOKUP from "./micr-lookup";

export const metadata: Metadata = {
  title: "MICR code search | Find Bank Details",
  description:
    "Enter your MICR code to quickly find bank details including branch name, address, and more.",
  keywords:
    "micr code, micr code on cheque, micr code in cheque, what is micr code, micr code of bank, micr code means, micr code sbi, sbi micr code, union bank micr code, bank micr code, indian bank micr code, hdfc micr code, bank of baroda micr code",
  openGraph: {
    title: "MICR code search",
    description:
      "Enter your MICR code to quickly find bank details including branch name, address, and more.",
    images: [
      {
        url: "https://res.cloudinary.com/dqquvmo2p/image/upload/v1733173292/DALL_E_2024-12-03_02.28.06_-_A_user-friendly_and_simple_illustration_for_a_blog_about_MICR_codes_in_banking._The_image_features_a_magnifying_glass_hovering_over_a_cheque_clearly_r5evzq.webp",
        width: 1200,
        height: 630,
        alt: "MICR code search",
      },
    ],
    url: "https://ifsccodeb.com/micr",
  },
};

export default function Home() {
  return <MICRlOOKUP />;
}
