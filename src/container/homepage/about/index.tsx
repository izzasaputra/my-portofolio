"use client";
import React, { useEffect } from "react";
import styles from "./about.module.scss";
import { Row, Col } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.about_wrapper} data-aos="fade-up-left">
      <Row>
        <Col xs={24} sm={12} lg={12}></Col>
        <Col xs={24} sm={12} lg={12}>
          <div className={styles.title}>Who am I?</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat tenetur expedita maxime ipsam, aut atque amet
            voluptatibus recusandae, sint molestias. Hic obcaecati excepturi
            assumenda dolor porro deleniti error quas.
          </div>
        </Col>
      </Row>
    </div>
  );
}
