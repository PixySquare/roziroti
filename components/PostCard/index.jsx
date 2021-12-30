import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

export default function index(props) {
	return (
		<div className={styles.mainContainer}>
			<iframe  height="440" src="https://www.instagram.com/p/CYFBytFODkp/embed" frameBorder="0"></iframe>
		</div>
	);
}

index.propTypes = {
	data: PropTypes.element.isRequired,
};