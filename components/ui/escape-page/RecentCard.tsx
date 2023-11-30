import React from "react";
import Image from "next/image";
import { lora, oxygen } from "../fonts/fonts";

const RecentCard = ({ src, alt }: { src: string; alt: string }) => {
  // 300 150
  return (
    <div className="bg-white">
      <Image src={src} alt={alt} width="460" height="280" />
      <h3 className={`${lora.className} text-dark-abyss text-left text-base	pt-4 pb-2 px-3`}>
        Awaken Early
      </h3>
      <p className={`${lora.className} text-gray-steel text-left text-sm pb-3 opacity-75 px-3`}>Not all those who wander are lost.</p>
      <div className="w-full h-[1px] bg-light-pearl"></div>

      <div
        className={`${oxygen.className} flexBetween text-xs text-gray-steel mt-3 px-3 pb-3`}
      >
        <div className="flexStart gap-4">
          <Image
            src="/escape/avatar-1.png"
            alt="featured-sky"
            width="26"
            height="26"
          />
          <span>Mat Vogels</span>
        </div>

        <span>9/25/2015</span>
      </div>
    </div>
  );
};

export default RecentCard;
