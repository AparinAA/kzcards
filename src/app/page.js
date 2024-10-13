import Image from "next/image";
import NavBar from "./componetns/Navbar";
import Services from "./componetns/Services";
import FormRequest from "./componetns/FormRequest";
import FormConsultation from "./componetns/FormConsultation";
import Reviews from "./componetns/Reviews";
import { Steps } from "./componetns/Steps";
import { Features } from "./componetns/Features";

const check = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={30}
		height={30}
		className="check"
		styles={{
			verticalAlign: "middle",
			overflow: "hidden",
		}}
		viewBox="0 0 1024 1024"
		version="1.1"
	>
		<path d="M384 689.92L206.08 512l-60.373333 60.373333L384 810.666667l512-512-60.373333-60.373334z" />
	</svg>
);

export default function Home() {
	return (
		<>
			<header>
				<div id="logo" className="logo">
					I11l.card
				</div>
				<div className="navbar">
					<NavBar />
				</div>
			</header>

			<main className="main">
				<section className="block hero">
					<div className="hero-content">
						<h1>Международные карты</h1>
						<div className="card-image mobile-image">
							<Image
								src="/Master_Card.webp"
								width={300}
								height={200}
								alt="Mastercard банковская онлайн карта"
							/>
						</div>
						<div className="hero-features">
							<p>
								{check}
								Готовая карта за 5-8 рабочих дней
							</p>
							<p>{check} Удаленное оформление</p>
							<p>{check} Гарантия лучшей цены</p>
						</div>
						<div className="button-group">
							<a className="cta-button" href="#request">
								Оформить
							</a>
							<a className="info-button" href="#services">
								Подробнее
							</a>
						</div>
					</div>
					<div className="card-image desktop-image">
						<Image
							src="/Master_Card.webp"
							width={300}
							height={200}
							alt="Mastercard оплата банковской картой"
						/>
					</div>
				</section>

				<Services />

				<Steps />

				<section id="pricing" className="block pricing">
					<div className="pricing-card">
						<div className="pricing-header">
							<>
								<h2 className="pricing-header-pr">
									Международная карта
								</h2>
							</>
							<Image
								src="/mastercard-logo.svg"
								height={50}
								width={60}
								alt="лого онлайн международных карт"
							/>
						</div>
						<ul>
							<li>Время оформления: до 8 рабочих дней</li>
							<li>Срок действия карты: до 3 лет</li>
							<li>
								Валюты: <b>KZT, USD, EUR, RUB, TRY, CNY</b>
							</li>
							<li>Выгодный курс конвертации валют</li>
							<li>Возможность пополнения с банков России</li>
							<li>Дистанционное открытие банковской карты</li>
						</ul>
						<a className="cta-button" href="#request">
							Оформить
						</a>
					</div>
				</section>
				<section id="testimonials" className="block testimonials">
					<h2>Отзывы довольных клиентов</h2>
					<Reviews />
				</section>
				<section id="consultation" className="block consultation">
					<h2>Бесплатная консультация</h2>
					<FormConsultation />
					<p style={{ textAlign: "right", width: "100%" }}>
						<span style={{ fontSize: "0.9rem" }}>
							Нажимая <b>Отправить заявку</b> вы даете согласие на
							обработку персональных данных
						</span>
					</p>
				</section>

				<Features />

				<section id="request" className="block">
					<div className="form-container">
						<h2>Оформление заявки</h2>
						<p>
							Заполните поля и мы свяжемся с вами в ближайшее
							время
						</p>
						<FormRequest />
					</div>
				</section>

				<section id="contact" className="block contact">
					<h2>Контакты</h2>
					<div>
						<p>
							<b>Менеджер Роман</b>
						</p>
						<a
							href="tel:+7-914-008-82-51"
							target="_blank"
							className="contact_button telephone_button"
						>
							+7 (914) 008-82-51
						</a>
						<a
							className="contact_button whatsapp_button"
							href="https://wa.me/79140088251"
							target="_blank"
						>
							Написать в WhatsApp
						</a>
						<a
							className="contact_button telegram_button"
							href="tg://resolve?domain=i11lcard/"
							target="_blank"
						>
							Написать в Telegram
						</a>
					</div>
				</section>
				<footer>
					<a href="https://www.aparinaleksandr.site/" target="_blank">
						Powered by Aparin Aleksandr
					</a>
					<p>&copy; Все права защищены i11lcards 2024</p>
				</footer>
			</main>
		</>
	);
}
