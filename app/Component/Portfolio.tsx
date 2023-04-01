import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="m-10 ">
        <div>
          <h1 className="text-white text-center uppercase m-10">Portfolio</h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 mx-auto w-full gap-24">
          {/* card 1 start*/}
          <div className="shadow-2xl shadow-gray-900 h-65 hover:scale-105 duration-75">
            <div>
              <img
                src={"/Screenshot.png"}
                height={250}
                width={280}
                className="rounded-t-md mx-auto mb-6"
              />
            </div>
            <div className="flex mx-auto my-auto justify-center px-5 pb-7 ">
              <button className="p-4 text-white text-xl font-bold hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 text-white  text-xl font-bold hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card 1 end */}

          {/* card 2 start */}
          <div className="shadow-2xl shadow-gray-900 h-65 hover:scale-105 duration-75">
            <div>
              <img
                src={"/chakrauipricing.png"}
                height={250}
                width={280}
                className="rounded-t-md mx-auto mb-4 h-52"
              />
            </div>
            <div className="flex mx-auto my-auto justify-center px-5 pt-4 pb-7 ">
              <button className="p-4 text-white text-xl font-bold hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 text-white  text-xl font-bold hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card 2 end */}

          {/* card 3 start */}
          <div className="shadow-2xl shadow-gray-900 h-65 hover:scale-105 duration-75">
            <div>
              <img
                src={"/chakrauidao.png"}
                height={200}
                width={280}
                className="rounded-t-md mx-auto mb-4 h-56"
              />
            </div>
            <div className="flex mx-auto my-auto justify-center px-5 pt-4 pb-7 ">
              <button className="p-4 text-white text-xl font-bold hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 text-white  text-xl font-bold hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card 3 end */}

          {/* card 4 start */}
          <div className="shadow-2xl shadow-gray-900 h-65 hover:scale-105 duration-75">
            <div>
              <img
                src={"/chakrauidao2.png"}
                height={200}
                width={280}
                className="rounded-t-md mx-auto mb-4 h-52 "
              />
            </div>
            <div className="flex mx-auto my-auto justify-center px-5 pt-4 pb-7 ">
              <button className="p-4 text-white text-xl font-bold hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 text-white  text-xl font-bold hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card 4 end */}

          {/* card 5 start */}

          {/* card 5 end */}

          {/* card 6 start */}
          {/* card 6 end */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
