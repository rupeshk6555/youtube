// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { ApI_key, value_converter } from "../constant/youtube";
// import Avatar from "react-avatar";
// import { AiOutlineLike } from "react-icons/ai";
// import { BiDislike } from "react-icons/bi";
// import { PiShareFat } from "react-icons/pi";
// import { TfiDownload } from "react-icons/tfi";
// import moment from "moment";

// const Watch = () => {
//   const [singleVideo, setSingleVideo] = useState(null);
//   const [youtubeChannel, setYoutubeChannel] = useState(null);
//   const [recommendedVideos, setRecommendedVideos] = useState([]);
//   const [searchParams] = useSearchParams();
//   const videoId = searchParams.get("v");
//   const [showMore, setShowMore] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [comments, setComments] = useState([]);

//   const fetchVideoData = async (videoId) => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${ApI_key}`
//       );

//       setSingleVideo(res?.data?.items[0]);
//       return res?.data?.items[0];
//     } catch (error) {
//       console.error("Error fetching video data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getYoutubeChannel = async (channelId) => {
//     try {
//       const response = await axios.get(
//         ` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${ApI_key}`
//       );
//       setYoutubeChannel(response?.data?.items[0]);
//     } catch (error) {
//       console.error("Error fetching channel data:", error);
//     }
//   };

//   const getRecommendedVideos = async (keywords) => {
//     try {
//       const response = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${keywords}&key=${ApI_key}`
//       );

//       const videoIds = response.data.items
//         .map((item) => item.id.videoId)
//         .join(",");

//       if (videoIds) {
//         const statsResponse = await axios.get(
//           ` https://youtube.googleapis.com/youtube/v3/videos?part=statistics,snippet&maxResults=20&id=${videoIds}&key=${ApI_key}`
//         );

//         setRecommendedVideos(statsResponse.data.items);
//       } else {
//         setRecommendedVideos([]); // No videos found
//       }
//     } catch (error) {
//       console.error("Error fetching recommended videos:", error);
//     }
//   };

//   const fetchComments = async (videoId) => {
//     try {
//       const response = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${ApI_key}`
//       );
//       console.log(response);
//       setComments(response.data.items); // Store the comments in state
//     } catch (error) {
//       console.error("Error fetching comments:", error);
//     }
//   };
//   useEffect(() => {
//     if (videoId) {
//       fetchComments(videoId);
//     }
//   }, [videoId]);
//   useEffect(() => {
//     fetchVideoData(videoId);
//   }, [videoId]);

//   useEffect(() => {
//     if (singleVideo) {
//       const channelId = singleVideo.snippet.channelId;
//       getYoutubeChannel(channelId);
//       const keywords = singleVideo.snippet.title
//         .split(" ")
//         .slice(0, 2)
//         .join(" "); // Use title keywords for related videos
//       getRecommendedVideos(keywords);
//     }
//   }, [singleVideo]);

//   const handleRecommendedClick = (videoId) => {
//     fetchVideoData(videoId);
//   };

//   const handleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!singleVideo || !youtubeChannel) {
//     return <div>Video or Channel not found.</div>;
//   }

//   return (
//     <div className="w-full py-5 h-fit overflow-hidden mx-5 lg:mx-0">
//       <div className="w-full sm:px-5 lg:mx-5 pt-5 block lg:flex space-y-2 lg:space-x-2">
//         {/* Left Side */}
//         <div className="bg-white min-w-[350px] sm:w-full w-full md:w-full lg:w-[70%] h-fit mr-5 mb-10">
//           {/* Video */}
//           <iframe
//             className="aspect-video min-w-full w-full rounded-lg"
//             src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1`}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           ></iframe>
//           {/* Title */}
//           <div className="block lg:block w-full mt-5">
//             <h1 className="lg:text-2xl text-sm md:text-lg font-bold text-[#0f0f0f]/[0.95]">
//               {singleVideo.snippet.title}
//             </h1>
//             <div className="justify-between block w-full md:flex lg:flex xl:flex items-center">
//               {/* Avatar */}
//               <div className="mt-4 w-fit flex md:w-[40%] lg:w-[45%] xl:flex">
//                 <Avatar
//                   round={true}
//                   size="40"
//                   src={youtubeChannel.snippet.thumbnails.default.url}
//                   alt=""
//                 />
//                 <div className="xl:block w-full block ml-2">
//                   <h1 className="text-sm font-semibold text-black">
//                     {singleVideo.snippet.channelTitle}
//                   </h1>
//                   <span>
//                     {value_converter(youtubeChannel.statistics.subscriberCount)}
//                     <span className="font-normal text-sm mt-0">
//                       &nbsp;subscribers
//                     </span>
//                   </span>
//                 </div>
//                 <div className="ml-2">
//                   <button className="text-xs font-semibold bg-black text-white px-3 py-2 rounded-full">
//                     Subscribe
//                   </button>
//                 </div>
//               </div>

//               {/* Profile Right */}
//               <div className="flex items-center justify-between sm:justify-center sm:gap-5 md:gap-0 md:w-[40%] sm:w-[100%] lg:w-[40%]">
//                 <div className="flex items-center cursor-pointer bg-[#F2F2F2] px-2 py-1 lg:px-1 lg:py-2 gap-3 rounded-full">
//                   <AiOutlineLike className="size-4" />
//                   {value_converter(singleVideo.statistics.likeCount)}
//                   <span className="text-gray-400"> | </span>
//                   <BiDislike className="size-4" />
//                 </div>
//                 <div className="flex items-center cursor-pointer bg-[#F2F2F2] px-2 py-1 lg:py-2 gap-3 lg:gap-2 rounded-full">
//                   <PiShareFat className="size-4" />
//                   <p className="font-medium text-xs lg:text-xs">Share</p>
//                 </div>
//                 <div className="flex items-center cursor-pointer lg:py-2 bg-[#F2F2F2] px-2 py-1 lg:px-5 gap-3 lg:gap-2 rounded-full">
//                   <TfiDownload className="size-4" />
//                   <p className="font-medium text-xs lg:text-xs">Download</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full">
//             {/* Description */}
//             <div className="bg-gray-200 mt-4 p-6 flex flex-col">
//               <div className="flex space-x-2 mb-4">
//                 <h2>
//                   {value_converter(singleVideo.statistics.viewCount)} views
//                 </h2>
//                 <h3>
//                   {moment(singleVideo.snippet.publishedAt).format(
//                     "DD MMM YYYY"
//                   )}
//                 </h3>
//               </div>
//               <div>
//                 <div>
//                   {showMore ? (
//                     <div>
//                       <h2
//                         dangerouslySetInnerHTML={{
//                           __html: singleVideo.snippet.description.replace(
//                             /\n/g,
//                             "<br />"
//                           ),
//                         }}
//                       />
//                       <button onClick={handleShowMore}>Show Less</button>
//                     </div>
//                   ) : (
//                     <div>
//                       <h2>
//                         {singleVideo.snippet.description
//                           .substring(0, 100)
//                           .replace(/\n/g, "<br />")}
//                         {singleVideo.snippet.description.length > 100 && (
//                           <>
//                             ...
//                             <button onClick={handleShowMore}>Show More</button>
//                           </>
//                         )}
//                       </h2>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End Description */}
//           {/* comment count  */}
//           <div className=" flex mt-4 ">
//             <h2 className=" text-2xl font-bold ">
//               {singleVideo.statistics.commentCount}
//             </h2>
//             <span className=" text-2xl font-bold ml-2">Comments</span>
//           </div>

//           {/* comments  */}
//           <div className="flex gap-4 flex-col mt-4">
//             {comments.length === 0 ? (
//               <p>No comments available.</p>
//             ) : (
//               comments.map((comment, index) => (
//                 <div key={index} className="flex gap-x-3">
//                   <Avatar
//                     round={true}
//                     size="40"
//                     src={
//                       comment.snippet.topLevelComment.snippet
//                         .authorProfileImageUrl
//                     }
//                     alt=""
//                   />
//                   <div className="flex flex-col">
//                     <div className="flex gap-x-2 items-center">
//                       <h3 className="text-base font-semibold text-black">
//                         {
//                           comment.snippet.topLevelComment.snippet
//                             .authorDisplayName
//                         }
//                       </h3>
//                       <span className="text-sm text-gray-700">
//                         {moment(
//                           comment.snippet.topLevelComment.snippet.publishedAt
//                         ).fromNow()}
//                       </span>
//                     </div>
//                     <div>
//                       <p className="font-normal">
//                         {comment.snippet.topLevelComment.snippet.textDisplay}
//                       </p>
//                     </div>
//                     <div className="flex gap-x-2 items-center mt-3">
//                       <AiOutlineLike className="size-6" />
//                       {comment.snippet.topLevelComment.snippet.likeCount}
//                       <BiDislike className="size-6" />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//           {/* end comments  */}
//         </div>
//         {/* Right Side */}
//         <div className="lg:w-[50%] w-full pl-3">
//           <div className="flex flex-col lg:w-full w-[90%] lg:pl-5 pl-4 my-5">
//             {recommendedVideos.map((video, index) => (
//               <div
//                 key={index}
//                 className="py-2 flex w-[95%] items-center justify-between"
//                 onClick={() => handleRecommendedClick(video.id)}
//               >
//                 <div className="flex">
//                   <div className="pr-3">
//                     <Link to={`/watch?v=${video.id}`}>
//                       <img
//                         className="aspect-video xl:w-[180px] lg:h-[150px] h-full w-[120px] rounded-lg"
//                         src={video.snippet.thumbnails.default.url}
//                         alt="Video thumbnail"
//                       />
//                     </Link>
//                   </div>
//                   <div className="flex-1 lg:w-[50%] lg:pl-5">
//                     <Link to={`/watch?v=${video.id}`}>
//                       <h3 className="text-black font-medium text-sm">
//                         {video.snippet.title}
//                       </h3>
//                     </Link>
//                     <Link to={`/channel/${video.snippet.channelId}`}>
//                       <h4 className="text-black/[0.85] font-normal">
//                         {video.snippet.channelTitle}
//                       </h4>
//                     </Link>
//                     <div className="text-sm">
//                       <Link to={`/watch?v=${video.id}`}>
//                         <span>
//                           {value_converter(video.statistics?.viewCount || 0)}{" "}
//                           views
//                         </span>
//                       </Link>
//                       &nbsp; &bull;&nbsp;
//                       <Link to={`/watch?v=${video.id}`}>
//                         <span>
//                           {moment(video.snippet.publishedAt).fromNow()}
//                         </span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Watch;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ApI_key, value_converter } from "../constant/youtube";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import moment from "moment";
import { useTheme } from "../ThemeContext"; // Import useTheme for dark mode

const Watch = () => {
  const { isDarkMode } = useTheme(); // Access dark mode state
  const [singleVideo, setSingleVideo] = useState(null);
  const [youtubeChannel, setYoutubeChannel] = useState(null);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const fetchVideoData = async (videoId) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${ApI_key}`
      );

      setSingleVideo(res?.data?.items[0]);
      return res?.data?.items[0];
    } catch (error) {
      console.error("Error fetching video data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getYoutubeChannel = async (channelId) => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${ApI_key}`
      );
      setYoutubeChannel(response?.data?.items[0]);
    } catch (error) {
      console.error("Error fetching channel data:", error);
    }
  };

  const getRecommendedVideos = async (keywords) => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${keywords}&key=${ApI_key}`
      );

      const videoIds = response.data.items
        .map((item) => item.id.videoId)
        .join(",");

      if (videoIds) {
        const statsResponse = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=statistics,snippet&maxResults=20&id=${videoIds}&key=${ApI_key}`
        );

        setRecommendedVideos(statsResponse.data.items);
      } else {
        setRecommendedVideos([]); // No videos found
      }
    } catch (error) {
      console.error("Error fetching recommended videos:", error);
    }
  };

  const fetchComments = async (videoId) => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${ApI_key}`
      );
      setComments(response.data.items); // Store the comments in state
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchComments(videoId);
    }
  }, [videoId]);

  useEffect(() => {
    fetchVideoData(videoId);
  }, [videoId]);

  useEffect(() => {
    if (singleVideo) {
      const channelId = singleVideo.snippet.channelId;
      getYoutubeChannel(channelId);
      const keywords = singleVideo.snippet.title
        .split(" ")
        .slice(0, 2)
        .join(" "); // Use title keywords for related videos
      getRecommendedVideos(keywords);
    }
  }, [singleVideo]);

  const handleRecommendedClick = (videoId) => {
    fetchVideoData(videoId);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!singleVideo || !youtubeChannel) {
    return <div>Video or Channel not found.</div>;
  }

  return (
    <div
      className={`w-full py-5 h-fit overflow-hidden mx-5 lg:mx-0 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full sm:px-5 lg:mx-5 pt-5 block lg:flex space-y-2 lg:space-x-2">
        {/* Left Side */}
        <div
          className={`min-w-[350px] sm:w-full w-full md:w-full lg:w-[70%] h-fit mr-5 mb-10 ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          {/* Video */}
          <iframe
            className="aspect-video min-w-full w-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* Title */}
          <div className="block lg:block w-full mt-5">
            <h1
              className={`lg:text-2xl text-sm md:text-lg font-bold ${
                isDarkMode ? "text-white" : "text-[#0f0f0f]/[0.95]"
              }`}
            >
              {singleVideo.snippet.title}
            </h1>
            <div className="justify-between block w-full md:flex lg:flex xl:flex items-center">
              {/* Avatar */}

              <div className="mt-4 w-fit flex md:w-[40%] lg:w-[45%] xl:flex">
                <Avatar
                  round={true}
                  size="40"
                  src={youtubeChannel.snippet.thumbnails.default.url}
                  alt=""
                />
                <div className="xl:block w-full block ml-2">
                  <h1
                    className={`text-sm font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {singleVideo.snippet.channelTitle}
                  </h1>
                  <span className={isDarkMode ? "text-gray-300" : ""}>
                    {value_converter(youtubeChannel.statistics.subscriberCount)}
                    <span className="font-normal text-sm mt-0">
                      &nbsp;subscribers
                    </span>
                  </span>
                </div>
                <div className="ml-2">
                  <button
                    className={`text-xs font-semibold ${
                      isDarkMode ? "bg-white text-black" : "bg-black text-white"
                    } px-3 py-2 rounded-full`}
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Profile Right */}
              <div className="flex items-center justify-between sm:justify-center sm:gap-5 md:gap-2 lg:gap-1 md:w-[40%] sm:w-[100%] lg:w-[50%]">
                <div
                  className={`flex items-center cursor-pointer ${
                    isDarkMode ? "bg-gray-700" : "bg-[#F2F2F2]"
                  } px-2 py-1 lg:px-2 lg:py-2 gap-3 rounded-full`}
                >
                  <AiOutlineLike className="size-4 " />
                  {value_converter(singleVideo.statistics.likeCount)}
                  <span className="text-gray-400"> | </span>
                  <BiDislike className="size-4" />
                </div>
                <div
                  className={`flex items-center cursor-pointer ${
                    isDarkMode ? "bg-gray-700" : "bg-[#F2F2F2]"
                  } px-2 py-1 lg:py-2 gap-3 lg:gap-2 rounded-full`}
                >
                  <PiShareFat className="size-4" />
                  <p className="font-medium text-xs lg:text-xs">Share</p>
                </div>
                <div
                  className={`flex items-center cursor-pointer lg:py-2 ${
                    isDarkMode ? "bg-gray-700" : "bg-[#F2F2F2]"
                  } px-2 py-1 lg:px-5 gap-3 lg:gap-2 rounded-full`}
                >
                  <TfiDownload className="size-4" />
                  <p className="font-medium text-xs lg:text-xs">Download</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* Description */}
            <div
              className={`mt-4 p-6 flex flex-col ${
                isDarkMode ? "bg-[#ffffff]/[10.0%] text-white" : "bg-gray-200"
              }`}
            >
              <div className="flex space-x-2 mb-4">
                <h2>
                  {value_converter(singleVideo.statistics.viewCount)} views
                </h2>
                <h3>
                  {moment(singleVideo.snippet.publishedAt).format(
                    "DD MMM YYYY"
                  )}
                </h3>
              </div>
              <div>
                <div>
                  {showMore ? (
                    <div>
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: singleVideo.snippet.description.replace(
                            /\n/g,
                            "<br />"
                          ),
                        }}
                      />
                      <button onClick={handleShowMore}>Show Less</button>
                    </div>
                  ) : (
                    <div>
                      <h2>
                        {singleVideo.snippet.description
                          .substring(0, 100)
                          .replace(/\n/g, "<br />")}
                        {singleVideo.snippet.description.length > 100 && (
                          <>
                            ...
                            <button onClick={handleShowMore}>Show More</button>
                          </>
                        )}
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* End Description */}
          {/* comment count  */}
          <div className=" flex mt-4 ">
            <h2 className=" text-2xl font-bold ">
              {singleVideo.statistics.commentCount}
            </h2>
            <span className=" text-2xl font-bold ml-2">Comments</span>
          </div>

          {/* comments  */}
          <div className="flex gap-4 flex-col mt-4">
            {comments.length === 0 ? (
              <p>No comments available.</p>
            ) : (
              comments.map((comment, index) => (
                <div key={index} className="flex gap-x-3">
                  <Avatar
                    round={true}
                    size="40"
                    src={
                      comment.snippet.topLevelComment.snippet
                        .authorProfileImageUrl
                    }
                    alt=""
                  />
                  <div className="flex flex-col">
                    <div className="flex gap-x-2 items-center">
                      <h3
                        className={`text-base font-semibold ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {
                          comment.snippet.topLevelComment.snippet
                            .authorDisplayName
                        }
                      </h3>
                      <span
                        className={`text-sm text-gray-700 ${
                          isDarkMode ? "text-white/[0.5]" : "text-black"
                        }`}
                      >
                        {moment(
                          comment.snippet.topLevelComment.snippet.publishedAt
                        ).fromNow()}
                      </span>
                    </div>
                    <div>
                      <p
                        className={`font-normal ${
                          isDarkMode ? "text-gray-300" : "text-black"
                        }`}
                      >
                        {comment.snippet.topLevelComment.snippet.textDisplay}
                      </p>
                    </div>
                    <div className="flex gap-x-2 items-center mt-3">
                      <AiOutlineLike className="size-6" />
                      {comment.snippet.topLevelComment.snippet.likeCount}
                      <BiDislike className="size-6" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* end comments  */}
        </div>
        {/* Right Side */}
        <div
          className={`lg:w-[50%] w-full pl-3 ${
            isDarkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          <div className="flex flex-col lg:w-full w-[90%] lg:pl-5 pl-4 my-5">
            {recommendedVideos.map((video, index) => (
              <div
                key={index}
                className={`py-2 flex w-[95%] items-center justify-between ${
                  isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
                onClick={() => handleRecommendedClick(video.id)}
              >
                <div className="flex">
                  <div className="pr-3">
                    <Link to={`/watch?v=${video.id}`}>
                      <img
                        className="aspect-video xl:w-[180px] lg:h-[150px] h-full w-[120px] rounded-lg"
                        src={video.snippet.thumbnails.default.url}
                        alt="Video thumbnail"
                      />
                    </Link>
                  </div>
                  <div className="flex-1 lg:w-[50%] lg:pl-5">
                    <Link to={`/watch?v=${video.id}`}>
                      <h3
                        className={`font-medium text-sm ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {video.snippet.title}
                      </h3>
                    </Link>
                    <Link to={`/channel/${video.snippet.channelId}`}>
                      <h4
                        className={`font-normal ${
                          isDarkMode ? "text-gray-300" : "text-black/[0.85]"
                        }`}
                      >
                        {video.snippet.channelTitle}
                      </h4>
                    </Link>
                    <div className="text-sm">
                      <Link to={`/watch?v=${video.id}`}>
                        <span>
                          {value_converter(video.statistics?.viewCount || 0)}{" "}
                          views
                        </span>
                      </Link>
                      &nbsp; &bull;&nbsp;
                      <Link to={`/watch?v=${video.id}`}>
                        <span>
                          {moment(video.snippet.publishedAt).fromNow()}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
