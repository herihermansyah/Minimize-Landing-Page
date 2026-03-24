import Image from "next/image";
import React from "react";
type LogoProps = {
  src: string;
  imageClass?: string;
};

function Logo({src, imageClass = "w-[154.49px] h-6"}: LogoProps) {
  return (
    <div>
      <Image
        src={src}
        alt="logo"
        width={100}
        height={100}
        loading="eager"
        className={imageClass}
      />
    </div>
  );
}

export default Logo;
