import React from "react";
import {BsGithub} from "react-icons/bs"
import {FaLinkedin} from "react-icons/fa"
import {AiFillMediumSquare} from "react-icons/ai"
import Link from "next/link";
const Socialicons = () => {
  return (
    <div>
      {/* top right bottom fixed lgne k bd chlti h jse k neche Linkedin k cla mai dia h */}
      <Link href={"https://linkedin.com/"} target={"_blank"}>
      <div className="  fixed bg-gray-600 justify-between text-zinc-50 top-[30vh] w-36 px-5 py-3 rounded-r-md flex gap-2 items-center text-xl ml-[-92px] hover:ml-0 duration-200">
        Linkedin
        <FaLinkedin size={25} />
      </div>
      </Link>

      <Link href={"https://github.com/"} target={"_blank"}>
      <div className="fixed bg-gray-600 text-zinc-50  justify-between top-[40vh] w-36 px-5 py-2 rounded-r-md flex gap-4 items-center text-xl ml-[-90px] hover:ml-0 duration-200">
        Github
        <BsGithub size={35}/>
      </div>
      </Link>

      <Link href={"https://medium.com"} target={"_blank"}>
      <div className="fixed bg-gray-600 text-zinc-50 top-[50vh]  justify-between w-36 px-5 py-3 rounded-r-md flex gap-2 items-center text-xl ml-[-92px] hover:ml-0 duration-200">
        Medium
        <AiFillMediumSquare size={25}/>
      </div>
      </Link>
    </div>
  );
};

export default Socialicons;
