"use client"
import React from "react";
import SectionTitle from "./ui/section-title";
import Image from "next/image";
import ButtonDirection from "./ui/button-direction";
import {motion} from "motion/react";

function CommunityUpdate() {
  const imageCommunity = [
    {
      id: 1,
      src: "/image/image1.svg",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      src: "/image/image1.svg",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: 3,
      src: "/image/image1.svg",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];
  return (
    <div className="container xl:max-w-6xl mx-auto px-5 lg:px-0 flex flex-col gap-4">
      <motion.div initial={{y: -200, opacity: 0}} animate={{y: 0, opacity: 1}}>
        <SectionTitle
          title="Caring is the new marketing"
          description="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who s joining the community, read about how our community are increasing their membership income and lots more.​"
          descriptionClass="px-5 lg:px-0 lg:w-[628px] lg:h-[72px] mx-auto"
        />
      </motion.div>
      <motion.div
        initial={{y: 200, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        className="flex flex-col lg:flex-row items-center justify-between gap-4 "
      >
        {imageCommunity.map((item) => (
          <div className="md:w-92 md:h-91.5 relative" key={item.id}>
            <div>
              <Image
                src={item.src}
                alt={item.title}
                width={200}
                height={200}
                loading="eager"
                className="w-92 h-71.5 rounded-lg"
              />
            </div>
            <div className="bg-white absolute bottom-0 translate-x-1/2 right-1/2 px-4 py-4 rounded-lg shadow-8 flex flex-col gap-4 items-center">
              <h4 className="w-50 sm:w-71.25 lg:h-21 text-center text-[20px] leading-7 font-semibold text-neutral-gray">
                {item.title}
              </h4>
              <ButtonDirection title="Readmore" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CommunityUpdate;
