import styles from "./index.module.css";

function Step({ title, description, indx }) {
	return (
		<div className={styles.step}>
			<div className={styles.step_count}>{indx}</div>
			<div className={styles.step_content}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Step;
