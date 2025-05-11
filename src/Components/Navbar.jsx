// import React, { useState, useEffect } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoIosSearch } from "react-icons/io";
// import Avatar from "react-avatar";
// import { RiVideoAddLine } from "react-icons/ri";
// import { FiBell } from "react-icons/fi";
// import { useDispatch } from "react-redux";
// import { setCategory, toggleSlider } from "../utils/appSlice";
// import { Link, useNavigate } from "react-router-dom";
// import { useTheme } from "../ThemeContext"; // Import useTheme for dark mode
// import { FaMoon, FaSun } from "react-icons/fa"; // Import dark and light mode icons

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [input, setInput] = useState("");
//   const { isDarkMode, toggleDarkMode } = useTheme(); // Use ThemeContext

//   const toggleHandler = () => {
//     dispatch(toggleSlider());
//   };

//   const searchVideo = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       dispatch(setCategory(input)); // Optional: If you want to store the search term in Redux
//       setInput("");

//       // Navigate to home with search query
//       navigate(`/?search=${encodeURIComponent(input)}`);
//     }
//   };

//   useEffect(() => {
//     // Update the HTML data attribute for dark mode
//     document.documentElement.setAttribute(
//       "data-theme",
//       isDarkMode ? "dark" : "light"
//     );
//   }, [isDarkMode]);

//   return (
//     <div
//       className={`flex fixed top-0 justify-center items-center w-[100%] z-10 ${
//         isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//       }`}
//     >
//       <div className="flex w-[96%] py-3 justify-between items-center">
//         <div className="flex items-center">
//           <div className="cursor-pointer">
//             <GiHamburgerMenu onClick={toggleHandler} size="24px" />
//           </div>

//           <Link to="/">
//             <img
//               className="px-2"
//               width={"115px"}
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
//               alt="yt_logo"
//             />
//           </Link>
//         </div>
//         {/* Middle */}
//         <form onSubmit={searchVideo} className="flex group items-center">
//           <div
//             className={`flex h-8 md:h-10 md:ml-10 md:pl-5 border rounded-l-3xl ${
//               isDarkMode ? "border-gray-600" : "border-[#303030]"
//             } group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0`}
//           >
//             <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
//               <IoIosSearch className="text-black text-xl" />
//             </div>
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               type="text"
//               placeholder="Search"
//               className={`bg-transparent outline-none pr-5 pl-5 md:pl-0 w-20 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] ${
//                 isDarkMode ? "text-white" : "text-black"
//               }`}
//             />
//           </div>
//           <button
//             type="submit"
//             className={`hover:bg-[#303030]/[0.6] w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 rounded-r-3xl ${
//               isDarkMode
//                 ? "border-gray-600 bg-gray-700"
//                 : "border-[#303030] bg-white/[0.1]"
//             }`}
//           >
//             <IoIosSearch
//               className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}
//             />
//           </button>
//         </form>
//         {/* Right Side */}
//         <div className="flex items-center">
//           <div className="flex">
//             {/* Dark Mode Toggle Button with Icons */}
//             <button
//               onClick={toggleDarkMode}
//               className={`ml-4 p-2 rounded-full ${
//                 isDarkMode ? "bg-gray-700" : "bg-gray-300"
//               }`}
//             >
//               {isDarkMode ? (
//                 <FaSun className="text-yellow-500" /> // Light Mode Icon
//               ) : (
//                 <FaMoon className="text-gray-800" /> // Dark Mode Icon
//               )}
//             </button>
//             <div className="flex items-center justify-center rounded-full h-10 w-10 hover:bg-[#303030]/[0.6]">
//               <RiVideoAddLine
//                 className={`text-xl cursor-pointer ${
//                   isDarkMode ? "text-white" : "text-black"
//                 }`}
//               />
//             </div>
//             <div className="flex items-center justify-center ml-2 rounded-full h-10 w-10 hover:bg-[#303030]/[0.6]">
//               <FiBell
//                 className={`text-xl cursor-pointer ${
//                   isDarkMode ? "text-white" : "text-black"
//                 }`}
//               />
//             </div>
//             <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
//               <Avatar
//                 round={true}
//                 size="40"
//                 src="https://xsgames.co/randomusers/avatar.php?g=male"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { setCategory, toggleSlider } from "../utils/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleHandler = () => {
    dispatch(toggleSlider());
  };

  const searchVideo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(setCategory(input));
      setInput("");
      navigate(`/?search=${encodeURIComponent(input)}`);
      if (showMobileSearch) setShowMobileSearch(false);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMobileMenu && !event.target.closest(".mobile-menu-container")) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMobileMenu]);

  const renderLogo = () => (
    <div
      className={`flex items-center ${
        showMobileSearch ? "hidden sm:flex" : "flex"
      }`}
    >
      <button
        className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        onClick={toggleHandler}
        aria-label="Toggle sidebar"
      >
        <GiHamburgerMenu size="22px" />
      </button>

      <Link to="/" className="ml-2 flex items-center">
        {isDarkMode ? (
          <>
            <img
              className="h-8 mr-2"
              src="/src/assets/logomobile.png"
              alt="VideoHub Logo"
            />
            <span className="text-white font-bold text-xl hidden sm:inline tracking-tight">
              VideoHub
            </span>
          </>
        ) : (
          <>
            <img
              className="h-8 mr-2"
              src="/src/assets/logomobile.png"
              alt="VideoHub Logo"
            />
            <span className="text-black font-bold text-xl hidden sm:inline tracking-tight">
              VideoHub
            </span>
          </>
        )}
      </Link>
    </div>
  );

  const renderSearchBar = () => (
    <form
      onSubmit={searchVideo}
      className={`${
        showMobileSearch ? "flex w-full" : "hidden sm:flex"
      } group items-center max-w-[600px] w-full transition-all duration-300`}
    >
      <div
        className={`flex h-8 md:h-10 md:ml-10 md:pl-5 border rounded-l-3xl flex-grow
          ${isDarkMode ? "border-gray-600" : "border-[#303030]"}
          group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0
          transition-all duration-200 shadow-sm`}
      >
        <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
          <IoIosSearch
            className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}
          />
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
          aria-label="Search videos"
          className={`bg-transparent outline-none pr-5 pl-5 md:pl-0 w-full md:group-focus-within:pl-0
            ${isDarkMode ? "text-white" : "text-black"}
            transition-all duration-200 text-sm`}
        />
      </div>
      <button
        type="submit"
        aria-label="Search"
        className={`hover:bg-[#303030]/[0.6] w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center 
          border border-l-0 rounded-r-3xl transition-colors duration-200 shadow-sm
          ${
            isDarkMode
              ? "border-gray-600 bg-gray-700 hover:bg-gray-600"
              : "border-[#303030] bg-gray-100 hover:bg-gray-200"
          }`}
      >
        <IoIosSearch
          className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}
        />
      </button>

      {showMobileSearch && (
        <button
          type="button"
          onClick={() => setShowMobileSearch(false)}
          className="ml-2 p-2 sm:hidden rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-medium"
        >
          Cancel
        </button>
      )}
    </form>
  );

  const renderMobileSearchButton = () => (
    <button
      onClick={() => setShowMobileSearch(true)}
      className={`sm:hidden p-2 rounded-full ${
        isDarkMode
          ? "bg-gray-700 hover:bg-gray-600"
          : "bg-gray-200 hover:bg-gray-300"
      } transition-colors duration-200`}
      aria-label="Search"
    >
      <IoIosSearch
        className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}
      />
    </button>
  );

  const renderUserControls = () => (
    <div
      className={`flex items-center space-x-3 ${
        showMobileSearch ? "hidden sm:flex" : "flex"
      }`}
    >
      <button
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        className={`hidden sm:flex p-2 rounded-full transition-colors duration-200 ${
          isDarkMode
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {isDarkMode ? (
          <FaSun className="text-yellow-500 text-lg" />
        ) : (
          <FaMoon className="text-gray-800 text-lg" />
        )}
      </button>

      <button
        className={`hidden sm:flex items-center justify-center rounded-full h-10 w-10 
          transition-colors duration-200 ${
            isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        aria-label="Create video"
      >
        <RiVideoAddLine
          className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}
        />
      </button>

      <button
        className={`hidden sm:flex items-center justify-center rounded-full h-10 w-10 
          transition-colors duration-200 ${
            isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        aria-label="Notifications"
      >
        <FiBell
          className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}
        />
      </button>

      {/* Mobile menu button */}
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className={`sm:hidden flex items-center justify-center rounded-full h-10 w-10 
          transition-colors duration-200 ${
            isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        aria-label="Menu"
      >
        <HiOutlineDotsVertical
          className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}
        />
      </button>

      <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-2 ring-2 ring-gray-200 dark:ring-gray-700">
        <Avatar
          round={true}
          size="40"
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt="User profile"
        />
      </div>
    </div>
  );

  // Mobile menu dropdown
  const renderMobileMenu = () =>
    showMobileMenu && (
      <div className="mobile-menu-container absolute right-2 top-14 sm:hidden z-20 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200">
        <button
          onClick={toggleDarkMode}
          className={`flex items-center w-full px-4 py-3 text-sm ${
            isDarkMode
              ? "text-white hover:bg-gray-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {isDarkMode ? (
            <>
              <FaSun className="mr-3 text-yellow-500" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <FaMoon className="mr-3 text-gray-800" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
        <button
          className={`flex items-center w-full px-4 py-3 text-sm ${
            isDarkMode
              ? "text-white hover:bg-gray-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <RiVideoAddLine className="mr-3" />
          <span>Create</span>
        </button>
        <button
          className={`flex items-center w-full px-4 py-3 text-sm ${
            isDarkMode
              ? "text-white hover:bg-gray-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FiBell className="mr-3" />
          <span>Notifications</span>
        </button>
      </div>
    );

  return (
    <header
      className={`flex fixed top-0 justify-center items-center w-full z-10 shadow-md
        ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}
        transition-colors duration-300`}
    >
      <div className="flex w-[96%] py-2.5 justify-between items-center relative">
        {renderLogo()}
        {renderSearchBar()}
        {!showMobileSearch && renderMobileSearchButton()}
        {renderUserControls()}
        {renderMobileMenu()}
      </div>
    </header>
  );
};

export default Navbar;
