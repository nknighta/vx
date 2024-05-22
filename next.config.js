loadEnv(process.env.APP_ENV);

const envs = loadEnv(process.env.APP_ENV);

module.exports = {
    env: envs,
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

/** @type {import('next').NextConfig} */
    
/**
 * @param {string} appEnv
 */
function loadEnv(appEnv = "development") {
    const env = {
        ...require(`./env/env.${appEnv}.js`),
        NEXT_PUBLIC_APP_ENV: appEnv,
    };

    Object.entries(env).forEach(([key, value]) => {
        process.env[key] = value;
    });
}