"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useState } from "react";

type NavItem = {
  nav: string;
  link: string;
};

function Navbar() {
  const navItem: NavItem[] = [
    {
      nav: "Home",
      link: "/",
    },
    {
      nav: "Skill",
      link: "/skill",
    },
    {
      nav: "Projects",
      link: "/projects",
    },
    {
      nav: "About",
      link: "/about",
    },
  ];

  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(true);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className="sticky top-0 z-50">
      <div className=" w-[100%] h-[12vh] bg-[#141c27] shadow-md">
        <div className=" flex h-full justify-between items-center mx-auto w-[90%]">
          <div className=" flex items-center justify-between w-full  h-[100%] mx-auto text-white">
            <h1 className="text-lg font-bold flex flex-[0.6]">
              WEB
              <span className="  text-yellow-500">DEV</span>
            </h1>
            <ul className=" flex justify-center items-center gap-6">
              {navItem.map((item) => (
                <li className="nav-link" key={item.nav}>
                  <Link href={"/#"}>{item.nav}</Link>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={openNav}>
            <Bars3Icon className="h-6 w-6 text-white cursor-pointer md:hidden" />
          </button>
        </div>
      </div>

      <div
        className={`${
          nav ? "translate-x-0" : "translate-x-[100%]"
        } fixed transition-all transform ease-in-out duration-500 top-0 right-0 bottom-0 w-[80vw] h-[100vh] block md:hidden`}
      >
        <ul className=" flex flex-col p-12 bg-[#141c27] h-full gap-4 z-50">
          {navItem.map((item) => (
            <li className="nav-link-mobile" key={item.nav}>
              <Link href={"/#"}>{item.nav}</Link>
            </li>
          ))}
        </ul>
        <button onClick={closeNav}>
          <XMarkIcon className=" h-6 w-6 text-white font-semibold absolute top-[2rem] right-[2rem] " />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
