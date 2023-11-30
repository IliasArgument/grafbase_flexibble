import React from "react";
import ContainerWrapper from "../latouts/container-wrapper";
import Logo from "./Logo";
import { lora, oxygen } from "../fonts/fonts";
import Link from "next/link";

const links = [
  { path: "#", name: "Home" },
  { path: "#", name: "Categories" },
  { path: "#", name: "About" },
  { path: "#", name: "Contact" },
];

const Hero = () => {
  return (
    <div className="hero-escape">
      <ContainerWrapper>
        <header className="w-full flex justify-between items-center pt-5">
          <Logo />
          <nav>
            <ul
              className={`${oxygen.className} flex items-center	 gap-10 text-sm text-white uppercase not-italic`}
            >
              {links.map((link) => (
                <li key={link.name} className="hover:opacity-90">
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <h1
          className={`${lora.className} text-white text-5xl mt-[7.5rem] mb-[1.25rem]`}
        >
          Let's do it together.
        </h1>
        <p className={`${oxygen.className} text-light-white-600 text-xl	p-0`}>
          We travel the world in search of stories. Come along for the ride.
        </p>
        <button className="normilize-btn mt-[1.25rem] mb-[7.5rem] bg-orange-rustic text-white hover:opacity-90 transition">
          View Latest Posts
        </button>
      </ContainerWrapper>
    </div>
  );
};

export default Hero;
