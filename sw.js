/* ═══════════════════════════════════════════════════════════════
   MY STUDY APP — Service Worker
   Gives the app real offline support. My Study App is used by students
   on patchy/expensive mobile data, so once someone has opened the app
   once, everything except live features (Duel Mode sync, AI calls,
   payments) should keep working with zero network.

   BUMP CACHE_VERSION ON EVERY DEPLOY THAT TOUCHES index.html, css/js,
   or any data/*.js file. Bumping it is what makes the old cache get
   cleared and the new files get fetched — skipping this means
   students' phones keep serving the OLD app indefinitely.
═══════════════════════════════════════════════════════════════ */

const CACHE_VERSION = 'hh-v18';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css?v=1',
  './js/app.js',
  './data/senior/senior-bank.js',
  './data/senior/senior-resources.js',
  './data/junior/junior-bank.js',
  './data/junior/junior-resources.js',
  './data/manifest.js',
  './icon-192.png',
  './icon-512.png',
];

// Anything under these paths is live/dynamic and must NEVER be served
// from cache: API calls, payments, AI responses, challenge sync.
const NEVER_CACHE = [
  'editoby-api.vercel.app',
  'api.paystack.co',
  'js.paystack.co',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return; // never intercept POSTs (API/payment calls)

  const url = new URL(req.url);
  if (NEVER_CACHE.some((host) => url.hostname.includes(host))) return; // let it hit the network as normal

  // App shell + same-origin assets: cache-first, refresh in the background
  // so the next visit picks up updates without ever blocking on network.
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchAndUpdate = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached); // offline: fall back to whatever's cached

      return cached || fetchAndUpdate;
    })
  );
});
