import { useEffect } from "react";

export function useSmoothScroll() {
	useEffect(() => {
		const anchors = document.querySelectorAll('a[href^="#"]');

		const handleClick = (anchor) => (e) => {
			e.preventDefault();
			document
				.querySelector(anchor.getAttribute("href"))
				.scrollIntoView({ behavior: "smooth" });
		};

		anchors.forEach((anchor) => {
			anchor.addEventListener("click", handleClick(anchor));
		});

		return anchors.forEach((anchor) => {
			anchor.removeEventListener("click", handleClick(anchor));
		});
	}, []);

	return null;
}
