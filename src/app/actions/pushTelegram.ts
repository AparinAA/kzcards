"use server";

import { randomUUID } from "crypto";
import TelegramBot from "node-telegram-bot-api";

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const chatIdMy = process.env.TELEGRAM_CHAT_ID_MY;

const bot = new TelegramBot(telegramBotToken, { polling: false });

function sleep(ms: number) {
	return new Promise((res) => setTimeout(res, ms));
}

function sendMessage(chatId: string, message: string) {
	return bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
}

async function newsteller(chatIds: string[], message: string) {
	for (const chatId of chatIds) {
		await sendMessage(chatId, message);
		await sleep(1000);
	}
}

function getCurrentDateRequest() {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1; // Месяцы начинаются с 0
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export async function createRequest(prevState: any, formData: FormData) {
	const name = formData.get("name") ?? "Нет имени";
	const telegram = formData.get("telegram") ?? "Нет телеграма";
	const tel = formData.get("tel") ?? "Нет телефона";

	const message = `*Новая заявка *  
_${getCurrentDateRequest()}_  

*Имя:* ${name}  
*Номер телефона:* ${tel}  
*Ник в Телеграм:* ${telegram}`;

	try {
		await sleep(1000);
		const response = await newsteller([chatId, chatIdMy], message);
		console.info(response);
		return {
			message: "Заявка успешно отправлена",
			error: false,
			id: randomUUID(),
		};
	} catch {
		return {
			message: "Заявка не отправилась, попробуйте еще раз позже",
			error: true,
			id: randomUUID(),
		};
	}
}

export async function createConsultation(prevState: any, formData: FormData) {
	const name = formData.get("name") ?? "Нет имени";
	const contact = formData.get("contact") ?? "Нет контактов";

	const message = `*Новый запрос на консультацию *  
_${getCurrentDateRequest()}_  

*Имя:* ${name}  
*Номер контакты:* ${contact}`;
	try {
		await sleep(1000);
		const response = await newsteller([chatId, chatIdMy], message);
		console.info(response);
		return {
			message: "Заявка успешно отправлена",
			error: false,
			id: randomUUID(),
		};
	} catch {
		return {
			message: "Заявка не отправилась, попробуйте еще раз позже",
			error: true,
			id: randomUUID(),
		};
	}
}
