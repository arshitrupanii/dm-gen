
export default function CancellationAndRefund() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4">Cancellation and Refund Policy</h1>
      <p className="text-lg mb-4">Last updated: [Insert Date]</p>
      <p className="mb-4">
        This Cancellation and Refund Policy outlines the terms under which customers can cancel their orders and request refunds for purchases made through DMGenie (the &apos;Site&apos;).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Cancellation Policy</h2>
      <p className="mb-4">
        Customers may cancel their orders within 24 hours of purchase for a full refund. To cancel your order, please contact our support team at support@example.com with your order details.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Refund Policy</h2>
      <p className="mb-4">
        Refunds will be processed within 7-10 business days after the cancellation request is approved. Refunds will be issued to the original payment method used during the purchase.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Non-Refundable Items</h2>
      <p className="mb-4">
        Certain items may be non-refundable, including but not limited to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Digital products that have been downloaded;</li>
        <li>Services that have been fully rendered;</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our Cancellation and Refund Policy, please contact us by e-mail at support@example.com or by mail using the details provided below:
      </p>
      <p className="mb-4">
        DMGenie<br />
        [Your Address Here]<br />
        [City, State, Zip Code]<br />
      </p>
    </div>
  );
}
