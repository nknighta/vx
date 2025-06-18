import * as fs from 'fs';
import * as path from 'path';

export const chainlist = () => {
  const chains = {
    main: {
      name: 'Mainnet',
      description: 'The main Ethereum network',
      rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT'
    },
  };
  return chains;
};
