self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('my-cache').then(function(cache) {
			return cache.addAll(
				[
					'/wpa/sw.js',
					'/wpa/',
					'/wpa/index.html',
					'/wpa/static/jquery-3.4.1.min.js',
					'/wpa/static/bootstrap/js/bootstrap.min.js',
					'/wpa/static/bootstrap/css/bootstrap.min.css',
					'/wpa/static/img/site.webmanifest',
					'/wpa/static/img/favicon-16x16.png',
					'/wpa/static/img/favicon-32x32.png',
					'/wpa/static/img/apple-touch-icon.png'
				]
			);
		})
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request);
		})
	);
});
