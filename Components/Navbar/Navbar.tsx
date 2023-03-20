import React from "react";
import NavbarStyle from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const links = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/blogs",
      name: "Blogs",
    },
  ];

  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <div className={NavbarStyle.HamburgerMenu}>
        {links.map((item, index) => {
          return (
            <Link
              key={"NavLink" + index}
              href={item.link}
              className={item.link == path ? NavbarStyle.activeLink : ""}
            >
              {item.name}
            </Link>
          );
        })}

        <div>Join</div>
      </div>
      <nav className={`${NavbarStyle.Navbar} container`}>
        <Link className={NavbarStyle.NavLogo} href={"/"}>
          <Image src="/NavLogo.svg" alt="logo" width={70} height={70} />
          <div>Actual01</div>
        </Link>
        <div className={NavbarStyle.Nav_Links_And_Buttons}>
          {links.map((item, index) => {
            return (
              <Link
                key={"NavLink" + index}
                href={item.link}
                className={item.link == path ? NavbarStyle.activeLink : ""}
              >
                {item.name}
              </Link>
            );
          })}

          <div>Join</div>
        </div>

        <div className={NavbarStyle.HamburgerIcon}>
          <img src="/Hamburger_icon.svg" alt="Hamburger Icon" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
