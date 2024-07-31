// import React from "react";

// const Recommended = () => {
//   return (
//     <div className="  mr-16 flex border border-red-600 mt-12">
//       <div className="block">
//         <div className=" flex ">
//           <img
//             className="aspect-video lg:w-[250px] lg:h-[94px] rounded-lg "
//             src="https://i.ytimg.com/vi/Z1QuBXVrUHU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq-HKDTOeXopRW3h7osmSOlNTacQ"
//           />
//         </div>
//         <div className=" pl-3 flex ">
//           <h3 className=" text-black font-medium text-sm flex">
//             Sound of Salaar | Music By Ravi Basrur | Hombale Films
//           </h3>
//           <div>
//             <h4 className="text-black/[0.85] font-normal">Hombale Films</h4>

//             <div>
//               <span>18M views</span> &bull;<span> 7 months ago</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Recommended;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ApI_key, value_converter } from "../constant/youtube";
// import moment from "moment";
// import { Link } from "react-router-dom";

// const Recommended = () => {
//   return (
//     <div className="flex flex-col  lg:w-full w-[90%] lg:pl-5 pl-4  my-5 ">
//       {relatedVideos.map((video, index) => (
//         <div
//           key={index}
//           className=" py-2 flex w-[95%] items-center justify-between "
//         >
//           <div className="flex">
//             <div className="pr-3">
//               <Link to={`/watch?v=${video.id}`}>
//                 <img
//                   className="aspect-video xl:w-[180px] lg:h-[150px]  h-full w-[120px] rounded-lg"
//                   // src={video.snippet.thumbnails.default.url}
//                   src={thumbnails}
//                   alt="Video thumbnail"
//                 />
//               </Link>
//             </div>
//             <div className="flex-1 lg:w-[50%] lg:pl-5 ">
//               <Link to={`/watch?v=${video.id}`}>
//                 <h3 className="text-black font-medium text-sm ">{title}</h3>
//               </Link>
//               <Link to={`/channel/${video.snippet.channelId}`}>
//                 <h4 className="text-black/[0.85] font-normal">
//                   {channelTitle}
//                 </h4>
//               </Link>
//               <div className=" text-sm">
//                 <Link to={`/watch?v=${video.id}`}>
//                   <span>{viewCount} views</span>
//                 </Link>
//                 &nbsp; &bull;&nbsp;
//                 <Link to={`/watch?v=${video.id}`}>
//                   <span>{publishedAt}</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Recommended;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ApI_key, value_converter } from "../constant/youtube";
// import moment from "moment";
// import { Link } from "react-router-dom";

// const Recommended = ({ item }) => {
//   const [relatedVideos, setRelatedVideos] = useState([]);

//   const getRelatedVideos = async () => {
//     if (!item) return; // <--- Add this check
//     try {
//       const res = await axios.get(
//         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=in&key=${ApI_key}`
//       );
//       console.log(res);
//       setRelatedVideos(res.data.items);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getRelatedVideos();
//   }, [item]);

//   if (!item) return null; // <--- Add this check

//   return (
//     <div className="flex flex-col">
//       {relatedVideos.map((video, index) => (
//         <div key={index} className="mr-10 flex mt-3">
//           <div className="flex">
//             <div className="pr-3">
//               <Link to={`/watch?v=${video.id.videoId}`}>
//                 <img
//                   className="aspect-video lg:w-[170px] lg:h-[98px] rounded-lg"
//                   src={video.snippet.thumbnails.default.url}
//                   alt="Video thumbnail"
//                 />
//               </Link>
//             </div>
//             <div className="flex-1 pl-3">
//               <Link to={`/watch?v=${video.id.videoId}`}>
//                 <h3 className="text-black font-medium text-sm pt-2">
//                   {video.snippet.title}
//                 </h3>
//               </Link>
//               <Link to={`/watch?v=${video.id.videoId}`}>
//                 <h4 className="text-black/[0.85] font-normal">
//                   {video.snippet.channelTitle}
//                 </h4>
//               </Link>
//               <div className=" text-sm">
//                 <Link to={`/watch?v=${video.id.videoId}`}>
//                   <span>
//                     {value_converter(video.statistics.viewCount)} views
//                   </span>
//                 </Link>
//                 &nbsp; &bull;&nbsp;
//                 <Link to={`/watch?v=${video.id.videoId}`}>
//                   <span>{moment(video.snippet.publishedAt).fromNow()}</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Recommended;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ApI_key } from "../constant/youtube";
// import moment from "moment";
// import { Link } from "react-router-dom";

// const Recommended = () => {
//   const [videos, setVideos] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&locale=in&maxResults=50&regionCode=in&key=${ApI_key}`);
//         setVideos(response.data.items);
//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     fetchVideos();
//   }, []);

//   return (
//     <div className="flex flex-col  lg:w-full w-[90%] lg:pl-5 pl-4  my-5 ">
//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         videos.map((video, index) => (
//           <div
//             key={index}
//             className=" py-2 flex w-[95%] items-center justify-between "
//           >
//             <div className="flex">
//               <div className="pr-3">
//                 <Link to={`/watch?v=${video.id}`}>
//                   <img
//                     className="aspect-video xl:w-[180px] lg:h-[150px]  h-full w-[120px] rounded-lg"
//                     src={video.snippet.thumbnails.default.url}
//                     alt="Video thumbnail"
//                   />
//                 </Link>
//               </div>
//               <div className="flex-1 lg:w-[50%] lg:pl-5 ">
//                 <Link to={`/watch?v=${video.id}`}>
//                   <h3 className="text-black font-medium text-sm ">{video.snippet.title}</h3>
//                 </Link>
//                 <Link to={`/channel/${video.snippet.channelId}`}>
//                   <h4 className="text-black/[0.85] font-normal">
//                     {video.snippet.channelTitle}
//                   </h4>
//                 </Link>
//                 <div className=" text-sm">
//                   <Link to={`/watch?v=${video.id}`}>
//                     <span>{video.statistics.viewCount} views</span>
//                   </Link>
//                   &nbsp; &bull;&nbsp;
//                   <Link to={`/watch?v=${video.id}`}>
//                     <span>{moment(video.snippet.publishedAt).fromNow()}</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Recommended;

// Recommended.jsx

// Recommended.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ApI_key, value_converter } from "../constant/youtube";

const Recommended = ({ videoId, onVideoSelect }) => {
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendedVideos = async () => {
      if (!videoId) return; // Do not fetch if there is no videoId

      try {
        // Using the YouTube API to get related videos based on the videoId
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=${videoId}&key=${ApI_key}`
        );

        // Check if response contains items
        if (response.data.items) {
          setRecommendedVideos(response.data.items);
        } else {
          throw new Error("No recommended videos found.");
        }
      } catch (error) {
        console.error("Failed to fetch recommended videos:", error.message);
        setError("Failed to fetch recommended videos");
      }
    };

    fetchRecommendedVideos();
  }, [videoId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (recommendedVideos.length === 0) {
    return <div>Loading recommended videos...</div>; // Show a loading message
  }

  return (
    <div className="flex flex-col lg:w-full w-[90%] lg:pl-5 pl-4 my-5">
      {recommendedVideos.map((video, index) => (
        <div
          key={index}
          className="py-2 flex w-[95%] items-center justify-between cursor-pointer"
          onClick={() => onVideoSelect(video.id.videoId)} // Use videoId when selecting
        >
          <div className="flex">
            <div className="pr-3">
              <Link to={`/watch?v=${video.id.videoId}`}>
                <img
                  className="aspect-video xl:w-[180px] lg:h-[150px] h-full w-[120px] rounded-lg"
                  src={video.snippet.thumbnails.default.url}
                  alt="Video thumbnail"
                />
              </Link>
            </div>
            <div className="flex-1 lg:w-[50%] lg:pl-5">
              <Link to={`/watch?v=${video.id.videoId}`}>
                <h3 className="text-black font-medium text-sm">
                  {video.snippet.title}
                </h3>
              </Link>
              <Link to={`/channel/${video.snippet.channelId}`}>
                <h4 className="text-black/[0.85] font-normal">
                  {video.snippet.channelTitle}
                </h4>
              </Link>
              <div className="text-sm">
                <Link to={`/watch?v=${video.id.videoId}`}>
                  <span>
                    {/* You may not have view count in the search API response */}
                    {value_converter(video.statistics.viewCount || 0)} views
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommended;
