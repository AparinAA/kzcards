"use client";
import { useState } from "react";
import { useSmoothScroll } from "../../hooks";
import classNames from "classnames";

function NavBar() {
	const [active, setActive] = useState();
	const [burger, setBurger] = useState();

	useSmoothScroll();

	const handlerClickBurger = () => {
		setActive((on) => !on);
		setBurger((on) => !on);
	};

	return (
		<nav>
			<ul
				id="nav-menu"
				className={classNames({ "nav-links": true, "active": active })}
			>
				<li>
					<a href="#steps" onClick={handlerClickBurger}>
						Как открыть
					</a>
				</li>
				<li>
					<a href="#testimonials" onClick={handlerClickBurger}>
						Отзывы
					</a>
				</li>
				<li>
					<a href="#pricing" onClick={handlerClickBurger}>
						Стоимость
					</a>
				</li>
				<li>
					<a href="#consultation" onClick={handlerClickBurger}>
						Консультация
					</a>
				</li>
				<li>
					<a href="#contact" onClick={handlerClickBurger}>
						Контакты
					</a>
				</li>
			</ul>
			<div
				className={classNames({ burger: true, toggle: burger })}
				id="burger-menu"
				onClick={handlerClickBurger}
			>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
		</nav>
	);
}

export default NavBar;
