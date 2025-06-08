import * as fs from 'fs';
import * as path from 'path';
import {createPackageJson} from '../libs/builder';

const args = process.argv.slice(2);

export function init() {
    const projectdir = process.cwd();
    const projectDirPath = path.join(projectdir, args[1] || 'my-vx-project');
    if (!fs.existsSync(projectDirPath)) {
        fs.mkdirSync(projectDirPath, { recursive: true });

        // Copy the template files to the new project directory
        const templateDir = path.join(__dirname, '../../template');
        const files = fs.readdirSync(templateDir);
        // create a package.json file for vx project
        // if it does not exist
        createPackageJson(args[1]);
        files.forEach((file) => {
            const srcFilePath = path.join(templateDir, file);
            const destFilePath = path.join(projectDirPath, file);
            fs.copyFileSync(srcFilePath, destFilePath);
        });
        console.log(`Directory created at: ${projectDirPath}`);
    } else {
        console.log(`Directory already exists at: ${projectDirPath}`);
    }
}
