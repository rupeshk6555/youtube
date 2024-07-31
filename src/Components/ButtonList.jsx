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


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { setCategory } from "../utils/appSlice";

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
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const videoByTag = (tag) => {
    if (activeButton !== tag) {
      dispatch(setCategory(tag));
      setActiveButton(tag);
      navigate(`/?search=${encodeURIComponent(tag)}`); // Navigate with the search parameter
    }
  };

  return (
    <div>
      <div className="flex w-full overflow-x-scroll no-scrollbar mb-5">
        {buttonList.map((buttonName, index) => (
          <div key={index}>
            <button
              onClick={() => {
                videoByTag(buttonName);
              }}
              className={`${
                activeButton === buttonName
                  ? "bg-slate-900 text-white"
                  : "bg-gray-300"
              } w-fit font-normal mx-1 px-3 rounded-lg py-2 cursor-pointer`}
            >
              <span className="whitespace-nowrap">{buttonName}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
