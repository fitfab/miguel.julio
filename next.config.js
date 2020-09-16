module.exports = {
    basePath: '/miguel.julio',
    assetPrefix: '/miguel.julio', // this is for the images
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
