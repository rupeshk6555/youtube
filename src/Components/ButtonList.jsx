// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setCategory } from "../utils/appSlice";
// const buttonList = [
//   "All",
//   "JavaScript",
//   "Java",
//   "Live",
//   "Songs",
//   "Music",
//   "React",
//   "Tailwind CSS",
//   "TypeScript",
//   "Python",
//   "Golang",
//   "GraphQL",
//   "CSS",
//   "JSON",
//   "HTML",
//   "Bootstrap",
//   "SASS",
//   "JQuery",
//   "Vue.js",
//   "Angular",
//   "Node.js",
//   "Ruby",
//   "PHP",
//   "Go",
//   "Rust",
//   "Swift",
//   "Dart",
//   "Kotlin",
//   "Tech News",
//   "Gadgets",
//   "Smartphones",
//   "Laptops",
//   "Computers",
//   "Artificial Intelligence",
//   "Machine Learning",
//   "Cybersecurity",
//   "Internet of Things (IoT)",
//   "Virtual Reality (VR)",
// ];
// const ButtonList = () => {
//   const [activeButton, setAactiveButton] = useState("All");
//   const dispatch = useDispatch();

//   const vidoeByTag = (tag) => {
//     if (activeButton !== tag) {
//       dispatch(setCategory(tag));
//       setAactiveButton(tag);
//     }
//   };

//   return (
//     <div className="flex  w-full overflow-x-scroll no-scrollbar mb-5 ">
//       {buttonList.map((buttonName, index) => (
//         <div key={index}>
//           <button
//             onClick={() => {
//               vidoeByTag(buttonName);
//             }}
//             className={`${
//               activeButton === buttonName
//                 ? " bg-slate-900 text-white"
//                 : " bg-gray-300  "
//             } w-fit font-normal mx-1 px-3 rounded-lg py-2 cursor-pointer`}
//             // className="ml-2 bg-gray-200 md:px-4 px-4 md:py-1 py-0 space-x-1 rounded-md justify-around items-center"
//           >
//             <span className=" whitespace-nowrap">{buttonName}</span>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ButtonList;

// import React from "react"
// const buttonList = [
//   "All",
//   "JavaScript",
//   "Java",
//   "Live",
//   "Songs",
//   "Music",
//   "React",
//   "Tailwind css",
//   "TypeScript",
//   "Python",
//   "Golang",
//   "GraphQL",
//   "CSS",
//   "JSON",
//   "HTML",
//   "CSS",
//   "Bootstrap",
//   "Tailwind CSS",
//   "SASS",
//   "CSS",
//   "JQuery",
//   "React",
//   "Vue.js",
//   "Angular",
// ]
// const ButtonList = () => {
//   return (
//     <div className="flex w-full overflow-x-scroll ">
//       {" "}
//       {/* Add scrollbar-none here */}
//       {buttonList.map((buttonName, index) => (
//         <div key={index}>
//           <button className="bg-gray-300 w-fit font-normal mx-1 px-3 rounded-lg py-2 cursor-pointer">
//             <span className="whitespace-nowrap">{buttonName}</span>
//           </button>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ButtonList

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { setCategory } from "../utils/appSlice";

// const buttonList = [
//   "All",
//   "JavaScript",
//   "Java",
//   "Live",
//   "Songs",
//   "Music",
//   "React",
//   "Tailwind CSS",
//   "TypeScript",
//   "Python",
//   "Golang",
//   "GraphQL",
//   "CSS",
//   "JSON",
//   "HTML",
//   "Bootstrap",
//   "SASS",
//   "JQuery",
//   "Vue.js",
//   "Angular",
//   "Node.js",
//   "Ruby",
//   "PHP",
//   "Go",
//   "Rust",
//   "Swift",
//   "Dart",
//   "Kotlin",
//   "Tech News",
//   "Gadgets",
//   "Smartphones",
//   "Laptops",
//   "Computers",
//   "Artificial Intelligence",
//   "Machine Learning",
//   "Cybersecurity",
//   "Internet of Things (IoT)",
//   "Virtual Reality (VR)",
// ];

// const ButtonList = () => {
//   const [activeButton, setActiveButton] = useState("All");
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Initialize useNavigate

//   const videoByTag = (tag) => {
//     if (activeButton !== tag) {
//       dispatch(setCategory(tag));
//       setActiveButton(tag);
//       navigate(`/?search=${encodeURIComponent(tag)}`); // Navigate with the search parameter
//     }
//   };

//   return (
//     <div>
//       <div className="flex w-full overflow-x-scroll no-scrollbar mb-5">
//         {buttonList.map((buttonName, index) => (
//           <div key={index}>
//             <button
//               onClick={() => {
//                 videoByTag(buttonName);
//               }}
//               className={`${
//                 activeButton === buttonName
//                   ? "bg-slate-900 text-white"
//                   : "bg-gray-300"
//               } w-fit font-normal mx-1 px-3 rounded-lg py-2 cursor-pointer`}
//             >
//               <span className="whitespace-nowrap">{buttonName}</span>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ButtonList;
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../utils/appSlice";
import { useTheme } from "../ThemeContext";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const buttonList = [
  "All",
  "JavaScript",
  "Java",
  "Live",
  "Songs",
  "Music",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Python",
  "Golang",
  "GraphQL",
  "CSS",
  "JSON",
  "HTML",
  "Bootstrap",
  "SASS",
  "JQuery",
  "Vue.js",
  "Angular",
  "Node.js",
  "Ruby",
  "PHP",
  "Go",
  "Rust",
  "Swift",
  "Dart",
  "Kotlin",
  "Tech News",
  "Gadgets",
  "Smartphones",
  "Laptops",
  "Computers",
  "Artificial Intelligence",
  "Machine Learning",
  "Cybersecurity",
  "Internet of Things (IoT)",
  "Virtual Reality (VR)",
];

const ButtonList = () => {
  const [activeButton, setActiveButton] = useState("All");
  const { isDarkMode } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const videoByTag = (tag) => {
    if (activeButton !== tag) {
      dispatch(setCategory(tag));
      setActiveButton(tag);
      navigate(`/?search=${encodeURIComponent(tag)}`);
    }
  };

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      // Initial check
      checkScrollPosition();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center mb-5">
      {/* Left scroll button */}
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className={`absolute left-0 z-10 flex items-center justify-center h-8 w-8 rounded-full shadow-md ${
            isDarkMode
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
          aria-label="Scroll left"
        >
          <IoIosArrowBack />
        </button>
      )}

      {/* Buttons container */}
      <div
        ref={scrollContainerRef}
        className={`flex w-full overflow-x-scroll no-scrollbar py-2 px-4 ${
          showLeftArrow ? "ml-6" : ""
        } ${showRightArrow ? "mr-6" : ""}`}
      >
        {buttonList.map((buttonName, index) => (
          <button
            key={index}
            onClick={() => videoByTag(buttonName)}
            className={`flex-shrink-0 px-4 py-1.5 mx-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeButton === buttonName
                ? isDarkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
                : isDarkMode
                ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            <span className="whitespace-nowrap">{buttonName}</span>
          </button>
        ))}
      </div>

      {/* Right scroll button */}
      {showRightArrow && (
        <button
          onClick={scrollRight}
          className={`absolute right-0 z-10 flex items-center justify-center h-8 w-8 rounded-full shadow-md ${
            isDarkMode
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
          aria-label="Scroll right"
        >
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};

export default ButtonList;
