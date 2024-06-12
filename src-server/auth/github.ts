
export async function authGithubHandler(res, req, url) {
    const key_str = process.env.GITHUB_TOKEN;
    //const datajsonformatted
    
    const match_live = url.match(/user=([^&]*)/);
    const giturl = `https://api.github.com/users/${match_live[1]}`;
    fetch(giturl, {
        headers: {
            Authorization: `Bearer ${key_str}`,
            "X-GitHub-Api-Version": "2022-11-28",
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify({
                user: match_live[1],
                message: "vx v0.5",
                id: data.login,
                name: data.name,
                email: data.email,
                image: data.avatar_url,
                datasorce: ["github", "vx-auth-x9"],
            }));
        })
        .catch(error => {
            res.end(JSON.stringify({
                message: "vx v0.5",
                error: error.message,
                url : giturl
            }));
        });
    res.statusCode = 200;
}

