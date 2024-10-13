import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://www.i11lcard.ru",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
	];
}
