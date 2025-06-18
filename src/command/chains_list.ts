import { chainlist } from '../libs/chains';

export function selectMenu(options: string[], callback: (selected: string) => void) {
  const readline = require('readline');
  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);

  let selected = 0;
  function render() {
    process.stdout.write('\x1Bc'); // clear screen
    console.log('Available chains (Use up and down keys to select, press Enter to confirm):');
    options.forEach((opt, i) => {
      if (i === selected) {
        console.log(`> ${opt}`);
      } else {
        console.log(`  ${opt}`);
      }
    });
  }
  render();
  function onKeypress(_: any, key: any) {
    if (key.name === 'up') {
      selected = (selected - 1 + options.length) % options.length;
      render();
    } else if (key.name === 'down') {
      selected = (selected + 1) % options.length;
      render();
    } else if (key.name === 'return') {
      process.stdin.setRawMode(false);
      process.stdin.removeListener('keypress', onKeypress);
      callback(options[selected]);
      process.exit(); // 選択後にプロセス終了
    } else if (key.name === 'c' && key.ctrl) {
      process.exit();
    }
  }
  process.stdin.on('keypress', onKeypress);
}

export function chainsList() {
  const chains = chainlist();
  if (Object.keys(chains).length === 0) {
    console.error('No chains available.');
    return;
  }

  const chainNames = Object.keys(chains);
  selectMenu(chainNames, (selected) => {
    console.log(`selected ${chains[selected].name}`);
  });
}
