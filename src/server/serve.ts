// local development server for vx-sdk
import { createServer } from 'http';

export default function server() {
  const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('VX SDK Server is running\n');
  });

  const args = process.argv.slice(2);
  const port = args[1];
  // Ensure PORT is a valid number, default to 3000 if not
  const portNumber = isNaN(Number(port)) ? 3000 : Number(port);
  server.listen(portNumber, () => {
    console.log(`VX SDK Server is running on http://localhost:${portNumber}`);
  });
}
