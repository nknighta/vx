import fs from 'fs';

/*
source https://chainlist.org/rpcs.json
*/

export function connector() {
    fs.readFile('./src/core/rpc.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.error('rpc load failture:', err);
            process.exit(1);
            return;
        }
        try {
            const data = JSON.parse(jsonString);
            data.forEach((item: any) => {
                console.log(`RPC: ${item.name}`);
            });
            process.exit(0);
        } catch (err) {
            console.error('parse json error:', err);
            process.exit(1);
        }
    });
}