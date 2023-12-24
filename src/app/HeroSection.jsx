"use client";

import Image from "next/image";
import profiler from "../../public/Images/profiler.jpg";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 mt-4 md:mx-8 lg:grid-cols-12 lg:mx-6">
        <div className="col-span-8 place-self-center text-center md:text-left lg:text-left">
          <p className="text-4xl font-bold mb-3 lg:text-6xl">
            I'm{" "}
            <TypeAnimation
              sequence={[
                "Theodore Glad to see you!",
                1000,
                "a full-stack developer",
                2000,
                "expert in problem-solving",
                3000,
                "expert in database management",
                4000,
                "skilled in database management",
                5000,
                "version control expert",
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-slate-400 to-red-300"
              style={{ display: "inline-block" }}
            />
          </p>

          <p className="text-lg lg:text-xl mb-4">
            My zeal is geared towards creating top-notch applications that are
            robust in terms of security, user-friendly, visually stunning, and
            accessible. Look through some of my work and experience! If you like
            what you see and have a project you need to build, don’t hesitate to
            contact me.
          </p>
          <button
            type="button"
            className=" w-60 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-red-500/50 font-medium rounded-lg text-lg px-5 py-2.5 mb-2"
          >
            Resume
          </button>
        </div>
        <div className="col-span-4 place-self-center mt-4 ">
          <Image
            src={profiler}
            height={250}
            width={250}
            alt="profle image"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
