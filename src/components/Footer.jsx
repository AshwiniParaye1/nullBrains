//src/components/Footer.jsx

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <a
              href="#"
              className="text-gray-400 font-light  hover:text-gray-700"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 font-light hover:text-gray-700"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-400 font-light hover:text-gray-700"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-400 font-light hover:text-gray-700"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-400 font-light hover:text-gray-700"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-400 font-light hover:text-gray-700"
            >
              Terms
            </a>
          </nav>

          <div className="flex gap-6 mb-8">
            <a
              href="#"
              className="text-gray-400 font-light hover:text-gray-600"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 font-light hover:text-gray-600"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 font-light hover:text-gray-600"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 font-light hover:text-gray-600"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 font-light hover:text-gray-600"
            >
              <FaDribbble size={20} />
            </a>
          </div>

          <p className="text-gray-400 font-light text-sm">
            © 2021 SomeCompany, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
