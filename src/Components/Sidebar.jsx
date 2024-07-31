import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categories, explore, menu } from "./SidebarItems";
import { setCategory } from "../utils/appSlice";
import { useTheme } from "../ThemeContext"; // Import useTheme

const Sidebar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use ThemeContext
  const open = useSelector((store) => store.app.open);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter categories and explore items based on the search query
  const filteredCategories = categories.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredExplore = explore.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleItemClick = (category) => {
    dispatch(setCategory(category));
    navigate(`/?search=${encodeURIComponent(category)}`);
  };

  // Update the HTML data attribute for dark mode
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return (
    <div
      className={` ${
        open ? "bg-white mb-56 text-black" : "-translate-x-[1600px]"
      } lg:w-[25%] 2xl:w-[19%] h-full pb-36 flex fixed p-4 overflow-y-scroll overflow-hidden cursor-pointer 
        
      `}
    >
      <div className="w-full  ">
        {/* Categories */}
        {filteredCategories.map((item, index) => (
          <div key={index} className={`mb-0`}>
            <div
              className={`flex items-center w-full py-2  hover:bg-gray-300`}
              onClick={() => handleItemClick(item.text)}
            >
              <item.icon className="ml-2 md:size-6 size-4" />
              <span className={`ml-5 md:text-lg text-xs pr-6`}>
                {item.text}
              </span>
            </div>
          </div>
        ))}
        <hr className="border-b border-black/[0.15] mt-3" />

        {/* Explore */}
        <h3 className="font-semibold my-3">Explore</h3>
        {filteredExplore.map((item, index) => (
          <div key={index} className={`mb-1`}>
            <div
              className={`flex items-center w-full py-2 hover:bg-gray-300`}
              onClick={() => handleItemClick(item.text)}
            >
              <item.icon className="ml-2 md:size-6 size-4" />
              <span className={`ml-5 md:text-lg text-xs pr-6`}>
                {item.text}
              </span>
            </div>
          </div>
        ))}

        {/* Menu */}
        <hr className="border-b border-black/[0.15] my-3 " />
        {menu.map((item, index) => (
          <div key={index} className={`mb-1`}>
            <div
              className={`flex items-center w-full py-2  hover:bg-gray-300  `}
            >
              <item.icon className="ml-2 md:size-6 size-4" />
              <span className={`ml-5 md:text-lg text-xs pr-6`}>
                {item.text}
              </span>
            </div>
          </div>
        ))}

        <div className=" pb-20  pt-2">
          <h2 className=" text-sm capitalize">
            create by
            <span className=" pl-3 uppercase">
              <a href="https://github.com/rupeshk6555" target="_blank">
                Rupesh kumar
              </a>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
