import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/profile/", "/practice/", "/progress/"],
      },
    ],
    sitemap: "https://openielts.org/sitemap.xml",
  };
}
