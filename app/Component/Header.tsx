"use client"

import React from "react";
import { useState } from "react";
import {RxCross1} from "react-icons/rx"
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section className="bg-gray-300">
      <div className="flex justify-between p-5 items-center">
        <h1 className="font-autographadeel m-3 text-white">Adeel khalid</h1>
        <ul className=" m-7 md:flex hidden ">
          <li className="mx-7 text-2xl  font-adeel text-gray-400 hover:scale-150 duration-200">
            Home
          </li>
          <li className=" mx-7 text-2xl  font-adeel text-gray-400 hover:scale-150 duration-200">
            About
          </li>
          <li className="mx-7 text-2xl  font-adeel text-gray-400 hover:scale-150 duration-200">
            Contact
          </li>
          <li className="mx-7 text-2xl  font-adeel text-gray-400 hover:scale-150 duration-200">
            Portfolio
          </li>
          <li className=" text-2xl  font-adeel text-gray-400 hover:scale-150 duration-200">
            Skills
          </li>
        </ul>
        <div
          className="pr-5 md:hidden z-20"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
         {toggle ? <GiHamburgerMenu size={30} /> : <RxCross1 size={20}/> }
        </div>



        {/* overlay start black screen on navbar */}
        {!toggle?
        <div className="fixed top-0 left-0 bg-blue-300 h-screen text-red-600 w-full flex items-center justify-center">
        <ul className=" m-7 md:flex text-white ">
          <li className="mx-7 mt-3 text-2xl  font-adeel text-gray-400 ">
            Home
          </li>
          <li className=" mx-7  mt-3 text-2xl  font-adeel text-gray-400">
            About
          </li>
          <li className="mx-7 mt-3 text-2xl  font-adeel text-gray-400 ">
            Contact
          </li>
          <li className="mx-7 mt-3 text-2xl  font-adeel text-gray-400 ">
            Portfolio
          </li>
          <li className="mx-7 mt-3 text-2xl  font-adeel text-gray-400 ">
            Skills
          </li>
        </ul>
        </div>
        : null}
        {/* End overlay */}
      </div>
    </section>
  );
};

export default Header;
