module.exports = {
    basePath: '/miguel.julio', // for the router
    assetPrefix: '/miguel.julio', // assets (js, images, css, etc...)
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
