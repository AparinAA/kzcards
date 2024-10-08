import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import classNames from "classnames";
import Step from "./Step";

const stepsContent = [
	{
		title: "Оплата и отправка документов",
		description:
			"Мы отправляем документы на создание ИИН. На его создание уйдет 5-8 рабочих дней.",
	},
	{
		title: "Оформление карты",
		description:
			"После получения ИИН подаем документы на открытие счета (1-2 дня).",
	},
	{
		title: "Верификация",
		description: "Вам придет SMS с инструкциями по верификации.",
	},
	{
		title: "Пластиковая карта",
		description:
			"Заказ и доставка карты. Итог: процесс занимает 5-7 рабочих дней.",
	},
];
export function Steps() {
	return (
		<section id="steps" className={classNames("block", styles.steps)}>
			<div className={styles.image_card}>
				<Image
					src="/Master_Card.svg"
					width={300}
					height={200}
					alt="Mastercard"
					className=""
				/>
			</div>
			<div className={styles.steps_instruction}>
				<h2>Шаги открытия</h2>
				{stepsContent.map((step, indx) => (
					<Step key={indx} {...step} indx={indx + 1} />
				))}

				<a className="cta-button" href="#request">
					Оформить
				</a>
			</div>
		</section>
	);
}
