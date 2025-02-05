/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Link from "next/link";
import { DynopiiLogo, MenuToggle } from "./SVGs";
export const Header = () => {
  const [active, setActive] = useState(false);
  const [navClass, setNavClass] = useState("nav_header_base");

  const toggleMenu = () => {
    setActive((prevState) => !prevState);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e: any) => {
    if (window.scrollY > 50) {
      setNavClass("nav_header_scrolled");
    } else {
      setNavClass("nav_header_base");
    }
  };

  return (
    <header
      className={`sticky flex flex-grow items-center justify-between navbar_container ${navClass} md:rounded-2xl md:top-3 top-0 md:mx-4`}
    >
      <div className="content_container flex items-center justify-between h-16 md:px-7 px-6">
        <Link href="/">
          <a className="flex items-center">
            <DynopiiLogo />
            <h6 className="text-h6 text-white text-lightGray ml-4">Dynopii</h6>
          </a>
        </Link>
        <div className="desktop_nav_content md:hidden text-lightGray flex flex-row">
          {links.map(({ href, id, label }, index) => (
            <div key={id} className={index === 0 ? "" : "ml-8"}>
              <Link href={`/${href}`}>{label}</Link>
            </div>
          ))}
        </div>
        <div className="mobile spacer hidden md:flex md:flex-grow"></div>
        <button
          onClick={toggleMenu}
          className="mobile menuToggle hidden md:flex cursor-pointer"
        >
          <MenuToggle />
        </button>
      </div>
      <div
        className={`mobile mobileMenu md:flex-col w-full ${
          !active && "collapsed"
        }`}
      >
        <div className="navigation flex flex-grow justify-center items-center">
          <div className="content w-full flex flex-col m-0 pb-3">
            {links.map(({ href, id, label }, index) => (
              <div
                key={id}
                className={
                  index === 0
                    ? "mobile_nav_link secondary"
                    : "mobile_nav_link secondary"
                }
              >
                <Link href={`/${href}`}>{label}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const links = [
  {
    id: "1",
    label: "About Us",
    href: "about",
  },
  {
    id: "2",
    label: "Products",
    href: "products",
  },
  {
    id: "3",
    label: "Blogs",
    href: "blogs",
  },
  {
    id: "4",
    label: "Media",
    href: "media",
  },
];
