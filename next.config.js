
nextconfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    
                },
            ],
        });
        return config;
    },
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'fonts.googleapis.com',
        ],
        unoptimized: true
    },
    reactStrictMode: true,
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        forceSwcTransforms: false,
    }
};

module.exports = nextconfig