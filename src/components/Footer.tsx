import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      className={`flex flex-wrap items-center w-full p-6 footer gap-7 grow justify-between ${GeistSans.className} border-b border-b-white border-opacity-10 max-w-[60rem] left-1/2 backdrop-blur-xl mx-auto`}
      style={{ borderTop: "1px solid #ffffff20" }}
    >
      <div className="footer-section1 flex flex-col gap-2">
        <div>
          <SiVercel size={25} />
        </div>
        <p className="text-sm  text-white">
          <span className=" opacity-75">Made with ❤️ by </span>
          <Link
            href="https://pro.ui.hextastudio.in"
            className="hover:opacity-100"
          >
            hextastudio/ui
          </Link>
        </p>
      </div>
      <div className="flex  gap-6">
        <div className="footer-section2">
          <ul className="flex flex-col gap-2 text-sm list-none">
            <p className="font-bold">EXPLORE</p>
            <li>
              <Link href="#" className="opacity-75 hover:opacity-100">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="opacity-75 hover:opacity-100">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" className="opacity-75 hover:opacity-100">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
