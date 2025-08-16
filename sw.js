const CACHE_NAME = "runcoach-cache-v1";
const urlsToCache = [
  "index.html",
  "manifest.json"
];

// Εγκατάσταση
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Λειτουργία offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
