"use server";

import TelegramBot from "node-telegram-bot-api";

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const chatIdMy = process.env.TELEGRAM_CHAT_ID_MY;

const bot = new TelegramBot(telegramBotToken, { polling: false });

function sendMessage(chatId: string, message: string) {
	return bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
}

function newsteller(chatIds: string[], message: string) {
	return Promise.all(chatIds.map((chatId) => sendMessage(chatId, message)));
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

export async function createRequest(formData: FormData) {
	const name = formData.get("name") ?? "Нет имени";
	const telegram = formData.get("telegram") ?? "Нет телеграма";
	const tel = formData.get("tel") ?? "Нет телефона";

	const message = `----------------------  
*Новая заявка *  
_${getCurrentDateRequest()}_  

*Имя:* ${name}  
*Номер телефона:* ${tel}  
*Ник в Телеграм:* ${telegram}`;

	await newsteller([chatId, chatIdMy], message);
}

export async function createConsultation(formData: FormData) {
	const name = formData.get("name") ?? "Нет имени";
	const contact = formData.get("contact") ?? "Нет контактов";

	const message = `----------------------  
*Новый запрос на консультацию *  
_${getCurrentDateRequest()}_  

*Имя:* ${name}  
*Номер контакты:* ${contact}`;

	await newsteller([chatId, chatIdMy], message);
}
