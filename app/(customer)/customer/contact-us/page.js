
export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4">We&apos;d love to hear from you!</p>
      <p className="mb-4">
        If you have any questions, concerns, or feedback, please feel free to reach out to us using the contact information below.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Email</h2>
      <p className="mb-4">
        You can contact us via email at: 
        <a href="mailto:support@example.com" className="text-blue-600 hover:underline"> support@example.com</a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Phone</h2>
      <p className="mb-4">
        For immediate assistance, you can reach us at: 
        <span className="font-bold"> +1 (123) 456-7890</span>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Address</h2>
      <p className="mb-4">
        You can also reach us by mail at:
      </p>
      <p className="mb-4">
        DMGenie<br />
        [Your Address Here]<br />
        [City, State, Zip Code]<br />
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Feedback Form</h2>
      <p className="mb-4">
        Alternatively, you can fill out our feedback form below:
      </p>
      <form className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="border border-gray-300 p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="border border-gray-300 p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea id="message" className="border border-gray-300 p-2 w-full" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
      </form>
    </div>
  );
}
