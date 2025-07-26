import { rpc_create_config } from "./config";

export function rpc() {
    const subcommand = process.argv[3];
    if (subcommand === 'init') {
        rpc_create_config();
    } else {
        console.log(`Unknown subcommand: ${subcommand}`);
    }
}