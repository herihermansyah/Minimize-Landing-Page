import Link from "next/link";
import React from "react";

function MainNavigation() {
  const mainMenu = [
    {id: 1, title: "Home"},
    {id: 2, title: "Service"},
    {id: 3, title: "Feature"},
    {id: 4, title: "Product"},
    {id: 5, title: "Testimonial"},
    {id: 6, title: "FAQ"},
  ];
  return (
    <nav aria-label="main menu navitagiton">
      <ul className="flex flex-col gap-5 lg:flex-row items-center lg:gap-12.5 font-medium leading-6 text-[#18191F]">
        {mainMenu.map((item) => (
          <li key={item.id}>
            <Link href="/">{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNavigation;
