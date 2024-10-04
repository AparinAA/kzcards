import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

function Spinner({ type = "primary" }) {
	const isPrimary = type === "primary";

	return (
		<span
			className={classNames({
				[styles.black]: !isPrimary,
				[styles.spinner]: true,
			})}
		></span>
	);
}

export default Spinner;
