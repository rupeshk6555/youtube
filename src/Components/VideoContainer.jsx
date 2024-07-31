import React, { useEffect, useState } from "react";
import { ApI_key, YOUTUBE_VIDEO_API } from "../constant/youtube";
import axios from "axios";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setHomeVideo } from "../utils/appSlice";

const VideoContainer = () => {
  const { video = [], category } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const fetchYouTubeVideos = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideosByCategory = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${ApI_key}`
      );

      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchYouTubeVideos();
    } else {
      fetchVideosByCategory();
    }
  }, [category]);

  return (
    <div className="my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-3">
      {video.map((item, index) => {
        if (!item) return null; // or return a default component
        const uniqueKey = item.id?.videoId || item.id || index; // Ensure a unique key
        return (
          <Link to={`/watch?v=${item.id?.videoId || item.id}`} key={uniqueKey}>
            <VideoCart item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
