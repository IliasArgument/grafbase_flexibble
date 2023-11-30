import React from "react";
import { oxygen } from "../fonts/fonts";
import Form from "./Form";
import ContainerWrapper from "../latouts/container-wrapper";
import Logo from "./Logo";
import Link from "next/link";

const links = [
  { path: "#", name: "Home" },
  { path: "#", name: "Categories" },
  { path: "#", name: "About" },
  { path: "#", name: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-[url('/escape/footer.png')]">
      <h3
        className={`${oxygen.className} text-2xl text-light-pearl text-center pt-10 pb-3`}
      >
        Stay in Touch
      </h3>
      <div className="w-[200px] h-[1px] bg-silver-mist mb-4 mx-auto"></div>
      <Form />
      <div className="bg-dark-navy py-4">
        <ContainerWrapper>
          <div className="flexBetween">
            <Logo />
            <nav>
              <ul
                className={`${oxygen.className} flex items-center gap-5 text-xs text-white uppercase not-italic`}
              >
                {links.map((link) => (
                  <li className="hover:opacity-90" key={link.name}>
                    <Link href={link.path}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </ContainerWrapper>
      </div>
    </footer>
  );
};

export default Footer;
