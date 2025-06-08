import Run from './chains_list';
import server from '../server/serve';
import { init } from './pjmake';
import { argsToString, shellAsync } from '../libs/shell';

const args = process.argv.slice(2);

export default function VX() {
  if (args.length === 0) {
    help();
    return;
  }

  switch (args[0]) {
    case 'chains':
      Run();
      break;
    case 'init':
      init();
      break;
    case 'help':
      help();
      break;
    case 'serve':
      server();
      break;
    case 'create':
      //args.map(arg => (arg.includes(' ') ? `"${arg}"` : arg)).join(' ');
      console.log(argsToString(args.slice(1)));
      break;
    default:
      console.error(`Unknown command: ${args[0]}`);
      help();
  }
}

function help() {
  const packageJson = require('../../package.json');
  console.log(`VX CLI version ${packageJson.version}`);
  console.log('A command line interface for VX SDK\n');
  console.log('Usage:');
  console.log('  vx chains - List available chains');
  console.log('  vx help - Show this help message \n');
  console.log('project generation:');
  console.log(
    '  vx init [project-name] - Initialize a VX project in the current directory or specified name\n'
  );
  console.log('debug:');
  console.log('  vx serve - Start VX server for development');
  console.log('  -p portnumber');
  console.log('options:');
  console.log('  --chais - Show available chains');
}
