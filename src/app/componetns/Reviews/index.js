"use client";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

const Reviews = () => {
	const reviews = [
		{
			text: "“Этот сервис — находка для тех, кто часто путешествует или работает с международными платежами”",
			author: "Алексей",
		},
		{
			text: "“Очень удобно. Менеджеры всегда на связи, а есть доставка”",
			author: "Мария",
		},
		{
			text: "“Был приятно удивлён! Оформили международную карту за несколько дней, всё удалённо, без каких-либо сложностей. Очень удобно для тех, кто ценит своё время!”",
			author: "Олег",
		},
	];

	const [isMobile, setIsMobile] = useState(false);

	// Отслеживаем ширину экрана
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 700);
		};

		// Устанавливаем начальное значение
		handleResize();

		// Добавляем слушатель на изменение размера экрана
		window.addEventListener("resize", handleResize);

		// Очищаем слушатель при размонтировании компонента
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="reviews-section">
			{isMobile ? (
				<Swiper
					modules={[Pagination]}
					spaceBetween={20}
					slidesPerView={1}
					pagination={{ clickable: true }}
				>
					{reviews.map((review, index) => (
						<SwiperSlide key={index}>
							<div className="review-card">
								<p>{review.text}</p>
								<h3>{review.author}</h3>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<div className="reviews-grid">
					{reviews.map((review, index) => (
						<div key={index} className="review-card">
							<p>{review.text}</p>
							<h3>{review.author}</h3>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Reviews;
