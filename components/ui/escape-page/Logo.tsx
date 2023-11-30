import React from "react";
import { lora } from "../fonts/fonts";

const Logo = () => {
  return (
    <span className={`${lora.className} font-style text-2xl text-white hover:opacity-90 cursor-pointer`}>
      Escape.
    </span>
  );
};

export default Logo;
