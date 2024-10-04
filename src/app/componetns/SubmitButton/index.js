"use client";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";
import classNames from "classnames";

function SubmitButton({ children, type = "primary" }) {
	const { pending } = useFormStatus();
	const isPrimary = type === "primary";

	return (
		<button
			type="submit"
			className={classNames({
				"cta-button": isPrimary,
				"info-button": !isPrimary,
			})}
			disabled={pending}
		>
			{pending ? <Spinner type={type} /> : children}
		</button>
	);
}

export default SubmitButton;
