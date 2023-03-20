const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), i = [
  e + "/_app/immutable/entry/app.2262acaf.js",
  e + "/_app/immutable/chunks/0.e773bb1c.js",
  e + "/_app/immutable/chunks/1.b4d1ec06.js",
  e + "/_app/immutable/chunks/2.2e6b6afb.js",
  e + "/_app/immutable/chunks/3.6b7ce07e.js",
  e + "/_app/immutable/chunks/4.646c24a0.js",
  e + "/_app/immutable/chunks/5.96c078cd.js",
  e + "/_app/immutable/chunks/_layout.8b28430a.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/_page.5b67d867.js",
  e + "/_app/immutable/chunks/_page.cd2af927.js",
  e + "/_app/immutable/chunks/_page.eb161e18.js",
  e + "/_app/immutable/chunks/control.e7f5239e.js",
  e + "/_app/immutable/chunks/index.1de1fe79.js",
  e + "/_app/immutable/chunks/index.3a8ffb59.js",
  e + "/_app/immutable/chunks/singletons.7abafdee.js",
  e + "/_app/immutable/entry/start.91ad243f.js",
  e + "/_app/immutable/entry/error.svelte.c83c6826.js",
  e + "/_app/immutable/entry/layout.svelte.1105875f.js",
  e + "/_app/immutable/entry/_layout.js.984db11e.js",
  e + "/_app/immutable/entry/_page.svelte.e94dc93f.js",
  e + "/_app/immutable/entry/_page.ts.dc4c779e.js",
  e + "/_app/immutable/entry/_lang_lang_-page.ts.4648614a.js",
  e + "/_app/immutable/assets/_layout.13d6060c.css",
  e + "/_app/immutable/entry/_lang_lang_-index.html-layout.svelte.38b3f983.js",
  e + "/_app/immutable/entry/_lang_lang_-index.html-layout.ts.ed4e5b64.js",
  e + "/_app/immutable/entry/_lang_lang_-index.html-page.svelte.5269d22d.js",
  e + "/_app/immutable/entry/_lang_lang_-index.html-page.ts.ba358d8b.js"
], c = [
  e + "/favicon.png",
  e + "/lib/noscrollbars/noscrollbars.css",
  e + "/lib/noscrollbars/noscrollbars.js",
  e + "/lib/vendor/fontawesome/css/all.min.css",
  e + "/lib/vendor/fontawesome/webfonts/fa-brands-400.ttf",
  e + "/lib/vendor/fontawesome/webfonts/fa-brands-400.woff2",
  e + "/lib/vendor/fontawesome/webfonts/fa-regular-400.ttf",
  e + "/lib/vendor/fontawesome/webfonts/fa-regular-400.woff2",
  e + "/lib/vendor/fontawesome/webfonts/fa-solid-900.ttf",
  e + "/lib/vendor/fontawesome/webfonts/fa-solid-900.woff2",
  e + "/lib/vendor/fontawesome/webfonts/fa-v4compatibility.ttf",
  e + "/lib/vendor/fontawesome/webfonts/fa-v4compatibility.woff2"
], m = [
  e + "/",
  e + "/de/index.html",
  e + "/de",
  e + "/en",
  e + "/en/index.html"
], p = "1679283362704", n = self, o = `appcache-${p}`, b = [
  "/index.html",
  /* Index page */
  ...i,
  /* compiled assets */
  ...c.filter((a) => !a.match(/\/\./)),
  /* static files (except files hidden by Apache) */
  ...m
  /* pages */
];
n.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(o).then((s) => new Promise((t, r) => {
      b.map(async (l) => {
        try {
          await s.add(l);
        } catch {
          console.error("failed to fetch ", l);
        }
      }), t(null);
    })).then(() => n.skipWaiting())
  );
});
n.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== o && await caches.delete(t);
    })
  );
});
n.addEventListener("fetch", (a) => {
  const s = async () => {
    let t = await caches.match(a.request.clone());
    return t || await fetch(a.request);
  };
  a.respondWith(s());
});
