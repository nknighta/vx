const envs = {
    development: {
        NEXTAUTH_URL: 'http://localhost:3000/',
        GITHUB_ID: "f70fe782834c0370",
        GITHUB_SECRET: "21fe0e5c719a5d274ad2b4d3802b14d626ed72bd",
        NEXTAUTH_SECRET: "iJHIjbxhyAiWDCeV7ixcRIUBEmGVhe8tQbDmPSr5Ysc="
    },
    production: {
        API_URL: 'https://api.example.com',
    },
};

module.exports = envs[process.env.NODE_ENV || 'production'];