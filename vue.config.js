// vue.config.js
module.exports = {
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'public/service-worker.js',
            exclude: [
                /\.map$/, 
                /manifest\.json$/ 
            ],
        },
        themeColor: '#F1F1F1'
    }
}
