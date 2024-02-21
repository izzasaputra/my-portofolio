"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import useResponsive from "@/hooks/responsive";
import ResponsiveNavbar from "./responsiveNavbar";
import Menu from "../../constant/menu.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const screenType = useResponsive();
  const Menus = Menu.Menus;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {screenType.mobile ? (
        <ResponsiveNavbar />
      ) : (
        <div
          className={styles.navbar_container}
          style={{ backgroundColor: scrolled ? "black" : "transparent" }}
        >
          <div className={styles.detail_menu}>
            {Menus.map((menu) => (
              <div key={menu.title} className={styles.menu_item}>
                {menu.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
