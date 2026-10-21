
const baseUrl = "https://dsventra.com";

export default function sitemap() {
  const pages = [
    "",
    "/about",
    "/services",
    "/industries",
    "/projects",
    "/resources",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
