import React from "react";
import Heading from "./Heading";
import RecentCard from "./RecentCard";
import ContainerWrapper from "../latouts/container-wrapper";

const MostRecent = () => {
  return (
    <section className="most-recent bg-silver-mist">
      <ContainerWrapper>
        <Heading title="Most Recent" />
        <div className="grid grid-cols-3 gap-4 pt-6 pb-12">
          <RecentCard src="/escape/IMAGE.png" alt="image-sunny" />

          <RecentCard src="/escape/IMAGE-1.png" alt="image-sunny" />
          <RecentCard src="/escape/IMAGE-2.png" alt="image-sunny" />
          <RecentCard src="/escape/IMAGE-3.png" alt="image-sunny" />
          <RecentCard src="/escape/IMAGE-4.png" alt="image-sunny" />
          <RecentCard src="/escape/IMAGE-5.png" alt="image-sunny" />
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default MostRecent;
