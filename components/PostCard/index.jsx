import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

export default function index(props) {
  return (
    <div className={styles.mainContainer}>
      <iframe
        height="440"
        src={props.data.src}
        frameBorder="0"
        style={{ borderRadius: 20 }}
      ></iframe>
    </div>
  );
}

index.propTypes = {
  data: PropTypes.element.isRequired,
};
