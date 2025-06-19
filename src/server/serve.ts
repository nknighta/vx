// local development server for vx-sdk
import { createServer } from 'http';

interface ServerOptions {
  host: string;
  port: number | string;
  chains?: [
    {
      name: string;
      chaiId: number;
      rpcUrl: string;
    }
  ];
  env?: string;
  debug?: boolean;
  displaylogs?: boolean;
}

export default function server({host, port, chains, env, debug, displaylogs}: ServerOptions) {
  const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('VX SDK Server is running\n');
  });

  const args = process.argv.slice(2);
  port = args[1];
  // Ensure PORT is a valid number, default to 3000 if not
  const portNumber = isNaN(Number(port)) ? 3000 : Number(port);
  
  if (debug) {
    console.log(`Server on ${host}:${portNumber} with debug mode`);
  } else if (displaylogs) {
    console.log(`Server on ${host}:${portNumber}`);
  } else {
    return;
  }
}
