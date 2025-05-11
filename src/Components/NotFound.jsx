import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { BiErrorCircle } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiLoader } from "react-icons/fi";

const NotFound = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    // Set up countdown timer
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
        }
        return prevCount - 1;
      });
    }, 1000);

    // Set up redirect after 5 seconds
    const redirectTimer = setTimeout(() => {
      if (isRedirecting) {
        navigate("/");
      }
    }, 5000);

    // Clean up timers on component unmount
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate, isRedirecting]);

  // Cancel auto-redirect
  const cancelRedirect = () => {
    setIsRedirecting(false);
  };

  // Get the current URL path for display
  const currentPath = window.location.pathname;

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-lg p-8 rounded-xl shadow-lg text-center ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <BiErrorCircle
          className={`mx-auto text-8xl mb-6 ${
            isDarkMode ? "text-red-500" : "text-red-600"
          }`}
        />

        <h1 className="text-5xl font-bold mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>

        <p className={`mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          The page <span className="font-mono font-medium">{currentPath}</span>{" "}
          doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link
            to="/"
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
              isDarkMode
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
            onClick={() => setIsRedirecting(false)}
          >
            <FaHome className="text-lg" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => {
              window.history.back();
              setIsRedirecting(false);
            }}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            <IoMdArrowRoundBack className="text-lg" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Countdown and redirect message */}
        {isRedirecting && countdown > 0 ? (
          <div className="relative">
            <div className="flex items-center justify-center gap-3 mt-2 mb-2">
              <FiLoader
                className={`animate-spin text-xl ${
                  isDarkMode ? "text-red-400" : "text-red-500"
                }`}
              />
              <p
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Redirecting to home page in {countdown} second
                {countdown !== 1 ? "s" : ""}...
              </p>
            </div>
            <button
              onClick={cancelRedirect}
              className={`text-xs underline ${
                isDarkMode
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Cancel redirect
            </button>
          </div>
        ) : !isRedirecting ? (
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Auto-redirect canceled
          </p>
        ) : null}
      </div>

      <div className="mt-8 text-center">
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Need help? Visit our{" "}
          <Link
            to="/help"
            className={`font-medium hover:underline ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
            onClick={() => setIsRedirecting(false)}
          >
            Help Center
          </Link>{" "}
          or{" "}
          <Link
            to="/contact"
            className={`font-medium hover:underline ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
            onClick={() => setIsRedirecting(false)}
          >
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
