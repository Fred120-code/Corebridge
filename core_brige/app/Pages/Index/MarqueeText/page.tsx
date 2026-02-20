"use client";

import Image from "next/image";
import startImg from "@/public/Images/Stars-spage.svg";

const MarqueeTextData = [
  {
    id: 1,
    title: "Analysis",
    img: "startImg",
  },
  {
    id: 2,
    title: "Tracking",
    img: "startImg",
  },
  {
    id: 3,
    title: "Marketing",
    img: "startImg",
  },
  {
    id: 4,
    title: "Research",
    img: "startImg",
  },
  {
    id: 5,
    title: "Analysis",
    img: "startImg",
  },
  {
    id: 6,
    title: "Trancking",
    img: "startImg",
  },
  {
    id: 7,
    title: "Marketing",
    img: "startImg",
  },
  {
    id: 8,
    title: "Analysis",
    img: "startImg",
  },
];

const MarqueeText = () => {
  return (
    <>
        <div className="marquee-wrapper py-20 pt-10">
            <div className="marquee-track">
                {
                    [...MarqueeTextData, ...MarqueeTextData].map((item, index) => (
                         <div className="marquee-item" key={index}>
                            <Image 
                                alt="startImg"
                                src={startImg}
                                width={80}
                                height={80}
                                className="me-6"
                            />
                            <span className="text-7xl md:text-8xl font-medium">
                                {item.title}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
};

export default MarqueeText;
