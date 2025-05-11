// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { ApI_key, value_converter } from "../constant/youtube";
// import { useDispatch, useSelector } from "react-redux";
// import Avatar from "react-avatar";
// import moment from "moment";
// import { setViewCount } from "../utils/appSlice";

// const VideoCard = ({ item }) => {
//   const open = useSelector((store) => store.app.open);
//   const [ytIcon, setYtIcon] = useState("");
//   const [viewCount, setViewCountState] = useState("");
//   const dispatch = useDispatch();

//   const getYoutubeChannelName = async () => {
//     try {
//       const res = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${ApI_key}`
//       );

//       setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   // const getVideoViews = async () => {
//   //   try {
//   //     const res = await axios.get(
//   //       `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id}&key=${ApI_key}`
//   //     );

//   //     dispatch(setViewCount(res.data.items[0].statistics.viewCount));
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   const getVideoViews = async () => {
//     try {
//       const res = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id}&key=${ApI_key}`
//       );

//       if (
//         res.data &&
//         res.data.items &&
//         res.data.items[0] &&
//         res.data.items[0].statistics
//       ) {
//         dispatch(setViewCount(res.data.items[0].statistics.viewCount));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getYoutubeChannelName();
//     getVideoViews();
//   }, []);

//   const viewCountFromStore = useSelector((store) => store.app.viewCount);

//   return (
//     <div className=" min-w-full md:w-[350px] lg:h-[330px] lg:w-[300px] xl:w-[390px] 2xl:w-[360px] items-center mx-auto cursor-pointer  m-2 md:p-0 overflow-hidden ">
//       <img
//         className=" w-[400px] h-[210px] rounded-xl"
//         src={item.snippet.thumbnails.high.url}
//         alt="video"
//       />
//       <div className=" flex ">
//         <div className="flex items-center mr-4">
//           <div className="flex  overflow-hidden rounded-full ">
//             <Avatar round={true} size="45" src={ytIcon} alt="" />
//           </div>
//           <div className=" ml-5 w-full">
//             <h1 className="text-sm font-semibold items-center mt-2 text-[#0f0f0f]">
//               {item.snippet.title}
//             </h1>
//             <p className=" text-sm  text-[#606060]">
//               {item.snippet.channelTitle}
//             </p>
//             <p className=" text-sm  text-[#606060]">
//               {value_converter(viewCountFromStore)} views &bull;
//               {moment(item.snippet.publishedAt).fromNow()}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApI_key, value_converter } from "../constant/youtube";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "react-avatar";
import moment from "moment";
import { setViewCount } from "../utils/appSlice";
import { useTheme } from "../ThemeContext"; // Import useTheme for dark mode

const VideoCard = ({ item }) => {
  const { isDarkMode } = useTheme(); // Access dark mode state
  const open = useSelector((store) => store.app.open);
  const [ytIcon, setYtIcon] = useState("");
  const dispatch = useDispatch();

  const getYoutubeChannelName = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${ApI_key}`
      );

      setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoViews = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id}&key=${ApI_key}`
      );

      if (
        res.data &&
        res.data.items &&
        res.data.items[0] &&
        res.data.items[0].statistics
      ) {
        dispatch(setViewCount(res.data.items[0].statistics.viewCount));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYoutubeChannelName();
    getVideoViews();
  }, []);

  const viewCountFromStore = useSelector((store) => store.app.viewCount);

  return (
    <div
      className={`min-w-full md:w-[350px] lg:h-[330px] lg:w-[300px] xl:w-[390px] 2xl:w-[360px] items-center mx-auto cursor-pointer m-2 md:p-0 overflow-hidden ${
        isDarkMode ? " text-white" : "bg-white text-black"
      }`}
    >
      <img
        className="w-[400px] h-[210px] rounded-xl"
        src={item.snippet.thumbnails.high.url}
        alt="video"
      />
      <div className="flex">
        <div className="flex items-center mr-4">
          <div className="flex overflow-hidden rounded-full">
            <Avatar round={true} size="45" src={ytIcon} alt="" />
          </div>
          <div className="ml-5 w-full space-y-1">
            <h1 className="text-sm font-semibold items-center mt-2">
              {item.snippet.title}
            </h1>
            <p className="text-xs">{item.snippet.channelTitle}</p>
            <p className="text-xs">
              {value_converter(viewCountFromStore)} views &bull;
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
