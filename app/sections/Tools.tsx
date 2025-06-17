import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiFigma,
  SiNotion,
  SiSpotify,
  SiTailwindcss,
  SiReactrouter,
  SiFirebase,
  SiMongodb,
  SiVercel,
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
      id="tools"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"TOOLS I USE."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-[100%] justify-center lg:max-w-[1200px]">
          <div className="mb-10 flex w-[100vw] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[100vw]">
            <AnimatedBody delay={0.2} text="Frontend" />
            <div>
              <AnimatedTools
                className="grid grid-cols-10 gap-12"
                delay={0.2}
                stepSize={0.1}
                iconSize={50}
              >
                <SiTypescript size={50} />
                <SiJavascript size={50} />
                <SiReact size={50} />
                <SiReactrouter size={50} />
                <SiTailwindcss size={50} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100vw] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[100vw]">
            <AnimatedBody delay={0.3} text="Backend & Servers" />
            <div>
              <AnimatedTools
                className="grid grid-cols-10 gap-12"
                delay={0.3}
                stepSize={0.1}
                iconSize={50}
              >
                <SiNodedotjs size={50} />
                <SiExpress size={50} />
                <SiFirebase size={50} />
                <SiMongodb size={50} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100vw] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[100vw]">
            <AnimatedBody delay={0.4} text="Others" />
            <div>
              <AnimatedTools
                className="grid grid-cols-10 gap-12"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                <SiGithub size={50} />
                <SiGit size={50} />
                <SiVercel size={50} />
                <SiFigma size={50} />
                <SiNotion size={50} />
                <SiSpotify size={50} />
              </AnimatedTools>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
