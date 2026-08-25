// Service Worker - PEDCOR
// Permite instalar la app como PWA y que funcione sin conexión a internet
// una vez que se cargó por primera vez.

const CACHE_NAME = 'pedcor-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './assets/icon-192.png',
    './assets/icon-512.png',
    './assets/apple-touch-icon.png',
];

// Al instalar: guardamos los archivos base en caché
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
    self.skipWaiting();
});

// Al activar: limpiamos cachés viejos de versiones anteriores
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

// Estrategia: intenta red primero (para tener siempre la versión más reciente),
// si no hay internet, sirve la versión guardada en caché.
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html')))
    );
});
