import Navbar from "../../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg mb-4">
        Last updated: 14-4-2025
      </p>
      <p className="mb-4">
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from DMGenie (the "Site").
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect in various ways, including to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Communicate with you;</li>
        <li>Screen our orders for potential risk or fraud;</li>
        <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services;</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Sharing Your Personal Information</h2>
      <p className="mb-4">
        We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here: <a href="https://www.shopify.com/legal/privacy" className="text-blue-600 hover:underline">https://www.shopify.com/legal/privacy</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">
        If you are a European resident, you have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at support@example.com or by mail using the details provided below:
      </p>
      <p className="mb-4">
        DMGenie<br />
        [Your Address Here]<br />
        [City, State, Zip Code]<br />
      </p>
    </div>
  );
}
