self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('my-cache').then(function(cache) {
			return cache.addAll(
				[
					'/sw.js',
					'/',
					'/index.html',
					'/static/jquery-3.4.1.min.js',
					'/static/bootstrap/js/bootstrap.min.js',
					'/static/bootstrap/css/bootstrap.min.css',
					'/static/img/site.webmanifest',
					'/static/img/favicon-16x16.png',
					'/static/img/favicon-32x32.png',
					'/static/img/apple-touch-icon.png'
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
