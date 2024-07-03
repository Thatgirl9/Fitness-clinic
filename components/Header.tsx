import { useState } from "react";
import Icon from "../public/icons8-fitness-bubbles-96.png";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Home", link: "#home" },
    { name: "Exercise", link: "#exercise", newtab: false },
  ];

  const routes = [
    { name: "Sign In", link: "/signIn" },
    { name: "Sign Up", link: "/signup" },
  ];

  return (
    <header
      className={`bg-bg-primary w-full md:px-14 px-6 py-5 lg:py-6 z-50 fixed top-0 left-0 right-0
    text-text-primary `}
      // fixed z-50
    >
      {/* second header */}
      <nav className="md:flex md:justify-between md:items-center">
        {/* Logo Hamburger */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <Image src={Icon} className="h-[46px] w-auto" alt="Logo" />
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="w-6 h-6 text-4xl text-white md:hidden bg-transparent border-none"
          >
            <ion-icon
              name={open ? "close" : "menu"}
              className="text-white"
            ></ion-icon>
          </button>
        </div>

        {/* Links */}

        <div
          className={`links h-0 overflow-hidden transition-all md:h-auto bg-green-primary  md:bg-transparent absolute top-[4em] right-0 md:relative md:top-0 md:right-0 md:border-none  md:rounded-none ease-in-out z-50 nav__div flex flex-col md:flex-row md:gap-6  px-5 py-8  md:mx-0 md:p-0
          ${
            open
              ? "h-[100vh] md:w-fit w-[60%] right-0"
              : "h-0 w-0 md:w-fit right-[-10em] "
          }`}
        >
          <ul className="flex md:flex-row md:gap-6  text-bg-primary md:text-text-primary font-inter font-normal gap-[1.4em] justify-end md:justify-normal md:items-center items-end flex-col  md:border-none list-none pb-[1em] md:pb-0">
            {Links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className="md:text-text-primary text-bg-primary font-semibold transition-all ease-in-out no-underline hover:underline  tracking-wide"
                  {...(link.newtab
                    ? { target: "_blank" }
                    : { target: "_self" })}
                  rel="noreferrer"
                  onClick={() => setOpen(!open)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex md:flex-row flex-col gap-[1.2em] md:gap-4 justify-end items-end md:justify-normal md:items-center">
            {routes.map((route, index) => (
              <div key={index}>
                <Link
                  href={route.link}
                  className="md:text-text-primary text-bg-primary font-semibold transition-all ease-in-out no-underline hover:underline  tracking-wide"
                >
                  {route.name}
                </Link>
              </div>
            ))}
          </div>
          {/* </ul> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
