import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);

  const [navBg, setNavBg] = React.useState("#1e293b");
  const [linkColor, setLinkColor] = React.useState("#f8fafc");
  const router = useRouter();

  React.useEffect(() => {
    if (
      router.asPath === "/project-manager" ||
      router.asPath === "/movie-project" ||
      router.asPath === "/image-finder" ||
      router.asPath === "/food-ui-app"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#1e293b");
      setLinkColor("#1f2937");
    }
  }, [router]);

  React.useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: navBg }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-lg shadow-slate-900 z-[100]"
          : "fixed w-full h-20 shadow-slate-900 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <p className="font-bold text-xl cursor-pointer text-slate-50 px-2">
            Victor Duran
          </p>
        </Link>
        <div className="hidden md:flex md:justify-end">
          <Link href="/#about">
            <p className="px-6 cursor-pointer text-slate-50 text-xl font-bold">
              About
            </p>
          </Link>
          <Link href="/#skills">
            <p className="px-6 cursor-pointer text-slate-50 text-xl font-bold">
              Skills
            </p>
          </Link>
          <Link href="/#projects">
            <p className="px-6 cursor-pointer text-slate-50 text-xl font-bold">
              Projects
            </p>
          </Link>
          <Link href="/#contact">
            <p className="px-6 cursor-pointer text-slate-50 text-xl font-bold">
              Contact
            </p>
          </Link>
        </div>
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <AiOutlineMenu
            className="text-slate-50 text-xl cursor-pointer"
            size={30}
          />
        </div>
      </div>

      <div
        // onClick={() => setMenuOpen(false)}
        className={
          menuOpen
            ? `md:hidden fixed top-0 left-0 h-screen w-full bg-black/70`
            : ""
        }
      >
        <div
          className={
            menuOpen
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-800 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <p className="font-bold uppercase text-2xl cursor-pointer text-slate-50 transition-colors px-2">
                Menu
              </p>
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-full bg-slate-50 shadow-lg shadow-slate-900 p-3 cursor-pointer"
              >
                <AiOutlineClose size={20} className="text-slate-800" />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4"></div>
            <div className="uppercase flex flex-col">
              <ul>
                <div onClick={() => setMenuOpen(!menuOpen)}>
                  <Link href="/">
                    <li className="px-2 py-4 cursor-pointer text-slate-50 transition-colors text-xl">
                      Home
                    </li>
                  </Link>
                </div>
                <div onClick={() => setMenuOpen(!menuOpen)}>
                  <Link href="#projects">
                    <li className="px-2 py-4 cursor-pointer text-slate-50 transition-colors text-xl">
                      Projects
                    </li>
                  </Link>
                </div>
                <div onClick={() => setMenuOpen(!menuOpen)}>
                  <Link href="#about">
                    <li className="px-2 py-4 cursor-pointer text-slate-50 transition-colors text-xl">
                      About
                    </li>
                  </Link>
                </div>
                <div onClick={() => setMenuOpen(!menuOpen)}>
                  <Link href="#contact">
                    <li className="px-2 py-4 cursor-pointer text-slate-50 transition-colors text-xl">
                      Contact
                    </li>
                  </Link>
                </div>
              </ul>

              <div className="pt-40">
                <p className="font-bold uppercase text-2xl text-slate-50 transition-colors px-2">
                  Contact me
                </p>
                <div className="flex items-center justify-between w-full sm:w-[80%] my-4">
                  <div className="bg-slate-50 p-3 rounded-full shadow-lg shadow-slate-900 cursor-pointer">
                    <FaLinkedinIn size={30} className="text-slate-800" />
                  </div>
                  <div className="bg-slate-50 p-3 rounded-full shadow-lg shadow-slate-900 cursor-pointer">
                    <FaGithub size={30} className="text-slate-800" />
                  </div>
                  <div className="bg-slate-50 p-3 rounded-full shadow-lg shadow-slate-900 cursor-pointer">
                    <AiOutlineMail size={30} className="text-slate-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
