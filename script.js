// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		console.info(this.getAttribute("href"));
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

document.getElementById("form").addEventListener("submit", function (e) {
	const phone = document.getElementById("phone");
	const telegram = document.getElementById("telegram").value;

	// Простейшая проверка номера телефона и Telegram-аккаунта
	const phoneRegex = /^[+]?[\d\s\-]{7,15}$/; // Простая проверка на телефон
	const telegramRegex = /^@?(\w){5,}$/; // Проверка аккаунта в Telegram
	e.preventDefault();
	// if (!phoneRegex.test(phone.value)) {
	// 	console.info("Пожалуйста, введите корректный номер телефона.");
	// 	return e.preventDefault();
	// }

	// if (!telegramRegex.test(telegram)) {
	// 	console.info(
	// 		"Пожалуйста, введите корректный аккаунт Telegram (минимум 5 символов)."
	// 	);
	// 	return e.preventDefault();
	// }

	// Показать модальное окно
	const modal = document.getElementById("modal");
	modal.style.display = "flex"; // Показываем модальное окно

	// Закрытие модального окна по клику на "x"
	const closeBtn = document.querySelector(".close");
	closeBtn.addEventListener("click", () => {
		modal.style.display = "none";
	});

	// Закрытие модального окна по клику вне его
	window.addEventListener("click", (event) => {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});
});

const reviewsWrapper = document.querySelector(".reviews");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

function updateCarousel() {
	const reviewWidth = document.querySelector(".review").offsetWidth;
	reviewsWrapper.style.transform = `translateX(-${currentIndex * reviewWidth}px)`;

	// Отключаем кнопки на крайних позициях
	prevBtn.disabled = currentIndex === 0;
	nextBtn.disabled = currentIndex === reviewsWrapper.children.length - 1;
}

prevBtn.addEventListener("click", () => {
	if (currentIndex > 0) {
		currentIndex--;
		updateCarousel();
	}
});

nextBtn.addEventListener("click", () => {
	if (currentIndex < reviewsWrapper.children.length - 1) {
		currentIndex++;
		updateCarousel();
	}
});

// Инициализация карусели
updateCarousel();
