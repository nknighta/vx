// local development server for vx-sdk
import { createServer } from 'http';
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider();

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
        // Handle /api endpoint
        if (req.url === '/api' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Welcome to the VX SDK API', status: 'success' }));
        } else if (req.url === '/debug') {
            // Handle /debug endpoint
            let blognum = 0;
            provider.getBlockNumber().then((blockNumber) => {
                blognum = blockNumber;
            }).catch((error) => {
                console.error('Error fetching block number:', error);
            });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<html><head><title>VX debug tool</title></head><style>* {padding:0; margin:0; }</style><body><h1>Debug Endpoint ${blognum} num</h1><p>Server is running in debug mode.</p></body></html>\n`);
        }
        else {
            // Default response for all other requests
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Welcome to VX SDK Server!\n");
        }
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
    server.on('error', (err) => {
        console.error('Server error:', err);
        process.exit(1);
    });


    if (server.listening) {
        console.log('already server is running');
    }

}

