import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-black text-white px-28">
      <nav className="py-7 flex justify-between items-center border-b border-white/30">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730628326/audiophile_2_jqb5fx.svg"
            alt="audiophile logo"
            height={25}
            width={143}
          />
        </Link>
        <div className="uppercase flex items-center gap-10 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/headphones">Headphones</Link>
          <Link href="/speakers">Speakers</Link>
          <Link href="/earphones">Earphones</Link>
        </div>
        <Link href="/cart">
          <Image
            src="https://res.cloudinary.com/dxzq8zubp/image/upload/v1730628727/cart_fm8tja.svg"
            alt="cart logo"
            height={25}
            width={25}
          />
        </Link>
      </nav>
      {children}
    </header>
  );
};

export default Header;
