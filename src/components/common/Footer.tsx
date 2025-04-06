export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white h-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">BankInfo Hub</h2>
          <p className="text-gray-300 text-lg mb-2">
            Source for bank information, IFSC codes, MICR codes, and SWIFT
            codes.
          </p>
          <p className="text-justify">
            <strong>Disclaimer:</strong> We strive to provide the most accurate
            and up-to-date information available from the RBI. However, users
            are advised to verify details with the respective bank before
            relying on the information provided. The author assumes no
            responsibility for the accuracy, completeness, timeliness, or
            quality of the content. Any claims for damages resulting from the
            use of the information, whether incomplete or inaccurate, will not
            be entertained.
          </p>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-700 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} BankInfo Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
