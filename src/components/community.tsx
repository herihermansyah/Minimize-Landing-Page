"use client";
import React from "react";
import SectionTitle from "./ui/section-title";
import Image from "next/image";
import {motion} from "motion/react";

function Community() {
  const clientIcon = [
    {
      id: 1,
      src: "/Icon.svg",
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 2,
      src: "/Icon1.svg",
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 3,
      src: "/Icon2.svg",
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <div className="container xl:max-w-6xl mx-auto flex flex-col gap-4 mt-10 sm:mt-0 px-5 sm:px-0">
      <motion.div initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}}>
        <SectionTitle
          titleClass="max-w-[550px] mx-auto leading-[44px]"
          title="Manage your entire community in a single system"
          description="Who is Nextcent suitable for?"
        />
      </motion.div>
      <motion.div
        initial={{y: -200, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        className="grid lg:grid-cols-3 gap-5 sm:gap-12.5 md:gap-20 xl:gap-31.75"
      >
        {clientIcon.map((item) => (
          <div
            key={item.id}
            className="px-7.25 rounded-[10px] py-6 flex flex-col gap-2 shadow-2"
          >
            <div className="lg:w-61.25 lg:h-36 mx-auto flex flex-col gap-4 items-center">
              <Image
                src={item.src}
                alt={item.src}
                width={50}
                height={50}
                loading="eager"
                className="w-16.25 h-14"
              />
              <h3 className="text-[28px] leading-9 font-bold text-neutral-d-gray text-center">
                {item.title}
              </h3>
            </div>
            <p className="text-center max-w-62.75 mx-auto text-[14px] leading-5 text-neutral-gray">
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Community;
