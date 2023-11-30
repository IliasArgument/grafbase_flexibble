import React from "react";
import { oxygen } from "../fonts/fonts";

const Heading = ({ title }: { title: string }) => {
  return (
    <h2 className={`${oxygen.className} text-xl	black-50 text-center pt-10`}>
      {title}
    </h2>
  );
};

export default Heading;
