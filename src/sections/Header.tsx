"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavLink {
  text: string;
  href: string;
  active: boolean;
}

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [navLinks, setNavLinks] = useState<NavLink[]>([
    { text: "Home", href: "/", active: false },
    { text: "Headphones", href: "/headphones", active: false },
    { text: "Speakers", href: "/speakers", active: false },
    { text: "Earphones", href: "/earphones", active: false },
  ]);

  useEffect(() => {
    setNavLinks(prevLinks =>
      prevLinks.map(link => ({
        ...link,
        active: link.href === pathname,
      }))
    );
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    router.push(href);
  };

  return (
    <header className="bg-black text-white">
      <nav className="py-7 flex justify-between items-center border-b border-white/30 px-10 lg:px-0 lg:mx-28">
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
          {navLinks.map(link => (
            <li
              key={link.text}
              onClick={() => handleLinkClick(link.href)}
              className={`cursor-pointer transition-all duration-300 ease-in-out ${
                link.active ? "text-primary" : "text-white hover:text-primary-hover"
              }`}
            >
              {link.text}
            </li>
          ))}
        </ul>
        <div>
          <Image
            src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730628727/cart_fm8tja.svg"
            alt="cart icon"
            height={25}
            width={25}
          />
        </div>
      </nav>
      {children}
    </header>
  );
};

export default Header;
