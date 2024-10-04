"use client";

import SubmitButton from "../SubmitButton";
import Toaster from "../Toaster";
import { createConsultation } from "../../actions/pushTelegram";
import { useFormState } from "react-dom";

const initialState = {
	message: "",
	error: false,
	id: "0",
};

function FormConsultation() {
	const [state, formAction] = useFormState(createConsultation, initialState);

	return (
		<form action={formAction}>
			<input type="text" placeholder="Ваше имя" name="name" required />
			<input
				type="text"
				placeholder="Телефон или Telegram"
				name="contact"
				required
			/>

			<SubmitButton type="info">Отправить заявку</SubmitButton>

			{state.error && state.message && (
				<Toaster type="error" id={state.id}>
					{state.message}
				</Toaster>
			)}
			{!state.error && state.message && (
				<Toaster type="success" id={state.id}>
					{state.message}
				</Toaster>
			)}
		</form>
	);
}

export default FormConsultation;
