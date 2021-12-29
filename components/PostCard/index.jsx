import React from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

export default function index(props) {
	return (
		<div className={styles.mainContainer}>
                <Image
					alt={props.data.imageAlt}
					src={"https://www.instagram.com/p/CYFBytFODkp/"}
					width={"303vw"}
					height={"303vw"}
				/>




		</div>
	);
}

index.propTypes = {
	data: PropTypes.element.isRequired,
};