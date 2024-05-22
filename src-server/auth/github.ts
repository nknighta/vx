export async function authGithubHandler(res, req) {
    const serverkey = process.env.GITHUB_KEY;
    // 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
    fetch("https://api.github.com/user", {
        headers: {
            Authorization: `Bearer ${serverkey}`,
            "X-GitHub-Api-Version": "2022-11-28",
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json(); // レスポンスがJSON形式の場合
        })
        .then(data => {
            console.log("Data fetched:", data);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                message: "vx v0.5",
                nodeid: data.node_id,
                userid: data.login,
                name: data.name,
                avator: data.avatar_url,
                email: data.email,
            }));
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    res.statusCode = 200;
}