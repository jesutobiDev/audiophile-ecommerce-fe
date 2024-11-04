"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

interface FooterLink {
  text: string;
  href: string;
  active: boolean;
}

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [footerLinks, setFooterLinks] = useState<FooterLink[]>([
    { text: "Home", href: "/", active: false },
    { text: "Headphones", href: "/headphones", active: false },
    { text: "Speakers", href: "/speakers", active: false },
    { text: "Earphones", href: "/earphones", active: false },
  ]);

  useEffect(() => {
    setFooterLinks((prevLinks) =>
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
    <footer className="bg-black py-7 px-10 lg:px-40 text-white flex flex-col items-center md:items-start gap-7 2xl:container 2xl:mx-auto">
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-0 lg:justify-between lg:items-center lg:w-full">
        <Image
          src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730628326/audiophile_2_jqb5fx.svg"
          alt="audiophile logo"
          height={25}
          width={143}
        />
        <ul className="uppercase flex flex-col md:flex-row items-center gap-4 md:gap-10 text-sm font-medium tracking-wide">
          {footerLinks.map((link) => (
            <li
              key={link.text}
              onClick={() => handleLinkClick(link.href)}
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                link.active
                  ? "text-primary"
                  : "text-white hover:text-primary-hover"
              }`}
            >
              {link.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between">
        <p className="opacity-50 text-sm w-full lg:w-1/2 text-center md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <div className="items-center justify-end gap-5 hidden lg:flex">
          <FaFacebookSquare className="text-3xl hover:text-primary transition-all duration-300 ease-in-out cursor-pointer" />
          <FaTwitter className="text-3xl hover:text-primary transition-all duration-300 ease-in-out cursor-pointer" />
          <FaInstagram className="text-3xl hover:text-primary transition-all duration-300 ease-in-out cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-7 md:gap-0 items-center w-full md:flex-row md:items-center md:justify-between">
        <p className="opacity-50 text-sm md:w-3/4 lg:w-1/2">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex items-center md:justify-end gap-5 lg:hidden">
          <FaFacebookSquare className="text-2xl lg:text-3xl hover:text-primary transition-all duration-300 ease-in-out cursor-pointer" />
          <FaTwitter className="text-2xl lg:text-3xl hover:text-primary transition-all duration-300 ease-in-out cursor-pointer" />
          <FaInstagram className="text-2xl lg:text-3xl hover:text-primary transition-all duration-300 ease-in-out cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
