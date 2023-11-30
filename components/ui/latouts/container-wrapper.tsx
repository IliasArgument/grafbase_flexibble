import React from "react";

const ContainerWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="laptop:w-[940px] ml-auto mr-auto pl-5 pr-5 text-center">{children}</div>;
};

export default ContainerWrapper;
