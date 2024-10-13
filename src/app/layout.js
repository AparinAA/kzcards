import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

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

export default function RootLayout({ children, params }) {
	return (
		<html lang={params.lang}>
			<Head>
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta name="theme-color" content="#5cc599" />
				<meta name="yandex-verification" content="ecdbd288aa7de175" />
				<link rel="canonical" href="https://i11lcard.ru" />
			</Head>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Script id="metrika" nonce="XUENAJFW123">
					{`
					(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();
					for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
					k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

					ym(98561654, "init", {
							clickmap:true,
							trackLinks:true,
							accurateTrackBounce:true
					});
					`}
				</Script>
				<noscript>
					<div>
						<img
							src="https://mc.yandex.ru/watch/98561654"
							style={{ position: "absolute", left: "-9999px" }}
							alt=""
						/>
					</div>
				</noscript>
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

export async function generateStaticParams() {
	return [{ lang: "ru" }];
}
