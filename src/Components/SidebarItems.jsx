// import React from "react";
// import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
// import { CgMusicNote } from "react-icons/cg";
// import { FiFilm, FiHelpCircle, FiSettings } from "react-icons/fi";
// import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
// import { GoHome, GoSignOut } from "react-icons/go";
// import { ImNewspaper } from "react-icons/im";
// import { IoGameControllerSharp } from "react-icons/io5";
// import { MdLiveTv, MdLocalFireDepartment, MdOutlineSubscriptions } from "react-icons/md";
// import { RiFeedbackLine, RiLightbulbLine } from "react-icons/ri";
// import { SiYoutubeshorts } from "react-icons/si";

//   const SidebarItems = [
//   {
//     icon: GoHome,
//     text: "Home",
//     link: "/",
//   },
//   {
//     icon: SiYoutubeshorts,
//     text: "Shorts",
//     link: "/shorts",
//   },
//   {
//     icon: MdOutlineSubscriptions,
//     text: "Subscriptions",
//     link: "/subscriptions",
//   },

// ];

//  const Explore = [
//   {
//     icon: AiFillHome,
//     text: "New",
//     link: "/new",
//   },
//   {
//     icon: MdLocalFireDepartment,
//     text: "Trending",
//     link: "/trending",
//   },
//   {
//     icon: CgMusicNote,
//     text: "Music",
//     link: "/music",
//   },
//   {
//     icon: FiFilm,
//     text: "Films",
//     link: "/films",
//   },
//   {
//     icon: MdLiveTv,
//     text: "Live",
//     link: "/live",
//   },
//   {
//     icon: IoGameControllerSharp,
//     text: "Gaming",
//     link: "/gaming",
//   },
//   {
//     icon: ImNewspaper,
//     text: "News",
//     link: "/news",
//   },
//   {
//     icon: GiDiamondTrophy,
//     text: "Sports",
//     link: "/sports",
//   },
//   {
//     icon: RiLightbulbLine,
//     text: "Learning",
//     link: "/learning",
//   },
//   {
//     icon: GiEclipse,
//     text: "Fashion & beauty",
//     link: "/fashion-beauty",
//     divider: true,
//   },
//   {
//     icon: FiSettings,
//     text: "Settings",
//     link: "/settings",
//   },
//   {
//     icon: AiOutlineFlag,
//     text: "Report History",
//     link: "/report-history",
//   },
//   {
//     icon: FiHelpCircle,
//     text: "Help",
//     link: "/help",
//   },
//   {
//     icon: RiFeedbackLine,
//     text: "Send feedback",
//     link: "/send-feedback",
//   },
// ];

// export default {SidebarItems ,Explore}

//

// Import React
import React from "react";

// Import icons from react-icons
import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import {
  MdLocalFireDepartment,
  MdLiveTv,
  MdOutlineSubscriptions,
} from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm, FiSettings, FiHelpCircle } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";

// Define categories array
export const categories = [
  {
    icon: GoHome,
    text: "Home",
    link: "/",
  },
  {
    icon: SiYoutubeshorts,
    text: "Shorts",
    link: "/shorts",
    type: "shorts",
  },
  {
    icon: MdOutlineSubscriptions,
    text: "Subscriptions",
    link: "/subscriptions",
    type: "subscriptions",
  },
];

// Define explore array
export const explore = [
  {
    icon: AiFillHome,
    text: "New",
    link: "/new",
    type: "home",
  },
  {
    icon: MdLocalFireDepartment,
    text: "Trending",
    link: "/trending",
    type: "category",
  },
  {
    icon: CgMusicNote,
    text: "Music",
    link: "/music",
    type: "category",
  },
  {
    icon: FiFilm,
    text: "Films",
    link: "/films",
    type: "category",
  },
  {
    icon: MdLiveTv,
    text: "Live",
    link: "/live",
    type: "category",
  },
  {
    icon: IoGameControllerSharp,
    text: "Gaming",
    link: "/gaming",
    type: "category",
  },
  {
    icon: ImNewspaper,
    text: "News",
    link: "/news",
    type: "category",
  },
  {
    icon: GiDiamondTrophy,
    text: "Sports",
    link: "/sports",
    type: "category",
  },
  {
    icon: RiLightbulbLine,
    text: "Learning",
    link: "/learning",
    type: "category",
  },
  {
    icon: GiEclipse,
    text: "Fashion & beauty",
    link: "/fashion-beauty",
    type: "category",
    divider: true,
  },
];

// Define menu array
export const menu = [
  {
    icon: FiSettings,
    text: "Settings",
    link: "/settings",
    type: "menu",
  },
  {
    icon: AiOutlineFlag,
    text: "Report History",
    link: "/report-history",
    type: "menu",
  },
  {
    icon: FiHelpCircle,
    text: "Help",
    link: "/help",
    type: "menu",
  },
  {
    icon: RiFeedbackLine,
    text: "Send feedback",
    link: "/send-feedback",
    type: "menu",
  },
];

// Combine all arrays into a single array
// const Explore = [...categories, ...explore, ...menu];

// export default Explore;
