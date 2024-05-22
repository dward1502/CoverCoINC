import { MetadataRoute, Metadata } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const defaultPages: MetadataRoute.Sitemap = [
		{
			url: "https://covercoinc.com",
			lastModified: new Date(),
			changeFrequency: "daily",
			priority: 1,
		},
		{
			url: "https://covercoinc.com/about",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: "https://covercoinc.com/contact",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
    {
			url: "https://covercoinc.com/catalog",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
    {
			url: "https://covercoinc.com/customize",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		// other pages
	];

	return defaultPages;
}
