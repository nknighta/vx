import express, { Request, Response } from "express";

const x9 = express();

//const username = process.argv[2];
const github_oauth_url = `https://github.com/login/oauth/authorize?client_id=Iv23liPZ52IzTbEuz76C`;

x9.get('/x9/', (req, res) => {
    //console.log(req.query.country)
    res.redirect(github_oauth_url)
}
);

x9.get('/x9/auth/callback/', (req, res) => {
    //console.log(req.query.country)
    const URL = 'https://github.com/login/oauth/access_token';
    const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
    const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
    const TEMP_CODE = req.query.code;  // 一時コード
    // HTTP リクエストのカスタマイズ
    const fetchOption = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: TEMP_CODE,
        })
    };
    // HTTP POST リクエストを送信
    fetch(URL, fetchOption)
        .then(res => {
            if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            res.setHeader("Content-Type", "application/json");
            // 一時コードを使ってアクセストークンを取得
            const giturl = `https://api.github.com/user`;
            // アクセストークンからユーザー情報を取得
            fetch(giturl, {
                headers: {
                    Authorization: `Bearer ` + data.access_token,
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
                        user: data.login,
                        id: data.login,
                        name: data.name,
                        email: data.email,
                        image: data.avatar_url,
                        created_at: data.created_at,
                        provider: "github",
                    }));
                })
                .catch(error => {
                    console.error('Error:', error);
                    res.setHeader("Content-Type", "text/html");
                    res.send(`<div>faild github login back to <a href="/">home</a></div>`);
                });
        })
        // エラーはまとめて処理
        .catch(err => console.error(err));
});

x9.get('/x9/main/', (req, res) => {
    res.send(`
        <head>
            <title>X9 Auth for vx</title>
        </head>
        <div>
            <a href="${github_oauth_url}">Login with GitHub</a>
        </div>
        `);
});
export default x9;