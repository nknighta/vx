import { z } from "zod";

export async function authCallbackHandler(res, req) {
    const pst = z.string();
    const serverkey = process.env.GITHUB_KEY;
    const key_str = pst.parse(serverkey);
    //const datajsonformatted
    fetch("https://api.github.com/user", {
        headers: {
            Authorization: `Bearer ${key_str}`,
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
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
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
                error: "faild to fetch data from github",
            }));
        });
    res.statusCode = 200;
}