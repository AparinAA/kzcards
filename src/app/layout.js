import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Международные карты",
	description: "Оформление международных карт онлайн",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<div
					id="toaster"
					style={{
						position: "absolute",
						right: "0",
						top: "0",
						zIndex: "100000",
					}}
				/>
				{children}
			</body>
		</html>
	);
}
