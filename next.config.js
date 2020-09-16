const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    // basePath: '/miguel.julio',
    assetPrefix: isProd ? '/miguel.julio' : '', // assets (js, images, css, etc...)
    webpack: (config) => {
        config.module.rules.push({
            // This is telling webpack how to load the .graphql files.
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader',
        })
        return config
    },
    webpackDevMiddleware: (config) => {
        return config
    },
}
