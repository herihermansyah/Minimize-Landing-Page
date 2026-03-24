"use client"
import Image from "next/image";
import React from "react";
import ButtonAction from "./ui/button-action";
import {motion} from "motion/react";

type UnlockProps = {
  image: string;
  title: string;
  description: string;
};
function Unlock({image, title, description}: UnlockProps) {
  return (
    <div className="px-5 lg:px-0 flex flex-col lg:flex-row container xl:max-w-6xl mx-auto justify-between items-center gap-12.25">
      <motion.div initial={{x: -200, opacity: 0}} animate={{x: 0, opacity: 1}}>
        <Image
          src={image}
          alt="rafiki icon"
          width={200}
          height={200}
          loading="eager"
          className="w-110.5 h-108.25"
        />
      </motion.div>
      <motion.div
        initial={{x: 200, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        className="px-5 lg:w-165.25 lg:h-66.5 flex flex-col gap-8"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-[36px] leading-11 text-neutral-d-gray font-semibold">
            {title}
          </h3>
          <p className="text-[14px] leading-5 text-neutral-gray">
            {description}
          </p>
        </div>
        <div>
          <ButtonAction title="Learn More" />
        </div>
      </motion.div>
    </div>
  );
}

export default Unlock;
