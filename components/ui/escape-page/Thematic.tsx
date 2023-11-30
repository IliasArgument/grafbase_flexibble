import Link from "next/link";
import React from "react";
import { lora } from "../fonts/fonts";
import ContainerWrapper from "../latouts/container-wrapper";

const links = [
  { path: "#", name: "Nature" },
  { path: "#", name: "Photography" },
  { path: "#", name: "Relaxation" },
  { path: "#", name: "Travel" },
];

const Thematic = () => {
  return (
    <section className="thematic">
      <ContainerWrapper>
        <nav>
          <ul
            className={`${lora.className} flexBetween gap-10 text-sm text-gray-300 mt-5 mb-5`}
          >
            {links.map((link) => (
              <li key={link.name} className="transition opacity-90 hover:opacity-100">
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </ContainerWrapper>
    </section>
  );
};

export default Thematic;
