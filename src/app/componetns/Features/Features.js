import classNames from "classnames";
import styles from "./index.module.css";
import Feature from "./Feature";

const featuresContent = [
	{
		type: "support",
		title: "Поддержка на всех этапах",
		description:
			"Консультируем подробно и быстро 24/7, есть услуга “персональный менеджер”.",
	},
	{
		type: "delivery",
		title: "Быстрая доставка",
		description: "Быстро доставим вашу карту в регионы и по Москве.",
	},
	{
		type: "protect",
		title: "Бесплатные инструкции",
		description:
			"Расскажем, как пополнить счет, как получить перевод, как оплатить товары и услуги",
	},
	{
		type: "instruction",
		title: "Гарантия возврата денег",
		description:
			"Вернем все в полном объеме, если не выполним обязательства.",
	},
];

export function Features() {
	return (
		<section
			id="features"
			className={classNames("block", styles["features-block"])}
		>
			<h2>Почему выбирают нас?</h2>
			<div className={styles.features}>
				{featuresContent.map((feature, indx) => (
					<Feature key={indx} {...feature} />
				))}
			</div>
		</section>
	);
}
