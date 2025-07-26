export function rpc() {
    process.stdin.setEncoding("utf8");

    var lines = [];
    const fs = require("fs");
    const path = require("path");
    var reader = require("readline").createInterface({
        input: process.stdin,
        output: null, // Disable echoing of input
        terminal: true, // Ensure proper terminal behavior
    });

    reader.on("line", (line) => {
        console.log(`Received line: ${line}`);
        lines.push(line);
    });
    reader.on("close", () => {
        console.log("completed reading lines.");
        if (lines.length > 0) {
            try {
                const configDir = path.join(__dirname, "..", "..", "config");
                if (!fs.existsSync(configDir)) {
                    console.log(`Creating config directory at ${configDir}`);
                    fs.mkdirSync(configDir, { recursive: true });
                }
                const filePath = path.join(configDir, "rpc.json");
                fs.writeFileSync(filePath, JSON.stringify(lines, null, 2), "utf-8");
                console.log(`Data successfully written to ${filePath}`);
            } catch (err) {
                console.error(`Error writing to file: ${err.message}`);
            }
        } else {
            console.log("No lines received.");
        }
    });
}