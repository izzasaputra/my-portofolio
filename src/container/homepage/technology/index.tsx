"use client";
import React from "react";
import styles from "./technology.module.scss";
import { Row, Col } from "antd";
import Image from "next/image";
import { TechStack } from "../../../constant/tech";
import AOS from "aos";
import "aos/dist/aos.css";
import useResponsive from "@/hooks/responsive";

export default function Technology() {
  const screenType= useResponsive();
  return (
    <div className={styles.wrapper}>
      <Row className={styles.row_content_wrapper}>
        <Col xs={24} sm={24} lg={24} data-aos="fade-up-left">
          <div className={styles.title}>Explore My Technology Stack</div>
        </Col>
        <Col xs={24}>
          <div className={styles.sub_title} data-aos="fade-up-left">
            Harnessing the power of modern technologies to create seamless user
            experiences.
          </div>
        </Col>
        <Col xs={24} sm={24} lg={24} data-aos="fade-right" data-aos-delay="200">
          <Row style={{width:"100%", display:'flex', justifyContent:"center"}}>
            <Col xs={0} md={8} />
            {TechStack.slice(0, 4).map((tech, index) => (
              <Col
                xs={8}
                md={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100px",
                }}
                className={styles.card}
                data-aos="fade-right"
                data-aos-delay={`${index+1}00`}
                key={index+1}
              >
                <div
                  style={{
                    border: `2px solid ${tech.background}`,
                    height: "80px",
                    borderRadius: "10px",
                    width: "80px",
                    backgroundColor: `${tech.background}`,
                    boxShadow: `${tech.background} 0px 4px 20px`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className={styles.front}
                >
                  <Image
                    src={`/logo/${tech.img}`}
                    width={tech.width}
                    height={tech.height}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    border: `2px solid ${tech.background}`,
                    height: "80px",
                    borderRadius: "10px",
                    width: "80px",
                    backgroundColor: `${tech.background}`,
                    boxShadow: `${tech.background} 0px 4px 20px`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className={styles.back}
                >
                  {tech.title}
                </div>
              </Col>
            ))}
            <Col xs={0} md={8} />
            <Col xs={0} md={8} />
            <Col xs={0} md={1} />
            {TechStack.slice(4).map((tech, index) => (
              <Col
              xs={8}
                md={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100px",
                }}
                className={styles.card}
                data-aos="fade-right"
                data-aos-delay={`${index+4}00`}
                key={index+4}
              >
                <div
                  style={{
                    border: `2px solid ${tech.background}`,
                    height: "80px",
                    borderRadius: "10px",
                    width: "80px",
                    backgroundColor: `${tech.background}`,
                    boxShadow: `${tech.background} 0px 4px 20px`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className={styles.front}
                >
                  <Image
                    src={`/logo/${tech.img}`}
                    width={tech.width}
                    height={tech.height}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    border: `2px solid ${tech.background}`,
                    height: "80px",
                    borderRadius: "10px",
                    width: "80px",
                    backgroundColor: `${tech.background}`,
                    boxShadow: `${tech.background} 0px 4px 20px`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className={styles.back}
                >
                  {tech.title}
                </div>
              </Col>
            ))}
            <Col md={1} />
            <Col md={8} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
