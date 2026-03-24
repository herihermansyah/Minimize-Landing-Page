import Link from "next/link";
import React from "react";

type MenuNavigationProps<T> = {
  data: T[];
  href?: (item: T) => string;
  title: (item: T) => string;
  subtitle: string;
};

function MenuNavigation<T>({
  data,
  href,
  title,
  subtitle,
}: MenuNavigationProps<T>) {
  return (
    <nav aria-label="footer menu" className="flex flex-col gap-5">
      <h4 className="text-white font-semibold text-[20px] leading-7">
        {subtitle}
      </h4>
      <div>
        <ul className="flex flex-col gap-1.25">
          {data.map((item, index) => (
            <li key={index} className="w-40">
              <Link href={href?.(item) ?? ""}>
                <span className="text-neutral-silver text-[14px] leading-5">
                  {title(item)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MenuNavigation;
