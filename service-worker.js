const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), o = [
  e + "/_app/immutable/entry/app.cfb67d96.js",
  e + "/_app/immutable/chunks/0.f7d7bfaf.js",
  e + "/_app/immutable/chunks/1.eaa417dc.js",
  e + "/_app/immutable/chunks/2.9e31cde7.js",
  e + "/_app/immutable/chunks/3.5b5587e7.js",
  e + "/_app/immutable/chunks/4.646c24a0.js",
  e + "/_app/immutable/chunks/5.a6632ed4.js",
  e + "/_app/immutable/chunks/_layout.8b28430a.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/_page.5b67d867.js",
  e + "/_app/immutable/chunks/_page.eb161e18.js",
  e + "/_app/immutable/chunks/control.e7f5239e.js",
  e + "/_app/immutable/chunks/index.1de1fe79.js",
  e + "/_app/immutable/chunks/index.bae3f74a.js",
  e + "/_app/immutable/chunks/index.bd5dfc4f.js",
  e + "/_app/immutable/chunks/singletons.7f008553.js",
  e + "/_app/immutable/entry/start.afef07b3.js",
  e + "/_app/immutable/entry/error.svelte.00b5d4fe.js",
  e + "/_app/immutable/entry/layout.svelte.b04ab382.js",
  e + "/_app/immutable/assets/profilepic.9e13f9c0.png",
  e + "/_app/immutable/entry/_layout.js.984db11e.js",
  e + "/_app/immutable/entry/_page.svelte.63bbb00e.js",
  e + "/_app/immutable/entry/_page.ts.dc4c779e.js",
  e + "/_app/immutable/entry/_lang_lang_-page.ts.4648614a.js",
  e + "/_app/immutable/assets/_layout.c896caae.css",
  e + "/_app/immutable/entry/_lang_lang_-index.html-layout.svelte.7ae9efcf.js",
  e + "/_app/immutable/entry/_lang_lang_-index.html-layout.ts.ed4e5b64.js",
  e + "/_app/immutable/assets/_page.73aff319.css",
  e + "/_app/immutable/entry/_lang_lang_-index.html-page.svelte.7f2e469a.js"
], m = [
  e + "/.nojekyll",
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
], p = [
  e + "/",
  e + "/de",
  e + "/en",
  e + "/de/index.html",
  e + "/en/index.html"
], c = "1721795714630", n = self, i = `appcache-${c}`, b = [
  "/index.html",
  /* Index page */
  ...o,
  /* compiled assets */
  ...m.filter((a) => !a.match(/\/\./)),
  /* static files (except files hidden by Apache) */
  ...p
  /* pages */
];
n.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(i).then((s) => new Promise((t, f) => {
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
        t !== i && await caches.delete(t);
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
