// using sample code from https://nextjs.org/docs/pages/building-your-application/configuring/custom-server
import { createServer } from "http";
import { parse } from "url";
import { z } from "zod";
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev })
const handle = app.getRequestHandler()

const github_oauth_url = `https://github.com/login/oauth/authorize?client_id=Iv1.f70fe782834c0370`;

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const pz = z.string();
      const url = pz.parse(req.url);
      const parsedUrl = parse(url, true)
      const { pathname } = parsedUrl
      if (pathname === '/hello') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ message: 'Hello World' }))
      } else if (pathname === '/w3/') {
        res.writeHead(301, { Location: '/w3/core/' });
      } else if (pathname === '/api/info') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(
          JSON.stringify({
            message: 'welcome to vx!', version: {
              global: '0.6.5',
              api: '0.1.3',
              ethlog: '0.2.1',
              auth: '0.1.1'
            },
            server: "jp"
          }))
      } else if (pathname === '/auth/github') {
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

            const match_live = "nknighta";
            const giturl = `https://api.github.com/users/${match_live}`;
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
              /*
              .then(data => {
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({
                      user: match_live,
                      message: "vx v0.5",
                      id: data.login,
                      name: data.name,
                      email: data.email,
                      image: data.avatar_url,
                      created_at: data.created_at,
                      datasorce: ["github", "vx-auth-x9"],
                  }));
              })
              */
              .then(data => {
                res.setHeader("Content-Type", "text/html");
                res.end(
                  `
                            <div>
                            <h1>${data.name}</h1>
                                <img src="${data.avatar_url}" alt="${data.name}" />
                                <p>${data.bio}</p>
                                <style>
                                * {
                                    font-family: Arial, sans-serif;
                                    padding: 0;
                                    margin: 0;
                                }
                                </style>
                                <a href="/">logout</a>
                            <div>
                                `
                );
              })
              .catch(error => {
                res.setHeader("Content-Type", "text/html");
                res.end(`<div>faild github login back to <a href="/">home</a></div>`);
              });
          })
          // エラーはまとめて処理
          .catch(err => console.error(err));
      }
      else {
        await handle(req, res, parsedUrl)
      }

    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(3000, () => {
      console.log(`> Ready on http://localhost:3000`)
    })
})

export default app;