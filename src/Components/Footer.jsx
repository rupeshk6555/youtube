import React from "react";
import { useTheme } from "../ThemeContext";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "About", path: "/about" },
    { title: "Press", path: "/press" },
    { title: "Copyright", path: "/copyright" },
    { title: "Contact", path: "/contact" },
    { title: "Creators", path: "/creators" },
    { title: "Advertise", path: "/advertise" },
    { title: "Developers", path: "/developers" },
  ];

  const legalLinks = [
    { title: "Terms", path: "/terms" },
    { title: "Privacy", path: "/privacy" },
    { title: "Policy & Safety", path: "/policy" },
    { title: "How YouTube works", path: "/how-youtube-works" },
    { title: "Test new features", path: "/test-new-features" },
  ];

  return (
    <footer
      className={`w-full py-8 px-4 md:px-8 mt-10 border-t ${
        isDarkMode
          ? "bg-gray-900 text-gray-300 border-gray-700"
          : "bg-gray-50 text-gray-700 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top section with links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Product Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <FaYoutube className="mr-2 text-red-600" size={24} />
              <span>VideoHub</span>
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={`text-sm hover:underline ${
                      isDarkMode ? "hover:text-white" : "hover:text-gray-900"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={`text-sm hover:underline ${
                      isDarkMode ? "hover:text-white" : "hover:text-gray-900"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/rupeshk6555"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-gray-900 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600"
                }`}
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-600 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-600"
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-400 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-blue-300"
                    : "text-gray-600"
                }`}
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-pink-600 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-pink-400"
                    : "text-gray-600"
                }`}
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className={`px-4 py-2 text-sm rounded-l-md w-full outline-none ${
                  isDarkMode
                    ? "bg-gray-800 text-white border border-gray-700 focus:border-gray-500"
                    : "bg-white text-gray-800 border border-gray-300 focus:border-gray-400"
                }`}
              />
              <button
                className={`px-4 py-2 rounded-r-md text-white font-medium text-sm ${
                  isDarkMode
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          } my-6`}
        ></div>

        {/* Bottom section with copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <MdCopyright className="mr-1" />
            <p className="text-sm">
              {currentYear} VideoHub by{" "}
              <a
                href="https://github.com/rupeshk6555"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium hover:underline ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                Rupesh Kumar
              </a>
            </p>
          </div>
          <div className="flex space-x-4 text-sm">
            <select
              className={`text-sm rounded px-2 py-1 ${
                isDarkMode
                  ? "bg-gray-800 text-white border border-gray-700"
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
            >
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="hi">हिन्दी</option>
            </select>
            <select
              className={`text-sm rounded px-2 py-1 ${
                isDarkMode
                  ? "bg-gray-800 text-white border border-gray-700"
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
            >
              <option value="us">United States</option>
              <option value="in">India</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
