const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  e + "/_app/immutable/entry/app.11b275c4.js",
  e + "/_app/immutable/chunks/0.2ba49582.js",
  e + "/_app/immutable/chunks/1.7eabc5e2.js",
  e + "/_app/immutable/chunks/2.20c1d1c8.js",
  e + "/_app/immutable/chunks/_layout.da46b06b.js",
  e + "/_app/immutable/chunks/index.7cfbcabc.js",
  e + "/_app/immutable/chunks/singletons.36b46d22.js",
  e + "/_app/immutable/entry/start.012b1496.js",
  e + "/_app/immutable/entry/_error.svelte.39c7f5d9.js",
  e + "/_app/immutable/entry/_layout.js.984db11e.js",
  e + "/_app/immutable/entry/_layout.svelte.762db5a6.js",
  e + "/_app/immutable/entry/_page.svelte.0ab22dff.js"
], o = [
  e + "/.htaccess",
  e + "/favicon.png",
  e + "/logo-128x128.png",
  e + "/logo-256x256.png",
  e + "/logo-64x64.png",
  e + "/logo2.png",
  e + "/manifest.json",
  e + "/settings.json"
], p = [
  e + "/"
], r = "1679125365163", n = self, i = `appcache-${r}`, m = [
  "/index.html",
  /* Index page */
  ...l,
  /* compiled assets */
  ...o.filter((t) => !t.match(/\/\./)),
  /* static files (except files hidden by Apache) */
  ...p
  /* pages */
];
n.addEventListener("install", (t) => {
  t.waitUntil(
    caches.open(i).then((s) => new Promise((a, h) => {
      m.map(async (c) => {
        try {
          await s.add(c);
        } catch {
          console.error("failed to fetch ", c);
        }
      }), a(null);
    })).then(() => n.skipWaiting())
  );
});
n.addEventListener("activate", (t) => {
  t.waitUntil(
    caches.keys().then(async (s) => {
      for (const a of s)
        a !== i && await caches.delete(a);
    })
  );
});
n.addEventListener("fetch", (t) => {
  const s = async () => {
    let a = await caches.match(t.request.clone());
    return a || await fetch(t.request);
  };
  t.respondWith(s());
});
