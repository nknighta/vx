import { z } from "zod";
import { createHash } from 'crypto'

export async function authCallbackHandler(res, req, url) {
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
            //const keyget = req.url;
            const match_live = url.match(/code=([^&]*)/);
            console.log("type", typeof match_live);
            console.log("match", match_live);
            const hash = createHash('sha256');
            const str = match_live[1];
            const hashedp = hash.update(str);
            res.writeHead(301, {
                Location: `http://varius.technology:3003/dashboard?user=${data.login}&authcode=${hashedp.digest('hex')}`
            });
            res.end(JSON.stringify({
                message: "vx v0.5",
                id: data.login,
                name: data.name,
                email: data.email,
                image: data.avatar_url,
                datasorce: ["github", "vx-auth-x9"],
                authcode: match_live
            }));
        })
        .catch(error => {
            res.end(JSON.stringify({
                message: "vx v0.5",
                error: "faild to fetch data from github",
                error_detail: error,
            }));
        });
    res.statusCode = 200;
}
