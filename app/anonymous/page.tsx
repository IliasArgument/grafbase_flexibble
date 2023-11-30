import React from "react";
// import EscapeTravel from './escape-page/page';
import Hero from "@/components/ui/escape-page/Hero";
import Image from "next/image";
import { lora } from "@/components/ui/fonts/fonts";
import ContainerWrapper from "@/components/ui/latouts/container-wrapper";
import Link from "next/link";
import Thematic from "@/components/ui/escape-page/Thematic";
import Featured from "@/components/ui/escape-page/Featured";
import MostRecent from "@/components/ui/escape-page/MostRecent";
import Footer from "@/components/ui/escape-page/Footer";

type MyObjectType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Anonymous = async (props: any) => {
  return (
    <div className="w-full">
      <Hero />
      <Thematic />
      <Featured />
      <MostRecent />
      <Footer />
    </div>
  );
};

export default Anonymous;
