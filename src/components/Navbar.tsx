import { Menu, MenuItem, MenuDivider } from "@/components/hexta-ui/Menu";
import { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";

import { FaHome, FaPhone, FaRocket, FaUser } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={`flex justify-between fixed top-0 py-[1rem] px-[2rem] w-full border-b border-b-white border-opacity-10 max-w-[60rem] left-1/2 backdrop-blur-xl -translate-x-1/2 items-center ${GeistSans.className}  z-[999999]`}
      >
        <div>
          <SiVercel size={25} />
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button
              className="p-[4px] hover:bg-white hover:bg-opacity-10 items-center justify-center transition-all opacity-80 hover:opacity-100 rounded-md hidden  max-[650px]:flex"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m6 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <Menu
              className="max-[650px]:flex hidden w-fit"
              onOpen={toggleMenu}
              onClose={toggleMenu}
              isOpen={menuOpen}
            >
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaHome /> Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaUser /> About
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaRocket /> Projects
                </Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Link
                  href="#"
                  className="flex items-center gap-3 h-full w-full"
                >
                  <FaPhone /> Contact
                </Link>
              </MenuItem>
            </Menu>
          </div>
          <ul className="flex items-center justify-center text-[14px] gap-7 max-[650px]:hidden">
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="opacity-80 hover:opacity-100 hover:underline transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
