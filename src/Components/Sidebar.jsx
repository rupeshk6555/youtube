// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { categories, explore, menu } from "./SidebarItems";
// import { setCategory } from "../utils/appSlice";
// import { useTheme } from "../ThemeContext"; // Import useTheme

// const Sidebar = () => {
//   const { isDarkMode, toggleDarkMode } = useTheme(); // Use ThemeContext
//   const open = useSelector((store) => store.app.open);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filter categories and explore items based on the search query
//   const filteredCategories = categories.filter((item) =>
//     item.text.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredExplore = explore.filter((item) =>
//     item.text.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleItemClick = (category) => {
//     dispatch(setCategory(category));
//     navigate(`/?search=${encodeURIComponent(category)}`);
//   };

//   // Update the HTML data attribute for dark mode
//   useEffect(() => {
//     document.documentElement.setAttribute(
//       "data-theme",
//       isDarkMode ? "dark" : "light"
//     );
//   }, [isDarkMode]);

//   return (
//     <div
//       className={` ${
//         open ? "bg-white mb-56 text-black" : "-translate-x-[1600px]"
//       } lg:w-[25%] 2xl:w-[19%] h-full pb-36 flex fixed p-4 overflow-y-scroll overflow-hidden cursor-pointer

//       `}
//     >
//       <div className="w-full  ">
//         {/* Categories */}
//         {filteredCategories.map((item, index) => (
//           <div key={index} className={`mb-0`}>
//             <div
//               className={`flex items-center w-full py-2  hover:bg-gray-300`}
//               onClick={() => handleItemClick(item.text)}
//             >
//               <item.icon className="ml-2 md:size-6 size-4" />
//               <span className={`ml-5 md:text-lg text-xs pr-6`}>
//                 {item.text}
//               </span>
//             </div>
//           </div>
//         ))}
//         <hr className="border-b border-black/[0.15] mt-3" />

//         {/* Explore */}
//         <h3 className="font-semibold my-3">Explore</h3>
//         {filteredExplore.map((item, index) => (
//           <div key={index} className={`mb-1`}>
//             <div
//               className={`flex items-center w-full py-2 hover:bg-gray-300`}
//               onClick={() => handleItemClick(item.text)}
//             >
//               <item.icon className="ml-2 md:size-6 size-4" />
//               <span className={`ml-5 md:text-lg text-xs pr-6`}>
//                 {item.text}
//               </span>
//             </div>
//           </div>
//         ))}

//         {/* Menu */}
//         <hr className="border-b border-black/[0.15] my-3 " />
//         {menu.map((item, index) => (
//           <div key={index} className={`mb-1`}>
//             <div
//               className={`flex items-center w-full py-2  hover:bg-gray-300  `}
//             >
//               <item.icon className="ml-2 md:size-6 size-4" />
//               <span className={`ml-5 md:text-lg text-xs pr-6`}>
//                 {item.text}
//               </span>
//             </div>
//           </div>
//         ))}

//         <div className=" pb-20  pt-2">
//           <h2 className=" text-sm capitalize">
//             create by
//             <span className=" pl-3 uppercase">
//               <a href="https://github.com/rupeshk6555" target="_blank">
//                 Rupesh kumar
//               </a>
//             </span>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { categories, explore, menu } from "./SidebarItems";
// import { setCategory } from "../utils/appSlice";
// import { useTheme } from "../ThemeContext"; // Import useTheme

// const Sidebar = () => {
//   const { isDarkMode, toggleDarkMode } = useTheme(); // Use ThemeContext
//   const open = useSelector((store) => store.app.open);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");

//   // Filter categories and explore items based on the search query
//   const filteredCategories = categories.filter((item) =>
//     item.text.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredExplore = explore.filter((item) =>
//     item.text.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleItemClick = (category) => {
//     dispatch(setCategory(category));
//     navigate(`/?search=${encodeURIComponent(category)}`);
//   };

//   // Update the HTML data attribute for dark mode
//   useEffect(() => {
//     document.documentElement.setAttribute(
//       "data-theme",
//       isDarkMode ? "dark" : "light"
//     );
//   }, [isDarkMode]);

//   return (
//     <div
//       className={` ${
//         open
//           ? isDarkMode
//             ? "bg-gray-900"
//             : "bg-white"
//           : "-translate-x-[1600px]"
//       } lg:w-[25%] 2xl:w-[19%] h-full pb-36 flex fixed p-4 overflow-y-scroll overflow-hidden cursor-pointer

//       `}
//     >
//       <div className="w-full  ">
//         {/* Categories */}
//         {filteredCategories.map((item, index) => (
//           <div key={index} className={`mb-0`}>
//             <div
//               className={`flex items-center w-full py-2  hover:bg-gray-${
//                 isDarkMode ? "700" : "300"
//               }`}
//               onClick={() => handleItemClick(item.text)}
//             >
//               <item.icon
//                 className={`ml-2 md:size-6 size-4 ${
//                   isDarkMode ? "text-gray-200" : "text-gray-800"
//                 }`}
//               />
//               <span
//                 className={`ml-5 md:text-lg text-xs pr-6 ${
//                   isDarkMode ? "text-gray-200" : "text-gray-800"
//                 }`}
//               >
//                 {item.text}
//               </span>
//             </div>
//           </div>
//         ))}
//         <hr
//           className={`border-b ${
//             isDarkMode ? "border-gray-700" : "border-black/[0.15]"
//           } mt-3`}
//         />

//         {/* Explore */}
//         <h3
//           className={`font-semibold my-3 ${
//             isDarkMode ? "text-gray-200" : "text-gray-800"
//           }`}
//         >
//           Explore
//         </h3>
//         {filteredExplore.map((item, index) => (
//           <div key={index} className={`mb-1`}>
//             <div
//               className={`flex items-center w-full py-2 hover:bg-gray-${
//                 isDarkMode ? "700" : "300"
//               }`}
//               onClick={() => handleItemClick(item.text)}
//             >
//               <item.icon
//                 className={`ml-2 md:size-6 size-4 ${
//                   isDarkMode ? "text-gray-200" : "text-gray-800"
//                 }`}
//               />
//               <span
//                 className={`ml-5 md:text-lg text-xs pr-6 ${
//                   isDarkMode ? "text-gray-200" : "text-gray-800"
//                 }`}
//               >
//                 {item.text}
//               </span>
//             </div>
//           </div>
//         ))}

//         {/* Menu */}
//         <hr
//           className={`border-b ${
//             isDarkMode ? "border-gray-700" : "border-black/[0.15]"
//           } my-3`}
//         />
//         {menu.map((item, index) => (
//           <div key={index} className={`mb-1`}>
//             <div
//               className={`flex items-center w-full py-2  hover:bg-gray-${
//                 isDarkMode ? "700" : "300"
//               }`}
//             >
//               <item.icon
//                 className={`ml-2 md:size-6 size-4 ${
//                   isDarkMode ? "text-gray-200" : "text-gray-800"
//                 }`}
//               />
//               <span
//                 className={`ml-5 md:text-lg text-xs pr-6 ${
//                   isDarkMode ? "text-gray-200" : "text-gray-800"
//                 }`}
//               >
//                 {item.text}
//               </span>
//             </div>
//           </div>
//         ))}

//         <div className=" pb-20  pt-2">
//           <h2
//             className={`text-sm capitalize ${
//               isDarkMode ? "text-gray-200" : "text-gray-800"
//             }`}
//           >
//             create by
//             <span className=" pl-3 uppercase">
//               <a
//                 href="https://github.com/rupeshk6555"
//                 target="_blank"
//                 className={`${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
//               >
//                 Rupesh kumar
//               </a>
//             </span>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categories, explore, menu } from "./SidebarItems";
import { setCategory, toggleSlider } from "../utils/appSlice";
import { useTheme } from "../ThemeContext";
import { IoSearchOutline } from "react-icons/io5";

const Sidebar = () => {
  const { isDarkMode } = useTheme();
  const open = useSelector((store) => store.app.open);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  // Filter categories and explore items based on the search query
  const filteredCategories = categories.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredExplore = explore.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleItemClick = (category) => {
    setActiveCategory(category);
    dispatch(setCategory(category));
    navigate(`/?search=${encodeURIComponent(category)}`);

    // Close sidebar after clicking
    dispatch(toggleSlider());

    // when click on category, explore and menu items should be close sidebar icon
  };

  // Update the HTML data attribute for dark mode
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  // Reset active category when sidebar closes
  useEffect(() => {
    if (!open) {
      setActiveCategory("");
    }
  }, [open]);

  const renderSearchInput = () => (
    <div className={`relative mb-4 mt-1 px-2`}>
      <div className={`relative flex items-center`}>
        <IoSearchOutline
          className={`absolute left-3 ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full py-2 pl-10 pr-4 rounded-full text-sm outline-none transition-colors duration-200 ${
            isDarkMode
              ? "bg-gray-800 text-white border border-gray-700 focus:border-gray-500"
              : "bg-gray-100 text-gray-800 border border-gray-200 focus:border-gray-400"
          }`}
        />
      </div>
    </div>
  );

  const renderCategoryItem = (item, index) => {
    const isActive = activeCategory === item.text;
    return (
      <div key={index} className="mb-1">
        <div
          className={`flex items-center w-full py-2.5 px-3 rounded-lg transition-colors duration-200 ${
            isActive
              ? isDarkMode
                ? "bg-gray-700"
                : "bg-gray-200"
              : "hover:bg-gray-" + (isDarkMode ? "700/70" : "200/70")
          }`}
          onClick={() => handleItemClick(item.text)}
        >
          <item.icon
            className={`md:size-5 size-4 ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            } ${isActive ? (isDarkMode ? "text-white" : "text-black") : ""}`}
          />
          <span
            className={`ml-5 md:text-sm text-xs font-medium ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            } ${isActive ? (isDarkMode ? "text-white" : "text-black") : ""}`}
          >
            {item.text}
          </span>
        </div>
      </div>
    );
  };

  // For menu items that don't navigate but should still close sidebar on mobile
  const renderMenuItemWithClose = (item, index) => {
    return (
      <div key={index} className="mb-1">
        <div
          className={`flex items-center w-full py-2.5 px-3 rounded-lg transition-colors duration-200 hover:bg-gray-${
            isDarkMode ? "700/70" : "200/70"
          }`}
          onClick={() => {
            // Close sidebar on mobile/smaller screens
            if (window.innerWidth < 1024) {
              dispatch(toggleSlider());
            }
          }}
        >
          <item.icon
            className={`md:size-5 size-4 ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          />
          <span
            className={`ml-5 md:text-sm text-xs font-medium ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            {item.text}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${
        open
          ? isDarkMode
            ? "bg-gray-900"
            : "bg-white"
          : "-translate-x-[1600px]"
      } lg:w-[240px] 2xl:w-[260px] cursor-pointer h-full pb-36 flex fixed p-2 overflow-y-auto overflow-x-hidden transition-all duration-300 shadow-lg z-20
      scrollbar-thin ${
        isDarkMode
          ? "scrollbar-thumb-gray-600 scrollbar-track-gray-800"
          : "scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      }`}
    >
      <div className="w-full">
        {renderSearchInput()}

        {/* Categories */}
        <div className="px-2">
          {filteredCategories.map((item, index) =>
            renderCategoryItem(item, index)
          )}
        </div>

        <hr
          className={`border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          } my-3 mx-2`}
        />

        {/* Explore */}
        <h3
          className={`font-medium text-sm my-3 px-4 ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          EXPLORE
        </h3>
        <div className="px-2">
          {filteredExplore.map((item, index) =>
            renderCategoryItem(item, index)
          )}
        </div>

        {/* Menu */}
        <hr
          className={`border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          } my-3 mx-2`}
        />
        <div className="px-2">
          {menu.map((item, index) => renderMenuItemWithClose(item, index))}
        </div>

        <div className="pt-6 pb-20 px-4">
          <h2
            className={`text-xs ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Created by{" "}
            <a
              href="https://github.com/rupeshk6555"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium uppercase hover:underline ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Rupesh Kumar
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
