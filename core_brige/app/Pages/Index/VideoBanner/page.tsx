import React from "react";

const VideoBanner = () => {
  return (
    <>
      <div className="video-banner">
        <div
          className="w-40 h-40 text-3xl mt-20 bg-white/1 backdrop-blur-[5px] text-white
             rounded-full flex justify-center items-center border-2 
             border-white cursor-pointer"
        >
          Play
        </div>
      </div>
    </>
  );
};

export default VideoBanner;
