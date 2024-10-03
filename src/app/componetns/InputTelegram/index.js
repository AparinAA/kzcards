"use client";
import { useState } from "react";
import styles from "./index.module.css";

function InputTelegram() {
	const [value, setValue] = useState();

	const handleChange = (e) => {
		// if (e.target.value <= 1) {
		// 	return setValue("@");
		// }

		return setValue(e.target.value);
	};

	return (
		<label className={styles.telegramLabel}>
			<span className={styles.telegramAt}>@</span>
			<input
				type="text"
				id="atelegram"
				placeholder="Аккаунт Telegram"
				name="telegram"
				onChange={handleChange}
				value={value}
				style={{ paddingLeft: "27px" }}
			/>
		</label>
	);
}

export default InputTelegram;
