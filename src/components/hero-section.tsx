"use client";
import React from "react";
import {motion} from "motion/react";
import ButtonAction from "./ui/button-action";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="bg-neutral-silver">
      <div className="xl:max-w-6xl container mx-auto flex flex-col-reverse lg:flex-row px-5 sm:px-0 justify-between items-center gap-26 py-23.75">
        <motion.div
          initial={{x: -300, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-[64px] font-semibold leading-19 text-neutral-d-gray">
              Lessons and insights{" "}
              <span className="text-brand-primary">from 8 years</span>
            </h2>
            <p className="text-neutral-gray">
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <div>
            <ButtonAction title="Register" />
          </div>
        </motion.div>
        <motion.div initial={{x: 300, opacity: 0}} animate={{x: 0, opacity: 1}}>
          <Image
            src="/Illustration.svg"
            alt="hero ilustration page"
            width={100}
            height={100}
            loading="eager"
            className="w-152.5 h-102"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
