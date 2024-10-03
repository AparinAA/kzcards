"use client";
import { useSmoothScroll } from "../../hooks";
function NavBar() {
	useSmoothScroll();

	return (
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
	);
}

export default NavBar;
