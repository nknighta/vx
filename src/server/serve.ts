// local development server for vx-sdk
import { createServer } from "http";

export default function server() {
    const server = createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("VX SDK Server is running\n");
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`VX SDK Server is running on http://localhost:${PORT}`);
    });
}