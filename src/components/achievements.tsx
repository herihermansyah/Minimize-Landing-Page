"use client";
import Image from "next/image";
import React from "react";
import {motion} from "motion/react";
function Achievements() {
  const achievementsLogo = [
    {
      id: 1,
      src: "/achievements/achievementicon.svg",
      number: "2,245,341",
      label: "Members",
    },
    {
      id: 2,
      src: "/achievements/achievementicon2.svg",
      number: "46,328",
      label: "Clubs",
    },
  ];

  const achievementsLogo2 = [
    {
      id: 1,
      src: "/achievements/achievementicon3.svg",
      number: "828,867",
      label: "Event Bookings",
    },
    {
      id: 2,
      src: "/achievements/achievementicon4.svg",
      number: "1,926,436",
      label: "Payments",
    },
  ];
  return (
    <div className="bg-neutral-silver py-16">
      <div className="px-5 lg:px-0 flex flex-col lg:flex-row items-center gap-18 justify-between container xl:max-w-6xl mx-auto">
        <motion.div
          initial={{x: -200, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          className="px-5 lg:px-0 lg:w-135 lg:h-30 flex flex-col gap-2"
        >
          <h3 className="text-[36px] leading-11 font-semibold text-neutral-d-gray px-5 lg:px-0 lg:w-102 lg:h-22">
            Helping a local{" "}
            <span className="text-brand-primary">business reinvent itself</span>
          </h3>
          <p className="px-5 lg:px-0 text-[16px] leading-6 text-gray-900">
            We reached here with our hard work and dedication
          </p>
        </motion.div>
        <motion.div
          initial={{x: 200, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          className="flex flex-col gap-20 sm:gap-10"
        >
          <div className="flex flex-col sm:flex-row gap-20 sm:gap-7.5 items-center">
            {achievementsLogo.map((item) => (
              <div
                className="w-63.75 h-15 flex flex-col sm:flex-row gap-4 items-center"
                key={item.id}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  loading="eager"
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <div className="flex flex-col">
                  <span className="text-[28px] leading-9 font-bold text-neutral-d-gray">
                    {item.number}
                  </span>
                  <span className="text-[16px] leading-6 text-neutral-gray">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-20 sm:gap-7.5 items-center">
            {achievementsLogo2.map((item) => (
              <div
                className="w-63.75 h-15 flex flex-col sm:flex-row  sm:gap-4 items-center"
                key={item.id}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  loading="eager"
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <div className="flex flex-col">
                  <span className="text-[28px] leading-9 font-bold text-neutral-d-gray">
                    {item.number}
                  </span>
                  <span className="text-[16px] leading-6 text-neutral-gray">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Achievements;
