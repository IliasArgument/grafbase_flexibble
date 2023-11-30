import React from "react";
import ContainerWrapper from "../latouts/container-wrapper";
import Heading from "./Heading";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <section className="featured bg-silver-mist">
      <ContainerWrapper>
        <Heading title="Featured Posts" />
        <div className="pt-10 flex gap-5">
          <FeaturedCard src={"/escape/post-1.png"} alt={"featured-sky"} />
          <FeaturedCard src={"/escape/post-2.png"} alt={"featured-night"} />
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default Featured;
