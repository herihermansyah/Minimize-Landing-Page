"use client";

import Image from "next/image";
import React from "react";
import SectionTitle from "./ui/section-title";
import {motion} from "motion/react";

function Clients() {
  const clientsLogo = [
    {id: 1, src: "/ClientLogo1.svg"},
    {id: 2, src: "/ClientLogo2.svg"},
    {id: 3, src: "/ClientLogo3.svg"},
    {id: 4, src: "/ClientLogo4.svg"},
    {id: 5, src: "/ClientLogo5.svg"},
    {id: 6, src: "/ClientLogo6.svg"},
    {id: 7, src: "/ClientLogo7.svg"},
  ];
  return (
    <div className="flex flex-col gap-4 xl:max-w-6xl container mx-auto px-5 sm:px-0">
      <motion.div initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}}>
        <SectionTitle
          title="Our Clients"
          description="We have been working with some Fortune 500+ clients"
        />
      </motion.div>
      <motion.div
        initial={{y: 200, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        className="grid grid-cols-3 justify-items-center sm:flex items-center justify-between h-24.5"
      >
        {clientsLogo.map((item) => (
          <Image
            key={item.id}
            src={item.src}
            alt={item.src}
            width={48}
            height={48}
            loading="eager"
            className="w-12 h-12"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Clients;
