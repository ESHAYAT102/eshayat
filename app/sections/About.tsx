import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody.tsx";
import AnimatedTitle from "../animations/AnimatedTitle.tsx";
import Image from "next/image";

const About = () => {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2020;

  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
      id="about"
    >
      <div className="mx-auto flex w-[100%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Eshayat Al-Wasiu."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={`I'm Eshayat Al-Wasiu, a passionate frontend web developer and a designer. With ${yearsOfExperience} years of experience crafting digital experiences, I specialize in transforming ideas into engaging and functional websites. My skill set encompasses frontend development, web design, and graphics design, allowing me to deliver comprehensive solutions tailored to my clients' needs. I'm providing service worldwide.`}
            />

            <AnimatedBody
              delay={0.1}
              text="Currently, I'm focusing on my skills. I'm always eager to collaborate on new projects and explore innovative technologies and new ideas."
            />

            <AnimatedBody
              delay={0.2}
              text="I'm always open for new opportunities and collaborations. Let's bring your vision to life!"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-screen">
        <Image
          className="mx-auto mt-12 w-[600px] rounded-xl"
          src="/CV.png"
          alt="CV"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default About;
