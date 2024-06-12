import { createHash } from 'crypto'

export async function authCallbackHandler(res, req, url) {    
    const key_str = process.env.GITHUB_TOKEN;
    fetch("https://api.github.com/users/nknighta", {
        headers: {
            Authorization: `Bearer ${key_str}`,
            "X-GitHub-Api-Version": "2022-11-28",
        },
    })
        .then(response => {
            console.log("key", key_str);
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
            
            //console.log(`${baseurl}/dashboard?user=${data.login}&authcode=${hashedp.digest('hex')}`)
            res.writeHead(301 , {Location: `http://localhost:3000/dashboard?user=${data.login}`})
            res.end(JSON.stringify({
                message: "vx v0.5",
                id: data.id,
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
                error_detail: error.message,
            }));
        });
    }
