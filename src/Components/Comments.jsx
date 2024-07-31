import axios from "axios";
import React, { useEffect } from "react";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { ApI_key } from "../constant/youtube";

const Comments = () => {
  
  
  return (
    <div className=" flex gap-4 flex-col mt-4">
      <div className=" flex gap-x-3">
        <Avatar round={true} size="40" src="" alt="" />
        <div className=" flex flex-col">
          <div className=" flex gap-x-2 items-center">
            <h3 className="text-base font-semibold text-black">Madhaba_Dora</h3>
            <span className=" text-sm text-gray-700">1 day ago</span>
          </div>
          <div>
            <p className=" font-normal">
              mein kon kon yeh movies dekh rahe hooo??{" "}
            </p>
          </div>
          <div className=" flex gap-x-2 items-center mt-3">
            <AiOutlineLike className="size-6" /> 10
            <BiDislike className="size-6" />
          </div>
        </div>
      </div>
      <div className=" flex gap-x-3">
        <Avatar round={true} size="40" src="" alt="" />
        <div className=" flex flex-col">
          <div className=" flex gap-x-2 items-center">
            <h3 className="text-base font-semibold text-black">Madhaba_Dora</h3>
            <span className=" text-sm text-gray-700">1 day ago</span>
          </div>
          <div>
            <p className=" font-normal">
              mein kon kon yeh movies dekh rahe hooo??{" "}
            </p>
          </div>
          <div className=" flex gap-x-2 items-center mt-3">
            <AiOutlineLike className="size-6" /> 10
            <BiDislike className="size-6" />
          </div>
        </div>
      </div>
      <div className=" flex gap-x-3">
        <Avatar round={true} size="40" src="" alt="" />
        <div className=" flex flex-col">
          <div className=" flex gap-x-2 items-center">
            <h3 className="text-base font-semibold text-black">Madhaba_Dora</h3>
            <span className=" text-sm text-gray-700">1 day ago</span>
          </div>
          <div>
            <p className=" font-normal">
              mein kon kon yeh movies dekh rahe hooo??{" "}
            </p>
          </div>
          <div className=" flex gap-x-2 items-center mt-3">
            <AiOutlineLike className="size-6" /> 10
            <BiDislike className="size-6" />
          </div>
        </div>
      </div>
      <div className=" flex gap-x-3">
        <Avatar round={true} size="40" src="" alt="" />
        <div className=" flex flex-col">
          <div className=" flex gap-x-2 items-center">
            <h3 className="text-base font-semibold text-black">Madhaba_Dora</h3>
            <span className=" text-sm text-gray-700">1 day ago</span>
          </div>
          <div>
            <p className=" font-normal">
              mein kon kon yeh movies dekh rahe hooo??{" "}
            </p>
          </div>
          <div className=" flex gap-x-2 items-center mt-3">
            <AiOutlineLike className="size-6" /> 10
            <BiDislike className="size-6" />
          </div>
        </div>
      </div>
      <div className=" flex gap-x-3">
        <Avatar round={true} size="40" src="" alt="" />
        <div className=" flex flex-col">
          <div className=" flex gap-x-2 items-center">
            <h3 className="text-base font-semibold text-black">Madhaba_Dora</h3>
            <span className=" text-sm text-gray-700">1 day ago</span>
          </div>
          <div>
            <p className=" font-normal">
              mein kon kon yeh movies dekh rahe hooo??{" "}
            </p>
          </div>
          <div className=" flex gap-x-2 items-center mt-3">
            <AiOutlineLike className="size-6" /> 10
            <BiDislike className="size-6" />
          </div>
        </div>
      </div>
      <div className=" flex gap-x-3">
        <Avatar round={true} size="40" src="" alt="" />
        <div className=" flex flex-col">
          <div className=" flex gap-x-2 items-center">
            <h3 className="text-base font-semibold text-black">Madhaba_Dora</h3>
            <span className=" text-sm text-gray-700">1 day ago</span>
          </div>
          <div>
            <p className=" font-normal">
              mein kon kon yeh movies dekh rahe hooo??{" "}
            </p>
          </div>
          <div className=" flex gap-x-2 items-center mt-3">
            <AiOutlineLike className="size-6" /> 10
            <BiDislike className="size-6" />
          </div>
        </div>
      </div>
      <div className=" flex gap-x-3">
        <Avatar round={true} size="40" src="" alt="" />
        <div className=" flex flex-col">
          <div className=" flex gap-x-2 items-center">
            <h3 className="text-base font-semibold text-black">Madhaba_Dora</h3>
            <span className=" text-sm text-gray-700">1 day ago</span>
          </div>
          <div>
            <p className=" font-normal">
              mein kon kon yeh movies dekh rahe hooo??{" "}
            </p>
          </div>
          <div className=" flex gap-x-2 items-center mt-3">
            <AiOutlineLike className="size-6" /> 10
            <BiDislike className="size-6" />
          </div>
        </div>
      </div>
      <div className=" flex gap-x-3">
        <Avatar round={true} size="40" src="" alt="" />
        <div className=" flex flex-col">
          <div className=" flex gap-x-2 items-center">
            <h3 className="text-base font-semibold text-black">Madhaba_Dora</h3>
            <span className=" text-sm text-gray-700">1 day ago</span>
          </div>
          <div>
            <p className=" font-normal">
              mein kon kon yeh movies dekh rahe hooo??{" "}
            </p>
          </div>
          <div className=" flex gap-x-2 items-center mt-3">
            <AiOutlineLike className="size-6" /> 10
            <BiDislike className="size-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
