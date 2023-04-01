import React from "react";

const Skills = () => {
  return (
    <div>
      <div>
        <h1 className="text-white text-center uppercase m-10">skills</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20">
          {/* skill 1 start */}
        <div className="p-5 m-5">
          <img
            src="/html.png"
            alt="html"
            height={100}
            width={100}
            className="mx-auto w-20 h-20 object-contain hover:-translate-y-2 hover:scale-105 duration-200"
          />
          <p className="mt-4 text-white text-center">Html</p>
        </div>
          {/* skill 1 end */}

          {/* skill 2 start */}
        <div>
        <div className="p-5  m-5">
          <img
            src="/css.png"
            alt="css"
            height={100}
            width={100}
            className="mx-auto  w-20 h-20 object-contain hover:-translate-y-2 hover:scale-105 duration-200"
          />
          <p className="mt-4 text-white text-center">CSS</p>
        </div>
        </div>
          {/* skill 2 end */}

          {/* skill 3 start */}
        <div>
        <div className="p-5 m-5">
          <img
            src="/js.png"
            alt="js"
            height={100}
            width={100}
            className="w-20 mx-auto h-20 object-contain hover:-translate-y-2 hover:scale-105 duration-200"
          />
          <p className="mt-4 text-white text-center">JavaScript</p>
        </div>
        </div>
          {/* skill 3 end */}

          {/* skill 4 start */}
        <div>
        <div className="p-5 m-5">
          <img
            src="/firebase.png"
            alt="firebase"
            height={100}
            width={100}
            className="w-20 h-20 mx-auto object-contain hover:-translate-y-2 hover:scale-105 duration-200"
          />
          <p className="mt-4 text-white text-center">FireBase</p>
        </div>
        </div>
          {/* skill 4 end */}

          {/* skill 5 start */}
        <div>
        <div className="p-5 m-5">
          <img
            src="/github1.png"
            alt="github"
            height={100}
            width={100}
            className="w-20 h-20 mx-auto object-contain hover:-translate-y-2 hover:scale-105 duration-200"
          />
          <p className="mt-4 text-white text-center">GitHub</p>
        </div>
        </div>
          {/* skill 5 end */}

          {/* skill 6 start */}
        <div>
        <div className="p-5 m-5">
          <img
            src="/nextjs.png"
            alt="next"
            height={100}
            width={100}
            className="w-20 h-20 mx-auto object-contain hover:-translate-y-2 hover:scale-105 duration-200"
          />
          <p className="mt-4 text-white text-center">Next</p>
        </div>
        </div>
          {/* skill 6 end */}

          {/* skill 7 start */}
        <div>
        <div className="p-5 m-5">
          <img
            src="/nodejs.png"
            alt="node"
            height={100}
            width={100}
            className="w-20 h-20 mx-auto object-contain hover:-translate-y-2 hover:scale-105 duration-200"
          />
          <p className="mt-4 text-white text-center">Node</p>
        </div>
        </div>
          {/* skill 7 end */}

          {/* skill 8 start */}
        <div>
        <div className="p-5 m-5">
          <img
            src="/react.png"
            alt="react"
            height={100}
            width={100}
            className="w-20 h-20 mx-auto object-contain hover:-translate-y-2 hover:scale-105 duration-200"
          />
          <p className="mt-4 text-white text-center">React</p>
        </div>
        </div>
          {/* skill 8 end */}
           {/* skill 9 start */}
        <div>
        <div className="p-5 m-5">
          <img
            src="/tailwind.png"
            alt="tailwind"
            height={100}
            width={100}
            className="w-20 h-20 mx-auto object-contain hover:-translate-y-2 hover:scale-105 duration-200"
          />
          <p className="mt-4 text-white text-center">TailWind</p>
        </div>
        </div>
          {/* skill 9end */}

           {/* skill 10 start */}
        <div>
        <div className="p-5 m-5">
          <img
            src="/css.png"
            alt="css"
            height={100}
            width={100}
            className="w-20 h-20 mx-auto object-contain hover:-translate-y-2 hover:scale-105 duration-200"
          />
          <p className="mt-4 text-white text-center">CSS</p>
        </div>
        </div>
          {/* skill 10 end */}
      </div>
    </div>
  );
};

export default Skills;
