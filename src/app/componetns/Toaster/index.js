import classNames from "classnames";
import styles from "./index.module.css";
import { createPortal } from "react-dom";

function Toaster({ children, type, id }) {
	return createPortal(
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
		</span>,
		document.getElementById("toaster") || document.body
	);
}

export default Toaster;
