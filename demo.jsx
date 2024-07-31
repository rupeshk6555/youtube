<div
  className={` ${
    open ? "" : ""
  } w-[32%] md:w-[30%] sm:w-[30%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] flex text-black p-4 overflow-y-scroll overflow-x-hidden cursor-pointer my-3`}
>
  <div className=" block lg:flex">
    <div>
      <iframe
        className={`${open ? " " : " "}  rounded-lg`}
        // src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h1 className=" font-bold text-lg my-3 ">
        {singleVideo?.snippet?.title}
      </h1>
      <div className=" flex items-center  justify-between ">
        <div className="flex items-center justify-between w-[35%] ">
          <div className="flex">
            <Avatar
              round={true}
              size="50"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
            />
            <h1 className="  font-semibold flex ml-4 ">
              {singleVideo?.snippet?.channelTitle}
            </h1>
          </div>
          <button className=" font-medium bg-black text-white px-5 py-2 rounded-full">
            Subscribe
          </button>
        </div>
        <div className=" flex items-center justify-between  w-[45%] mt-2">
          <div className=" flex items-center cursor-pointer bg-[#F2F2F2]  px-4 py-2 gap-5 rounded-full">
            <AiOutlineLike size={22} />
            <span className=" text-gray-400">|</span>
            <BiDislike size={22} />
          </div>
          <div className=" flex items-center cursor-pointer bg-[#F2F2F2]  px-4 py-2 gap-2 rounded-full">
            <PiShareFat size={22} />
            <p className=" font-medium text-lg">Share</p>
          </div>
          <div className=" flex items-center cursor-pointer bg-[#F2F2F2]  px-4 py-2 gap-2 rounded-full">
            <TfiDownload size={22} />
            <p className=" font-medium text-lg">Download</p>
          </div>
        </div>
      </div>
    </div>
    right side
    {/* right side  */}
    <div className=" w-auto  mx-10 border border-gray-300 rounded-lg h-fit p-4">
      <div className=" flex justify-between items-center p-5 ">
        <h1>Top chat</h1>
        <BsThreeDotsVertical />
      </div>
      <div className=" overflow-y-auto h-[320px]">
        <LiveChat />
      </div>
      <div className="items-center  border-t border-gray-300 p-2 ">
        <div className=" flex gap-2 items-center">
          <div>
            <Avatar
              round={true}
              size="35"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
            />
          </div>
          <input
            className=" bg-gray-200 outline-none text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-[92%] px-3 py-1    dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            type="text"
            placeholder="Chat"
          />
          <div className=" bg-gray-200 cursor-pointer rounded-full p-2 ">
            <IoMdSend size={25} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
