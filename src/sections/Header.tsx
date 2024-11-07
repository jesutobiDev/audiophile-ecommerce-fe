"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { RiCloseLargeFill } from "react-icons/ri";
import Cart from "./Cart";

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

  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

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
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Disable/enable scrolling when the menu is open/closed
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  // Disable/enacle scrolling when the cart is open/closed
  useEffect(() => {
    if (cartOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [cartOpen]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  }

  return (
    <header className="bg-black text-white relative">
      <nav className="h-20 w-screen flex justify-between items-center border-b border-white/30 px-5 md:px-10 lg:px-40">
        {/* Menu Icon */}
        <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
          <Image
            src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730631671/menu_kuoaxt.svg"
            alt="menu icon"
            height={25}
            width={25}
          />
        </div>
        {/* Logo */}
        <Image
          src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730628326/audiophile_2_jqb5fx.svg"
          alt="audiophile logo"
          height={25}
          width={143}
        />
        {/* Navigation Links */}
        <ul
          className={`uppercase fixed top-0 left-0 h-screen w-full md:w-1/2 lg:h-auto lg:w-auto flex p-5 py-5 md:p-10 md:py-10 lg:p-0 bg-black lg:bg-transparent flex-col lg:flex-row z-20 lg:static lg:items-center gap-10 text-base lg:text-sm font-medium tracking-wide transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <RiCloseLargeFill className="ml-auto text-3xl cursor-pointer lg:hidden" onClick={toggleMenu} />
          {navLinks.map((link) => (
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
        {/* Cart Icon */}
        <div className="cursor-pointer" onClick={toggleCart}>
          <Image
            src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730628727/cart_fm8tja.svg"
            alt="cart icon"
            height={25}
            width={25}
          />
        </div>
      </nav>
      <Cart cartOpen={cartOpen} />
      {children}
    </header>
  );
};

export default Header;
