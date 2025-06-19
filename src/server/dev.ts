// local development server for vx-sdk
import { createServer } from 'http';

// Helper functions to parse command-line arguments
function getArgValue(args: string[], flag: string): string | undefined {
    const index = args.indexOf(flag);
    if (index !== -1 && index + 1 < args.length) {
        return args[index + 1];
    }
    return undefined;
}

function hasFlag(args: string[], flag: string): boolean {
    return args.includes(flag);
}

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

export default function localServer(options?: Partial<ServerOptions>) {
    // Parse command line arguments
    const args = process.argv.slice(2);

    // Extract options from command line arguments or use provided options
    const host = getArgValue(args, '--host') || options?.host || '127.0.0.1';
    const port = getArgValue(args, '--port') || options?.port || '3000';

    // Parse chains if provided
    const chainsArg = getArgValue(args, '--chains');
    const chains = chainsArg ? JSON.parse(chainsArg) : options?.chains;

    // Parse other flags
    const env = getArgValue(args, '--env') || options?.env || 'development';
    const debug = hasFlag(args, '--debug') || options?.debug || false;
    const displaylogs = hasFlag(args, '--logs') || options?.displaylogs || false;

    const server = createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Welcome to VX SDK Server!\n");
    });

    // Ensure PORT is a valid number, default to 3000 if not
    const portNumber = isNaN(Number(port)) ? 3000 : Number(port);

    server.listen(portNumber, host, () => {
        if (debug) {
            console.log(`Server on http://${host}:${portNumber} with debug mode`);
            if (chains) {
                console.log('Available chains:', chains);
            }
            console.log('Environment:', env);
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

