'use client'
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

const Menus = [
  { title: "Home", link: "www.google.com" },
  { title: "About", link: "www.google.com" },
  { title: "Portofolio", link: "www.google.com" },
  { title: "Contact", link: "www.google.com" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
    <div className={styles.navbar_container} style={{backgroundColor:scrolled?'black':'transparent'}}>
      <div className={styles.detail_menu}>
        {Menus.map((menu) => (
          <div key={menu.title} className={styles.menu_item}>
            {menu.title}
          </div>
        ))}
      </div>
    </div>
  );
}
