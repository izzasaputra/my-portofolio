"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import useResponsive from "@/hooks/responsive";
import ResponsiveNavbar from "./responsiveNavbar";
import Menu from "../../constant/menu.json";
import { motion } from "framer-motion";

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
        <motion.div
          className={styles.navbar_container}
          style={{ backgroundColor: scrolled ? "black" : "transparent" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            type: "spring",
          }}
        >
          <div className={styles.detail_menu}>
            {Menus.map((menu) => (
              <div key={menu.title} className={styles.menu_item}>
                {menu.title}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
