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
            <Tilt>
              <Image src="/image/me.png" width="220" height="230" alt="" />
            </Tilt>
          </Col>
          <Col>
            <div
              className={styles.description}
              data-aos="fade-up-left"
              data-aos-delay="600"
            >
              <p>I{"'"}m Izza Saputra, an experienced developer known for my expertise
              and innovation. With a proven track record, I specialize in
              crafting sleek user interfaces and robust backend solutions.
              </p>
            </div>
          </Col>
        </Row>
      ) : (
        <>
          <div className={styles.title} data-aos="zoom-in">
            Who am I?
          </div>
          <div
            style={{
              width: 300,
              position: "absolute",
              top: "160px",
              left: "250px",
              fontSize: "16px",
            }}
            data-aos="fade-up-left"
            data-aos-delay="900"
          >
            I{"'"}m Izza Saputra, an experienced developer known for my expertise
            and innovation. With a proven track record, I specialize in crafting
            sleek user interfaces and robust backend solutions.
          </div>
          <div className={styles.photo} data-aos="zoom-in" data-aos-delay="500">
            <Tilt>
              <Image src="/image/me.png" width="330" height="340" alt="" />
            </Tilt>
          </div>
          <div
            style={{
              width: 300,
              position: "absolute",
              top: "400px",
              right: "150px",
              fontSize: "16px",
            }}
            data-aos="fade-up-right"
            data-aos-delay="900"
          >
            Dedicated to delivering tailored excellence, I{"'"}m committed to
            exceeding expectations and achieving outstanding results for every
            project.
          </div>
        </>
      )}
    </div>
  );
}
