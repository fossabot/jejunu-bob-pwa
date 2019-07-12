workbox.setConfig({
	debug: true,
});

workbox.precaching.precacheAndRoute([
	'/',
])

workbox.routing.registerRoute(
	new RegExp('/*.js'),
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'js'
	})
)

workbox.routing.registerRoute(
	new RegExp('/*.css'),
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'css'
	})
)

workbox.routing.registerRoute(
	new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
	workbox.strategies.cacheFirst({
		cacheName: 'googleapis',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 30
			})
		]
	})
)

workbox.routing.registerRoute(
	/\.(?:png|gif|jpg|jpeg|svg)$/,
	workbox.strategies.staleWhileRevalidate({
		cacheName: 'images',
	})
)

workbox.routing.registerRoute(
	'https://d19lb0v9rjjem3.cloudfront.net/index.json',
	workbox.strategies.networkFirst({
		cacheName: 'api'
	})
)
