import { init } from './pjmake';
import shellhaldler from './input';
import localServer from '../server/dev';

const args = process.argv.slice(2);
// epcmager.main();

export default async function VX() {
  if (args.length === 0) {
    help();
    return;
  }
  try {

    switch (args[0]) {
      case 'init':
        init();
        break;
      case 'help':
        help();
        break;
      case 'create':
        shellhaldler();
        return;
      case 'serve':
        localServer();
        return;
      case 'dash':
        console.log('🚀🚀🚀🚀\n');
        console.log('build dashboard now. stay tuned!');
        break;
      default:
        console.error(`😑 < Unknown command: ${args[0]}`);
        help();
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

function help() {
  const packageJson = require('../../package.json');
  console.log(`VX CLI version ${packageJson.version}`);
  console.log('A command line interface for VX SDK\n');
  console.log('Usage:');
  console.log('project generation:');
  console.log('  --chais - Show available chains');
}
