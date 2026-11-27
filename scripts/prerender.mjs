// Renders every route to static HTML after `vite build`, so GitHub Pages serves
// real content (SEO, no-JS) and React hydrates on top of it.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, routes, notFound, site } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function head(route, canonicalPath) {
  const url = site.url + (canonicalPath === "/" ? "/" : canonicalPath);
  return [
    `<title>${esc(route.title)}</title>`,
    `<meta name="description" content="${esc(route.description)}" />`,
    canonicalPath ? `<link rel="canonical" href="${url}" />` : `<meta name="robots" content="noindex" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta property="og:site_name" content="${esc(site.brand)}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    canonicalPath ? `<meta property="og:url" content="${url}" />` : "",
  ]
    .filter(Boolean)
    .join("\n    ");
}

function page(route, canonicalPath) {
  return template
    .replace("<!--app-head-->", head(route, canonicalPath))
    .replace("<!--app-html-->", render(route.path));
}

// "/servicios/finops" -> dist/servicios/finops.html (GitHub Pages serves it
// at the extensionless URL without a redirect).
for (const route of routes) {
  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page(route, route.path));
  console.log(`prerendered ${route.path} -> ${file}`);
}

fs.writeFileSync(path.join(dist, "404.html"), page(notFound, null));

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .map((r) => `  <url><loc>${site.url}${r.path === "/" ? "/" : r.path}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
