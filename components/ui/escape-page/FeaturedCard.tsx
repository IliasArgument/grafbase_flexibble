import React from "react";
import { lora, oxygen } from "../fonts/fonts";
import Image from "next/image";

const FeaturedCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative">
      <Image src={src} alt={alt} width="460" height="280" />
      <div className="w-full p-5 absolute left-0 bottom-0">
        <h3 className={`${lora.className} text-left text-white text-2xl`}>
          The Road Ahead
        </h3>
        <p
          className={`${oxygen.className} text-left text-white text-sm	text-light-white-600 opacity-70 mt-2 mb-4`}
        >
          The road ahead might be paved - it might not be.
        </p>
        <div
          className={`${oxygen.className} flexBetween text-xs text-light-white-600`}
        >
          <div className="flexStart gap-4">
            <span>
              <Image
                src="/escape/avatar-1.png"
                alt="featured-sky"
                width="26"
                height="26"
              />
            </span>
            <span>Mat Vogels</span>
          </div>
          <span>September 25, 2015</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
