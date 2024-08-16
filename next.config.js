

module.exports = {
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'fonts.googleapis.com',
            'media.varius.technology',
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
    },
};
