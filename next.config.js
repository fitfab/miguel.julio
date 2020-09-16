module.exports = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH, // for the router
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH, // assets (js, images, css, etc...)
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
