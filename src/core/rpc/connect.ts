export function view_rpc_config() {
    const fs = require('fs');
    const path = require('path');

    const configPath = path.join(process.cwd(), 'vx.config.json');

    if (!fs.existsSync(configPath)) {
        console.error('vx.config.json does not exist. Please run "vx rpc init" to create it.');
        process.exit(1);
    }

    try {
        const configContent = fs.readFileSync(configPath, 'utf-8');
        //return JSON.parse(configContent);
        console.log(configContent);
        process.exit(0);
    } catch (error) {
        console.error(`Error reading vx.config.json: ${error.message}`);
        process.exit(1);
    }
}

export function load_rpc_config(rpcConfigPath: string) {
    const fs = require('fs');
    const path = require('path');

    const configPath = path.join(process.cwd(), rpcConfigPath);

    if (!fs.existsSync(configPath)) {
        console.error('vx.config.json does not exist. Please run "vx rpc init" to create it.');
        process.exit(1);
    }

    try {
        const configContent = fs.readFileSync(configPath, 'utf-8');
        return JSON.parse(configContent);
    } catch (error) {
        console.error(`Error reading vx.config.json: ${error.message}`);
        process.exit(1);
    }
}