import * as path from 'path';
import * as fs from 'fs';

const loadJson = (filePath: string): any => {
    const rpcname = [];
    const absolutePath = path.resolve(filePath);
    if (!fs.existsSync(absolutePath)) {
        throw new Error(`File not found: ${absolutePath}`);
    }
    const fileContent = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(fileContent);
};

// Example usage:
const jsonData = loadJson('./src/core/rpc.json');
console.log(jsonData);