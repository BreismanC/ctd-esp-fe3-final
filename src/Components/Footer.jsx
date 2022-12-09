import React from "react";
import styles from "../module/Footer.module.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Powered by</p>
        <img src="./images/DH.png" alt="DH-logo" />
      </div>
      <div className={`${styles.footer_icons_container}`}>
        <a
          href="https://www.facebook.com/DigitalHouseColombia"
          className={`${styles.footer_icons}`}
        >
          <FacebookOutlined />
        </a>
        <a
          href="https://www.instagram.com/_digitalhouse"
          className={`${styles.footer_icons}`}
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://www.linkedin.com/school/digitalhouseschool/"
          className={`${styles.footer_icons}`}
        >
          <LinkedinOutlined />
        </a>
        <a
          href="https://www.youtube.com/c/DigitalHouseSchool/featured"
          className={`${styles.footer_icons}`}
        >
          <YoutubeOutlined />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
