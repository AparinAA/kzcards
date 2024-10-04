"use client";
import { useState } from "react";
import styles from "./index.module.css";

function InputTelegram() {
	return (
		<label className={styles.telegramLabel}>
			<span className={styles.telegramAt}>@</span>
			<input
				type="text"
				id="atelegram"
				placeholder="Аккаунт Telegram"
				name="telegram"
				style={{ paddingLeft: "27px" }}
			/>
		</label>
	);
}

export default InputTelegram;
