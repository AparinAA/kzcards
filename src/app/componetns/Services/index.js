import Image from "next/image";

function Services() {
	return (
		<section id="services" className="block services">
			<h2>Оплачивайте любимые сервисы и живите как раньше</h2>
			<p>
				Карты иностранных банков принимаются к оплате всеми европейскими
				и американскими сервисами.
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
				<Image src="/ebay-ar21.svg" width={40} height={40} alt="Ebay" />
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
				<Image src="/xbox-ar21.svg" width={40} height={40} alt="Xbox" />
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
	);
}

export default Services;
