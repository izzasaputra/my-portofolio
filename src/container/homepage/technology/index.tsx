"use client";
import React from "react";
import styles from "./technology.module.scss";
import { Row, Col } from "antd";
import Image from "next/image";
import { TechStack } from "../../../constant/tech";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Technology() {
  return (
    <div className={styles.wrapper}>
      <Row className={styles.row_content_wrapper}>
        <Col xs={24} sm={12} lg={12} data-aos="fade-up-left">
          <div className={styles.title}>Explore My Technology Stack</div>
        </Col>
        <Col xs={24} sm={12} lg={12} data-aos="fade-right">
          <Row>
            {TechStack.map((tech) => (
              <React.Fragment key={tech.title}>
                <Col xs={8} sm={3} lg={3} className={styles.col_card}>
                  <div className={styles.card}>
                    <div
                      className={` ${styles.logo_img_wrapper} ${
                        tech.background ? styles.background_logo : ""
                      }`}
                    >
                      <Image
                        src={`/logo/${tech.img}`}
                        width={tech.width}
                        height={tech.height}
                        alt=""
                      />
                    </div>
                  </div>
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
