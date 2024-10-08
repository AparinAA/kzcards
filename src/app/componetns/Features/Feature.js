import classNames from "classnames";
import styles from "./index.module.css";

function Feature({ title, description, type }) {
	return (
		<div className={classNames(styles.feature, styles[type])}>
			<h4>{title}</h4>
			<p>{description}</p>
		</div>
	);
}

export default Feature;
