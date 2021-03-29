const withCss  = require('@zeit/next-css');

module.exports = withCss({
    webpack: (config) => {
        config.module.rules[0].use = [
            config.module.rules[0].use,
            {
                loader: "@linaria/webpack-loader",
                options: {
                    sourceMap: process.env.NODE_ENV !== "production"
                }
            }
        ];
        return config;
    }
})
