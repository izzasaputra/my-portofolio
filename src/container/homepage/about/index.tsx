"use client";
import React, { useEffect } from "react";
import styles from "./about.module.scss";
import { Row, Col } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import useResponsive from "@/hooks/responsive";

export default function About() {
  const useScreen = useResponsive();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.about_wrapper}>
      {!useScreen.desktop ? (
        <Row>
          <Col style={{ width: "100%" }}>
            <div
              className={styles.title}
              data-aos="zoom-in-up"
              data-aos-duration="300"
            >
              Who am I?
            </div>
          </Col>
          <Col
            data-aos="zoom-in-up"
            data-aos-delay="500"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img src="/image/me.png" width="340" height="220" alt="" />
          </Col>
          <Col>
            <div
              className={styles.description}
              data-aos="fade-up-left"
              data-aos-delay="600"
            >
              <p style={{ color: "grey" }}>
                I{"'"}m Izza Saputra, an experienced developer known for my
                expertise and innovation. With a proven track record, I
                specialize in crafting sleek user interfaces and robust backend
                solutions.
              </p>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col sm={24} className={styles.title} data-aos="zoom-in">
            Who am I?
          </Col>
          <Col
            sm={24}
            md={7}
            lg={7}
            style={{
              width: 250,
              fontSize: "18px",
              paddingLeft: "10%",
              color: "grey",
            }}
            data-aos="fade-up-left"
            data-aos-delay="900"
          >
            I{"'"}m Izza Saputra, an experienced developer known for my
            expertise and innovation. With a proven track record, I specialize
            in crafting sleek user interfaces and robust backend solutions.
          </Col>
          <Col
            sm={24}
            md={10}
            lg={10}
            className={styles.photo}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <img src="/image/me_desktop.png" width="465" height="280" alt="" />
          </Col>
          <Col
            sm={24}
            md={7}
            lg={7}
            style={{
              width: 250,
              fontSize: "18px",
              paddingRight: "9%",
              paddingTop: "11%",
              color: "grey",
            }}
            data-aos="fade-up-right"
            data-aos-delay="900"
          >
            Dedicated to delivering tailored excellence, I{"'"}m committed to
            exceeding expectations and achieving outstanding results for every
            project.
          </Col>
        </Row>
      )}
    </div>
  );
}
