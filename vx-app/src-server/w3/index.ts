
export async function W3(res, req, url) {
    const key_str = process.env.GITHUB_TOKEN;

    const match_live = url.match(/user=([^&]*)/);

    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({
        message: "vx v0.5",
    }));
    res.statusCode = 200;
}

