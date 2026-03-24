"use client";
import React, {useState} from "react";
import Logo from "../logo";
import MainNavigation from "../ui/main-navigation";
import AuthAction from "../ui/auth-action";
import ToggleButton from "../ui/toggle-button";
import {IoMdClose} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";
import {motion} from "motion/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((v) => !v);
  };
  return (
    <div className="bg-neutral-silver sticky top-0 z-50">
      {/* this code for desktop */}
      <motion.div
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        className="container mx-auto flex items-center justify-between px-5 sm:px-0 py-4.75 xl:max-w-303.75"
      >
        <div>
          <Logo src="/Logo.svg" />
        </div>
        <div className="block lg:hidden">
          <ToggleButton
            onClick={handleOpen}
            click={isOpen}
            iconOf={<IoMdClose />}
            iconOn={<GiHamburgerMenu />}
          />
        </div>

        <div className="hidden lg:block">
          <MainNavigation />
        </div>
        <div className="hidden lg:block">
          <AuthAction />
        </div>
      </motion.div>

      {/* this code for app look */}
      <div
        className={`lg:hidden flex flex-col gap-5 transition-all duration-300 ease-in-out items-center -z-10 absolute 
                    ${isOpen ? "top-17" : "-top-100"} left-1/2 w-full -translate-x-1/2
        `}
      >
        <div className="bg-neutral-silver flex flex-col gap-5 w-full items-center py-5">
          <MainNavigation />
          <AuthAction />
        </div>
      </div>
    </div>
  );
}

export default Header;
