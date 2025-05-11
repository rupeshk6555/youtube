// import React, { useEffect, useState } from "react";
// import { ApI_key, YOUTUBE_VIDEO_API } from "../constant/youtube";
// import axios from "axios";

// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setCategory, setHomeVideo } from "../utils/appSlice";
// import VideoCard from "./VideoCard";

// const VideoContainer = () => {
//   const { video = [], category } = useSelector((store) => store.app);
//   const dispatch = useDispatch();

//   const fetchYouTubeVideos = async () => {
//     try {
//       const res = await axios.get(YOUTUBE_VIDEO_API);
//       dispatch(setHomeVideo(res?.data?.items));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchVideosByCategory = async () => {
//     try {
//       const res = await axios.get(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${ApI_key}`
//       );

//       dispatch(setHomeVideo(res?.data?.items));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (category === "All") {
//       fetchYouTubeVideos();
//     } else {
//       fetchVideosByCategory();
//     }
//   }, [category]);

//   return (
//     <div className="my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-3">
//       {video.map((item, index) => {
//         if (!item) return null; // or return a default component
//         const uniqueKey = item.id?.videoId || item.id || index; // Ensure a unique key
//         return (
//           <Link to={`/watch?v=${item.id?.videoId || item.id}`} key={uniqueKey}>
//             <VideoCard item={item} />
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default VideoContainer;
import React, { useEffect, useState } from "react";
import { ApI_key, YOUTUBE_VIDEO_API } from "../constant/youtube";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setHomeVideo } from "../utils/appSlice";
import VideoCard from "./VideoCard";
import { useTheme } from "../ThemeContext";
import { BiErrorCircle } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";

const VideoContainer = () => {
  const { video = [], category } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchYouTubeVideos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await axios.get(YOUTUBE_VIDEO_API);
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.error("Error fetching videos:", error);
      setError("Failed to load videos. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchVideosByCategory = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${ApI_key}`
      );

      if (res?.data?.items?.length === 0) {
        setError(`No videos found for "${category}"`);
      } else {
        dispatch(setHomeVideo(res?.data?.items));
      }
    } catch (error) {
      console.error("Error fetching videos by category:", error);
      setError(
        `Failed to load videos for "${category}". Please try again later.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchYouTubeVideos();
    } else {
      fetchVideosByCategory();
    }
  }, [category]);

  // Loading state
  if (isLoading && video.length === 0) {
    return (
      <div
        className={`flex flex-col items-center justify-center h-64 w-full ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <FiLoader className="animate-spin text-4xl mb-4" />
        <p className="text-lg font-medium">Loading videos...</p>
      </div>
    );
  }

  // Error state
  if (error && video.length === 0) {
    return (
      <div
        className={`flex flex-col items-center justify-center h-64 w-full ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <BiErrorCircle className="text-red-500 text-4xl mb-4" />
        <p className="text-lg font-medium text-center">{error}</p>
        <button
          onClick={() =>
            category === "All" ? fetchYouTubeVideos() : fetchVideosByCategory()
          }
          className={`mt-4 px-4 py-2 rounded-lg ${
            isDarkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-800"
          }`}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Category title */}
      <h2
        className={`text-xl font-bold mb-4 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {category === "All" ? "Recommended Videos" : `${category} Videos`}
      </h2>

      {/* Videos grid */}
      <div className="my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-3">
        {video.map((item, index) => {
          if (!item) return null;
          const uniqueKey = item.id?.videoId || item.id || index;
          return (
            <Link
              to={`/watch?v=${item.id?.videoId || item.id}`}
              key={uniqueKey}
            >
              <VideoCard item={item} />
            </Link>
          );
        })}
      </div>

      {/* Show loading indicator when fetching more videos */}
      {isLoading && video.length > 0 && (
        <div
          className={`flex justify-center my-6 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <FiLoader className="animate-spin text-2xl" />
        </div>
      )}

      {/* No results message */}
      {!isLoading && video.length === 0 && !error && (
        <div
          className={`flex flex-col items-center justify-center h-64 w-full ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <p className="text-lg font-medium">
            No videos found for "{category}"
          </p>
          <button
            onClick={() => dispatch(setCategory("All"))}
            className={`mt-4 px-4 py-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            View All Videos
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
