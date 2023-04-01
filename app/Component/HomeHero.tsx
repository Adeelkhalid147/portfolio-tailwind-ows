import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const HomeHero = () => {
  {/* mx-auto se data screen k center mai ata h */}
  return (
    <section className=" max-w-4xl mx-auto flex flex-col md:flex-row mt-5 ">
      {/* left start */}
      <div className="p-5 max-w-lg mt-10 md:mt-40">
        <h1>i am a full stack developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam
          iste dolores optio iusto error voluptate praesentium? Aperiam dolorum
          cupiditate animi, nisi odio quis laudantium incidunt in perspiciatis
          labore ducimus?
        </p>

        <button className=" flex items-center group px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
          Profile
          {/* smooth rotation k liye duration 200 use kren gy.
          group likhne se button k khe b cursur ho ga to icon rotate kre ga
          hover ko grop se k us k parient ko b group likhna zrori h
          */}
          <MdKeyboardArrowRight
            size={20}
            className=" group-hover:rotate-90 duration-200"
          />
        </button>
      </div>
      {/* left End */}

      
      {/* Right statr */}
      <div>
        <img
          src="/adeel.jpeg"
          alt="unkw"
          height={200}
          width={200}
          className="md:w-full w-1/2 mx-auto"
        />
      </div>
    </section>
  );
};

export default HomeHero;
