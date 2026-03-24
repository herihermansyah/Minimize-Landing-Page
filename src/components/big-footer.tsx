"use client";
import React from "react";
import CompanyInfo from "./company-info";
import MenuNavigation from "./ui/menu-navigation";
import Image from "next/image";
import {motion} from "motion/react";

const companyMenu = [
  {title: "About us", href: "/"},
  {title: "Blog", href: "/"},
  {title: "Contact us", href: "/"},
  {title: "Pricing", href: "/"},
  {title: "Testimonials", href: "/"},
];

const supportMenu = [
  {title: "Help Center", href: "/"},
  {title: "Terms of service", href: "/"},
  {title: "Legal", href: "/"},
  {title: "Privacy policy", href: "/"},
  {title: "Status", href: "/"},
];

function BigFooter() {
  return (
    <div className="bg-neutral-black py-16">
      <motion.div
        initial={{y: 200, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        className="container mx-auto px-5 lg:px-0 xl:max-w-6xl flex flex-col gap-10 lg:flex-row xl:gap-31.25 lg:justify-between items-start lg:items-center"
      >
        <div>
          <CompanyInfo />
        </div>
        <div className="flex flex-col md:flex-row items-start gap-7.5">
          <MenuNavigation
            subtitle="Company"
            data={companyMenu}
            title={(item) => item.title}
            href={(item) => item.href}
          />
          <MenuNavigation
            subtitle="Support"
            data={supportMenu}
            title={(item) => item.title}
            href={(item) => item.href}
          />
          <div className="flex flex-col gap-6">
            <h4 className="text-[20px] leading-7 text-white font-semibold">
              Stay up to date
            </h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-lg border-none text-white bg-gray-600 w-63.75 h-10 px-3"
              />
              <div className="absolute top-3 right-3">
                <Image
                  src="/send.svg"
                  alt="send icon"
                  width={50}
                  height={50}
                  loading="eager"
                  className="w-4.5 h-4.5"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BigFooter;
