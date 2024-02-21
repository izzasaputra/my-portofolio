"use client";
import React, { useEffect, useState } from "react";
import styles from "./responsiveNavbar.module.scss";
import Hamburger from "hamburger-react";
import Menu from "../../../constant/menu.json";
import Link from "next/link";

export default function ResponsiveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const menus = Menu.Menus;

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
    <div
      className={styles.navbar_container}
      style={{ backgroundColor: scrolled ? "black" : "transparent" }}
    >
      <div className={styles.hamburger_menu_icon}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className={styles.background_menu}>
          <div className={styles.menu_wrapper}>
            {menus.map((menu) => (
              <div key={menu.title} className={styles.menu_item}>
                <Link href={menu.link} className={styles.menu_link}>
                  {menu.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
