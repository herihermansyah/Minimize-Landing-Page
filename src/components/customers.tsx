"use client";
import Image from "next/image";
import React from "react";
import ButtonDirection from "./ui/button-direction";
import {motion} from "motion/react";

function Customers() {
  const clientsLogo = [
    {id: 1, src: "/ClientLogo1.svg"},
    {id: 2, src: "/ClientLogo2.svg"},
    {id: 3, src: "/ClientLogo3.svg"},
    {id: 4, src: "/ClientLogo4.svg"},
    {id: 5, src: "/ClientLogo5.svg"},
    {id: 6, src: "/ClientLogo6.svg"},
  ];
  return (
    <div className="bg-neutral-silver py-8">
      <div className="container xl:max-w-6xl mx-auto px-5 lg:px-0 flex flex-col lg:flex-row items-center gap-19.5">
        <motion.div
          initial={{x: -200, opacity: 0}}
          animate={{x: 0, opacity: 1}}
        >
          <Image
            src="/imagecus.svg"
            alt="image customer"
            width={200}
            height={200}
            loading="eager"
            className="w-[326px] h-[326px] rounded-[8px]"
          />
        </motion.div>

        <motion.div
          initial={{x: 200, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          className="flex flex-col gap-8 px-5 md:px-0 md:w-150 lg:w-187 lg:h-81"
        >
          <div className="flex flex-col gap-4">
            <p className="font-medium text-neutral-gray">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className="flex flex-col items-center md:items-start gap-2">
              <h4 className="text-[20px] leading-7 text-brand-primary font-semibold">
                Tim Smith
              </h4>
              <p className="text-neutral-l-gray">
                British Dragon Boat Racing Association
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="grid grid-cols-3 sm:grid-cols-6 items-center gap-10.25">
              {clientsLogo.map((item) => (
                <div className="w-12 h-12" key={item.id}>
                  <Image
                    src={item.src}
                    alt={item.src}
                    width={48}
                    height={48}
                    loading="eager"
                    className="w-12 h-12"
                  />
                </div>
              ))}
            </div>
            <div>
              <ButtonDirection title="Meet all customers" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Customers;
