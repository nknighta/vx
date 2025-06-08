const npmjsontemplate = `{
  "name": "your-package-name",
    "version": "1.0.0",
    "description": "A brief description of your package",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "Your Name",
    "license": "ISC",
    "dependencies": {
      "vx-sdk": "^1.0.0"
    },
    "devDependencies": {
      "typescript": "^4.0.0",
      "ts-node": "^10.0.0"
    }
}`;

import * as fs from 'fs';
import * as path from 'path';

export function createPackageJson(projectDir: string) {
  const packageJsonPath = path.join(projectDir, 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    fs.writeFileSync(packageJsonPath, npmjsontemplate, 'utf8');
    console.log(`Created package.json at ${packageJsonPath}`);
  } else {
    console.log(`package.json already exists at ${packageJsonPath}`);
  }
}
