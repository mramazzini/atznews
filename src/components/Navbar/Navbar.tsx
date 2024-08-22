import { NAVBAR_REM_HEIGHT } from "@/lib/global";
import ThemeController from "../Theme/ThemeController";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="navbar  w-full bg-base-300 rounded-b-3xl"
      style={{
        height: `${NAVBAR_REM_HEIGHT}rem`,
      }}
    >
      <div className="navbar-start"></div>
      <div className="navbar-center hidden lg:flex">
        <a className="btn btn-ghost text-xl ">
          <Image src="/logoNoText.png" alt="Logo" width={40} height={40} />
        </a>
      </div>
      <div className="navbar-end">
        <Link href="/listings" className="btn btn-ghost mx-2">
          Listings
        </Link>
        <Link href="/about" className="btn btn-ghost mx-2">
          About
        </Link>
        <Link href="/contact" className="btn btn-ghost mx-2">
          Contact
        </Link>
        <Link href="/" className="btn btn-primary mx-2">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
