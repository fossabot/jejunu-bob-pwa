// vue.config.js
module.exports = {
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'public/service-worker.js'
        },
		themeColor: '#F1F1F1',
		background_color: '#F1F1F1'
    }
}
