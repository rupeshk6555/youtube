import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import Avatar from "react-avatar";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setCategory, toggleSlider } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext"; // Import useTheme for dark mode
import { FaMoon, FaSun } from "react-icons/fa"; // Import dark and light mode icons

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use ThemeContext

  const toggleHandler = () => {
    dispatch(toggleSlider());
  };

  const searchVideo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(setCategory(input)); // Optional: If you want to store the search term in Redux
      setInput("");

      // Navigate to home with search query
      navigate(`/?search=${encodeURIComponent(input)}`);
    }
  };

  useEffect(() => {
    // Update the HTML data attribute for dark mode
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return (
    <div
      className={`flex fixed top-0 justify-center items-center w-[100%] z-10 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex w-[96%] py-3 justify-between items-center">
        <div className="flex items-center">
          <div className="cursor-pointer">
            <GiHamburgerMenu onClick={toggleHandler} size="24px" />
          </div>

          <Link to="/">
            <img
              className="px-2"
              width={"115px"}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
              alt="yt_logo"
            />
          </Link>
        </div>
        {/* Middle */}
        <form onSubmit={searchVideo} className="flex group items-center">
          <div
            className={`flex h-8 md:h-10 md:ml-10 md:pl-5 border rounded-l-3xl ${
              isDarkMode ? "border-gray-600" : "border-[#303030]"
            } group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0`}
          >
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-black text-xl" />
            </div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search"
              className={`bg-transparent outline-none pr-5 pl-5 md:pl-0 w-20 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            />
          </div>
          <button
            type="submit"
            className={`hover:bg-[#303030]/[0.6] w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 rounded-r-3xl ${
              isDarkMode
                ? "border-gray-600 bg-gray-700"
                : "border-[#303030] bg-white/[0.1]"
            }`}
          >
            <IoIosSearch
              className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}
            />
          </button>
        </form>
        {/* Right Side */}
        <div className="flex items-center">
          <div className="flex">
            {/* Dark Mode Toggle Button with Icons */}
            <button
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-full ${
                isDarkMode ? "bg-gray-700" : "bg-gray-300"
              }`}
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-500" /> // Light Mode Icon
              ) : (
                <FaMoon className="text-gray-800" /> // Dark Mode Icon
              )}
            </button>
            <div className="flex items-center justify-center rounded-full h-10 w-10 hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine
                className={`text-xl cursor-pointer ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div className="flex items-center justify-center ml-2 rounded-full h-10 w-10 hover:bg-[#303030]/[0.6]">
              <FiBell
                className={`text-xl cursor-pointer ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              />
            </div>
            <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
              <Avatar
                round={true}
                size="40"
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
