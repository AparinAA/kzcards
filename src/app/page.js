import Image from "next/image";
import { createConsultation, createRequest } from "./actions/pushTelegram";

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
					<nav>
						<ul id="nav-menu" className="nav-links">
							<li>
								<a href="#steps">Как открыть</a>
							</li>
							<li>
								<a href="#testimonials">Отзывы</a>
							</li>
							<li>
								<a href="#pricing">Стоимость</a>
							</li>
							<li>
								<a href="#consultation">Консультация</a>
							</li>
							<li>
								<a href="#contact">Контакты</a>
							</li>
						</ul>
						<div className="burger" id="burger-menu">
							<div className="line1"></div>
							<div className="line2"></div>
							<div className="line3"></div>
						</div>
					</nav>
				</div>
			</header>

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
						<div>
							{check}
							Готовая карта за 5-7 рабочих дней
						</div>
						<div>{check} Удаленное оформление</div>
						<div>{check} Гарантия лучшей цены</div>
					</div>
					<button className="cta-button">Оформить</button>
					<a className="info-button" href="#services">
						Подробнее
					</a>
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

			<section id="services" className="block services">
				<h2>Оплачивайте любимые сервисы и живите как раньше</h2>
				<p>
					Карты иностранных банков принимаются к оплате всеми
					европейскими и американскими сервисами.
				</p>
				<div className="services-logos">
					<Image
						src="/airbnb-ar21.svg"
						width={40}
						height={40}
						alt="Airbnb"
					/>
					<Image
						src="/amazon-ar21.svg"
						width={40}
						height={40}
						alt="Amazon"
					/>
					<Image
						src="/apple_appstore-ar21.svg"
						width={40}
						height={40}
						alt="Apple App Store"
					/>
					<Image
						src="/booking-ar21.svg"
						width={40}
						height={40}
						alt="Booking"
					/>
					<Image
						src="/canva-ar21.svg"
						width={40}
						height={40}
						alt="Canva"
					/>
					<Image
						src="/ebay-ar21.svg"
						width={40}
						height={40}
						alt="Ebay"
					/>
					<Image
						src="/figma-ar21.svg"
						width={40}
						height={40}
						alt="Figma"
					/>
					<Image
						src="/netflix-ar21.svg"
						width={40}
						height={40}
						alt="Netflix"
					/>
					<Image
						src="/spotify-ar21.svg"
						width={40}
						height={40}
						alt="Spotify"
					/>
					<Image
						src="/xbox-ar21.svg"
						width={40}
						height={40}
						alt="Xbox"
					/>
					<Image
						src="/youtube-ar21.svg"
						width={40}
						height={40}
						alt="YouTube"
					/>
					<Image
						src="/zoomus-ar21.svg"
						width={40}
						height={40}
						alt="Zoom"
					/>
				</div>
			</section>

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
							Заказ и доставка карты. Итог: процесс занимает 5-7
							рабочих дней.
						</p>
					</div>
					<button className="cta-button">Оформить</button>
				</div>
			</section>

			<section id="pricing" className="block pricing">
				<div className="pricing-card">
					<div className="pricing-header">
						<div className="pricing-header-pr">
							<h3>Международная карта</h3>
							<p>12 000 ₽</p>
						</div>
						<Image
							src="/mastercard-logo.svg"
							height={30}
							width={50}
							alt="mastercard"
						/>
					</div>
					<ul>
						<li>Срок изготовления: 7 рабочих дней</li>
						<li>Срок действия: 3 года</li>
						<li>Валюты: тенге, доллар, евро, рубль и др.</li>
						<li>
							Пополнение: Сбербанк, Райфайзен, МТС банк, Золотая
							корона
						</li>
					</ul>
					<button className="cta-button">Оформить</button>
				</div>
			</section>

			<section id="testimonials" className="block testimonials">
				<h2>Отзывы довольных клиентов</h2>
				<div className="testimonial">
					<p>
						Отличная карта! Оформил быстро, все сервисы работают без
						проблем.
					</p>
				</div>
				<div className="testimonial">
					<p>
						Очень доволен. Все было сделано за несколько дней, карта
						работает идеально.
					</p>
				</div>
			</section>
			<section id="consultation" className="block consultation">
				<h3>Бесплатная консультация</h3>
				<form action={createConsultation}>
					<input
						type="text"
						placeholder="Ваше имя"
						name="name"
						required
					/>
					<input
						type="text"
						placeholder="Телефон или Telegram"
						name="contact"
						required
					/>
					<button
						type="submit"
						className="info-button"
						style={{
							margin: "0 !important",
							width: "100% !important",
						}}
					>
						Оставить заявку
					</button>
				</form>
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
							Консультируем подробно и быстро 24/7, есть услуга
							“персональный менеджер”.
						</p>
					</div>
					<div className="feature delivery">
						<h4>Быстрая доставка</h4>
						<p>Быстро доставим вашу карту в регионы и по Москве.</p>
					</div>
					<div className="feature protect">
						<h4>Бесплатные инструкции</h4>
						<p>
							Расскажем, как пополнить счет, как получить перевод,
							как оплатить товары и услуги
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

			<section className="block">
				<div className="form-container">
					<h2>Оформление заявки</h2>
					<p>Заполните поля и мы свяжемся с вами в ближайшее время</p>
					<form action={createRequest}>
						{/* <label htmlFor="name">Ваше имя</label> */}
						<input
							type="text"
							id="name"
							placeholder="Ваше имя"
							name="name"
							required
						/>

						{/* <label htmlFor="phone">Телефон</label> */}
						<input
							type="tel"
							id="phone"
							placeholder="Телефон"
							name="tel"
						/>

						{/* <label htmlFor="telegram">Аккаунт Telegram</label> */}
						<input
							type="text"
							id="atelegram"
							placeholder="Аккаунт Telegram"
							name="telegram"
						/>

						<div className="form-agreement">
							{/* <input type="checkbox" id="agreement" required /> */}
							<label htmlFor="agreement">
								Нажимая <b>Отправить заявку</b> вы даете
								согласие на обработку персональных данных
							</label>
						</div>

						<button type="submit" className="cta-button">
							Отправить заявку
						</button>
					</form>
				</div>
			</section>

			<section id="contact" className="block contact">
				<h3>Контакты</h3>
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
		</>
	);
}
