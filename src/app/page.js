import Image from "next/image";
import { createConsultation, createRequest } from "./actions/pushTelegram";
import NavBar from "./componetns/Navbar";
import Services from "./componetns/Services";
import FormRequest from "./componetns/FormRequest";
import FormConsultation from "./componetns/FormConsultation";

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
				<div className="logo">I11l.card</div>
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
								src="/Master_Card.svg"
								width={300}
								height={200}
								alt="Mastercard"
							/>
						</div>
						<div className="hero-features">
							<p>
								{check}
								Готовая карта за 5-7 рабочих дней
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
							src="/Master_Card.svg"
							width={300}
							height={200}
							alt="Mastercard"
						/>
					</div>
				</section>

				<Services />

				<section id="steps" className="block steps">
					<div className="card-image">
						<Image
							src="/Master_Card.svg"
							width={300}
							height={200}
							alt="Mastercard"
							className=""
						/>
					</div>
					<div>
						<h2>Шаги открытия</h2>
						<div className="step">
							<h3>1 Оплата и отправка документов</h3>
							<p>
								Мы отправляем документы на создание ИИН. На его
								создание уйдет 2-3 рабочих дня.
							</p>
						</div>
						<div className="step">
							<h3>2 Оформление карты</h3>
							<p>
								После получения ИИН подаем документы на открытие
								счета (1-2 дня).
							</p>
						</div>
						<div className="step">
							<h3>3 Верификация</h3>
							<p>Вам придет SMS с инструкциями по верификации.</p>
						</div>
						<div className="step">
							<h3>4 Пластиковая карта</h3>
							<p>
								Заказ и доставка карты. Итог: процесс занимает
								5-7 рабочих дней.
							</p>
						</div>
						<a className="cta-button" href="#request">
							Оформить
						</a>
					</div>
				</section>

				<section id="pricing" className="block pricing">
					<div className="pricing-card">
						<div className="pricing-header">
							<>
								<h2 className="pricing-header-pr">
									Международная карта
								</h2>
								{/* <p>12 000 ₽</p> */}
							</>
							<Image
								src="/mastercard-logo.svg"
								height={50}
								width={60}
								alt="mastercard"
							/>
						</div>
						<ul>
							<li>Срок изготовления: 7 рабочих дней</li>
							<li>Срок действия: 3 года</li>
							<li>Валюты: тенге, доллар, евро, рубль и др.</li>
							<li>
								Пополнение: Сбербанк, Райфайзен, МТС банк,
								Золотая корона
							</li>
						</ul>
						<a className="cta-button" href="#request">
							Оформить
						</a>
					</div>
				</section>

				<section id="testimonials" className="block testimonials">
					<h2>Отзывы довольных клиентов</h2>
					<div className="testimonial">
						<p>
							Отличная карта! Оформил быстро, все сервисы работают
							без проблем.
						</p>
					</div>
					<div className="testimonial">
						<p>
							Очень доволен. Все было сделано за несколько дней,
							карта работает идеально.
						</p>
					</div>
				</section>
				<section id="consultation" className="block consultation">
					<h3>Бесплатная консультация</h3>
					<FormConsultation />
					<p style={{ textAlign: "right", width: "100%" }}>
						<span style={{ fontSize: "0.9rem" }}>
							Нажимая <b>Отправить заявку</b> вы даете согласие на
							обработку персональных данных
						</span>
					</p>
				</section>

				<section id="features" className="block features-block">
					<h2>Почему выбирают именно нас?</h2>
					<div className="features">
						<div className="feature support">
							<h4>Поддержка на всех этапах</h4>
							<p>
								Консультируем подробно и быстро 24/7, есть
								услуга “персональный менеджер”.
							</p>
						</div>
						<div className="feature delivery">
							<h4>Быстрая доставка</h4>
							<p>
								Быстро доставим вашу карту в регионы и по
								Москве.
							</p>
						</div>
						<div className="feature protect">
							<h4>Бесплатные инструкции</h4>
							<p>
								Расскажем, как пополнить счет, как получить
								перевод, как оплатить товары и услуги
							</p>
						</div>
						<div className="feature instruction">
							<h4>Гарантия возврата денег</h4>
							<p>
								Вернем все в полном объеме, если не выполним
								обязательства.
							</p>
						</div>
					</div>
				</section>

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
					<p>© 2024</p>
					<a href="#">Политика конфиденциальности</a>
				</footer>
			</main>
		</>
	);
}
