import Image from "next/image";
import ContactImage from "../assets/Contact.png"; // Replace with your actual image path

export default function ContactUs() {
  return (
    <div className="container mx-auto px-8 py-16 flex items-center space-x-16">
      {/* Left Side - Contact Form */}
      <div className="flex-1 max-w-md">
        <h2 className="text-[48px] font-light text-gray-500 mb-8">Contact Us</h2>
        <form className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-200 rounded bg-gray-100 text-gray-700 focus:outline-none"
              style={{ height: '50px' }} // Set height equal to image height
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Phone Number *"
              className="w-full p-3 border border-gray-200 rounded bg-gray-100 text-gray-700 focus:outline-none"
              required
              style={{ height: '50px' }} // Set height equal to image height
            />
            <span className="absolute top-2 right-2 text-red-500">*</span>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="E-mail *"
              className="w-full p-3 border border-gray-200 rounded bg-gray-100 text-gray-700 focus:outline-none"
              required
              style={{ height: '50px' }} // Set height equal to image height
            />
            <span className="absolute top-2 right-2 text-red-500">*</span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Interested In"
              className="w-full p-3 border border-gray-200 rounded bg-gray-100 text-gray-700 focus:outline-none"
              style={{ height: '50px' }} // Set height equal to image height
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Message *"
              className="w-full p-3 h-28 border border-gray-200 rounded bg-gray-100 text-gray-700 focus:outline-none"
              required
            />
            <span className="absolute top-2 right-2 text-red-500">*</span>
          </div>
          <button
            type="submit"
            className="w-[221px] h-[71px] px-6 py-3 bg-black text-white font-semibold tracking-wide rounded hover:bg-gray-800 transition-all"
          >
            Send Email →
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="flex items-center justify-center">
        <Image
          src={ContactImage}
          alt="Contact Us"
          width={749}
          height={369}
          className="rounded"
        />
      </div>
    </div>
  );
}
