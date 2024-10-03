import classNames from "classnames";
import styles from "./index.module.css";

function Toaster({ children, type, id }) {
	return (
		<span
			key={id}
			aria-live="polite"
			className={classNames({
				[styles.messageToaster]: true,
				[styles.errorMessageToaster]: type === "error",
				[styles.successMessageToaster]: type === "success",
			})}
		>
			{children}
		</span>
	);
}

export default Toaster;
