module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
            'main.js',
            'test/*.js'
        ],
        reporters: ['progress'],
        port: 9876,  // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['Firefox'],
        autoWatch: false,
        concurrency: Infinity,
        customLaunchers: {
            FirefoxHeadless: {
                base: 'Firefox',
                flags: ['-headless'],
            },
        },
    })
}