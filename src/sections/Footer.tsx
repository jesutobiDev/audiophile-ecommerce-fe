"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavLink {
  text: string;
  href: string;
  active: boolean;
}

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [navLinks, setNavLinks] = useState<NavLink[]>([
    { text: "Home", href: "/", active: false },
    { text: "Headphones", href: "/headphones", active: false },
    { text: "Speakers", href: "/speakers", active: false },
    { text: "Earphones", href: "/earphones", active: false },
  ]);

  useEffect(() => {
    setNavLinks((prevLinks) =>
      prevLinks.map((link) => ({
        ...link,
        active: link.href === pathname,
      }))
    );
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    router.push(href);
  };
  return (
    <footer className="bg-black py-7 px-10 lg:px-28 text-white flex flex-col gap-7">
      <nav className="flex justify-between items-center">
        <div className="lg:hidden">
          <Image
            src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730631671/menu_kuoaxt.svg"
            alt="menu icon"
            height={25}
            width={25}
          />
        </div>
        <Image
          src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730628326/audiophile_2_jqb5fx.svg"
          alt="audiophile logo"
          height={25}
          width={143}
        />
        <ul className="uppercase lg:flex items-center gap-10 text-sm font-medium hidden tracking-wide">
          {navLinks.map((link) => (
            <li
              key={link.text}
              onClick={() => handleLinkClick(link.href)}
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                link.active ? "text-primary" : "text-white"
              }`}
            >
              {link.text}
            </li>
          ))}
        </ul>
      </nav>
      <div className="">
        <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
      </div>
      <p className="">Copyright 2021. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
