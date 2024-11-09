// components/Footer.tsx
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from "../assets/FooterLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div className="flex flex-col items-center md:items-start">
          <Image
            alt="Digital Project"
            src={Logo.src}
            style={{ color: 'white' }}
            className="text-2xl font-bold"
            width={145}
            height={94}
          />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold mb-4">Information</h2>
          <ul>
            <li className="mb-6">Main</li>
            <li className="mb-6">Gallery</li>
            <li className="mb-6">Projects</li>
            <li className="mb-6">Certifications</li>
            <li className="mb-6">Contacts</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="font-semibold">Contacts</h2>
          <div className="flex items-center space-x-2 mb-6">
            <FaHome className="text-white" />
            <div>
              <p>1234 Sample Street</p>
              <p>Austin Texas 78704</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-6">
            <FaPhone className="text-white" />
            <p>512.333.2222</p>
          </div>
          <div className="flex items-center space-x-2 mb-6">
            <FaEnvelope className="text-white" />
            <p>sampleemail@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="font-semibold mb-4">Social Media</h2>
          <div className="flex space-x-8">
            <FaFacebook className="text-white text-lg hover:text-gray-400" />
            <FaTwitter className="text-white text-lg  hover:text-gray-400" />
            <FaLinkedin className="text-white text-lg  hover:text-gray-400" />
            <FaPinterest className="text-white text-lg  hover:text-gray-400" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; 2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
