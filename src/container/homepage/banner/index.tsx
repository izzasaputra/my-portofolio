"use client";
import React from "react";
import styles from "./homepage.module.scss";
import { TypeAnimation } from "react-type-animation";
import { Button } from "antd";
import {
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.div
      className={styles.banner}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        type: "spring",
      }}
    >
      <div className={styles.content_wrapper}>
        <div className={styles.type_animation_container}>
          <div className={styles.name}>
            <span className={styles.first_name}>Izza</span>
            <br />
            <span className={styles.last_name}>Saputra</span>
          </div>
          <div className={styles.role}>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                2000,
                "Frontend Developer",
                2000,
                "Fullstack Developer",
              ]}
              speed={1}
              style={{ fontSize: "30px" }}
              repeat={Infinity}
            />
          </div>
          <Button className={styles.resume_button}>Resume</Button>
        </div>
        <div className={styles.social_media_container}>
          <div style={{ marginRight: "10px" }} className={styles.media_item}>
            <LinkedinOutlined />
          </div>
          <div>
            <InstagramOutlined
              style={{ marginRight: "10px" }}
              className={styles.media_item}
            />
          </div>
          <div>
            <GithubOutlined className={styles.media_item} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
