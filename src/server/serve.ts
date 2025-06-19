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

export default function server({ host, port, chains, env, debug, displaylogs }: ServerOptions) {
  const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Welcome to VX SDK Server!\n");
  });

  const args = process.argv.slice(2);
  port = args[1];
  // Ensure PORT is a valid number, default to 3000 if not
  const portNumber = isNaN(Number(port)) ? 3000 : Number(port);

  server.listen(portNumber, host, () => {
    if (debug) {
      console.log(`Server on http://${host}:${portNumber} with debug mode`);
      
    } else if (displaylogs) {
      console.log(`Server on http://${host}:${portNumber}`);
    } else {
      return;
    }
  });

  if (server.listening) {
    console.log('already server is running');
  }

  // 開発環境向けのグレースフルシャットダウン処理
  process.once('SIGUSR2', function () {
    server.close(function () {
      console.log('server closed');
      process.kill(process.pid, 'SIGUSR2');
    });
  });

  // その他の終了シグナルに対応
  process.on('SIGINT', () => {
    server.close(() => {
      console.log('Server closed gracefully');
      process.exit(0);
    });
  });
}
