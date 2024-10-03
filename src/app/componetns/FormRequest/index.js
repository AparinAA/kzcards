"use client";

import InputTelegram from "../InputTelegram";
import SubmitButton from "../SubmitButton";
import Toaster from "../Toaster";
import { createRequest } from "../../actions/pushTelegram";
import { useFormState } from "react-dom";

const initialState = {
	message: "",
	error: false,
	id: "0",
};

function FormRequest() {
	const [state, formAction] = useFormState(createRequest, initialState);

	return (
		<form action={formAction}>
			{/* <label htmlFor="name">Ваше имя</label> */}
			<input
				type="text"
				id="name"
				placeholder="Ваше имя"
				name="name"
				required
			/>

			{/* <label htmlFor="phone">Телефон</label> */}
			<input type="tel" id="phone" placeholder="Телефон" name="tel" />

			{/* <label htmlFor="telegram">Аккаунт Telegram</label> */}
			<InputTelegram />

			<div className="form-agreement">
				{/* <input type="checkbox" id="agreement" required /> */}
				<label htmlFor="agreement">
					Нажимая <b>Отправить заявку</b> вы даете согласие на
					обработку персональных данных
				</label>
			</div>

			<SubmitButton>Отправить заявку</SubmitButton>
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

export default FormRequest;
