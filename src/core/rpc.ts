
const readline = require("node:readline");
const rl = readline.createInterface({
    input: process.stdin,
    prompt: 'コマンドを入力してください> ',
});

export function rpc() {
    rl.prompt();

    rl.on('line', (line) => {
        switch (line.trim()) {
            case 'exit':
                rl.close();
                break;
            default:
                console.log(`コマンド "${line.trim()}" は認識されません。`);
                rl.prompt();
        }
    });
}