"use client";
import { useFormStatus } from "react-dom";
import Spinner from "../Spinner";

function SubmitButton({ children }) {
	const { pending } = useFormStatus();

	return (
		<button type="submit" className="cta-button" disabled={pending}>
			{pending ? <Spinner /> : children}
		</button>
	);
}

export default SubmitButton;
