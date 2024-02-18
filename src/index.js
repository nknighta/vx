const { Command } = require('commander');
const program = new Command();

program
  .name('vx')
  .description('sdk for vx platform')
  .version('0.1.0')

program.command('init')
  .description('initialize the sdk')
  .argument('<project-name>', 'string to split')
  .option('-T, --token-file', 'token file path')
  .action(() => {
    console.log('in');
  });
program.command('version')
    .description('print the version')
    .action(() => {
        console.log('0.1.0');
    });
program.parse();