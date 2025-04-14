import Navbar from "../../components/Navbar";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-lg mb-4">Last updated: [Insert Date]</p>
      <p className="mb-4">
        These Terms and Conditions outline the rules and regulations for the use of DMGenie&apos;s website and services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the services after any changes constitutes your acceptance of the new Terms and Conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">User Responsibilities</h2>
      <p className="mb-4">
        You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use of the services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        In no event shall DMGenie be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the services or any content therein.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Governing Law</h2>
      <p className="mb-4">
        These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of [Your Country/State].
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please contact us by e-mail at support@example.com or by mail using the details provided below:
      </p>
      <p className="mb-4">
        DMGenie<br />
        [Your Address Here]<br />
        [City, State, Zip Code]<br />
      </p>
    </div>
  );
}
