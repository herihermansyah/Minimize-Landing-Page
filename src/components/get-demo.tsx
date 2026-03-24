"use client"
import React from "react";
import {BsArrowRight} from "react-icons/bs";
import ButtonAction from "./ui/button-action";
import {motion} from "motion/react";

function GetDemo() {
  return (
    <div className="bg-neutral-silver">
      <motion.div
        initial={{y: -200, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        className="flex text-center py-8 flex-col items-center gap-8 container mx-auto lg:max-w-6xl px-5 lg:px-0"
      >
        <h2 className="lg:w-221.75 font-semibold text-4xl leading-11.25 sm:text-5xl md:text-[64px] sm:leading-19 text-neutral-black">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <ButtonAction title="Get a Demo" icon={<BsArrowRight />} />
      </motion.div>
    </div>
  );
}

export default GetDemo;
