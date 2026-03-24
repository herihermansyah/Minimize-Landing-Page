import React from "react";
import Logo from "./logo";
import Image from "next/image";
import Link from "next/link";

function CompanyInfo() {
  const socialMedia = [
    {id: 1, src: "/social/SocialIcons.svg", href: "/", alt: "social media"},
    {id: 2, src: "/social/SocialIcons2.svg", href: "/", alt: "social media"},
    {id: 3, src: "/social/SocialIcons3.svg", href: "/", alt: "social media"},
    {id: 4, src: "/social/SocialIcons4.svg", href: "/", alt: "social media"},
  ];
  return (
    <div className="flex flex-col gap-10 lg:w-87.5">
      <div>
        <Logo src="/Logo2.svg" imageClass="w-[191px] h-[29px]" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[14px] leading-5 text-neutral-silver">
          Copyright © 2020 Nexcent ltd.
        </h3>
        <h3 className="text-[14px] leading-5 text-neutral-silver">
          All rights reserved
        </h3>
      </div>
      <div className="flex items-center gap-4">
        {socialMedia.map((item) => (
          <div key={item.id}>
            <Link href={item.href}>
              <Image
                src={item.src}
                alt={item.alt}
                width={50}
                height={50}
                loading="eager"
                className="w-8 h-8"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyInfo;
