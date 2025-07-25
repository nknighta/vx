// Mock RPC response data for testing
export const mockRpcChains = [
  {
    "name": "Ethereum Mainnet",
    "chain": "ETH",
    "rpc": [
      {
        "url": "https://eth.llamarpc.com",
        "tracking": "none",
        "isOpenSource": true
      }
    ],
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "chainId": 1,
    "networkId": 1,
    "shortName": "eth"
  },
  {
    "name": "BNB Smart Chain Mainnet",
    "chain": "BSC",
    "rpc": [
      {
        "url": "https://binance.llamarpc.com",
        "tracking": "none",
        "isOpenSource": true
      }
    ],
    "nativeCurrency": {
      "name": "BNB Chain Native Token",
      "symbol": "BNB",
      "decimals": 18
    },
    "chainId": 56,
    "networkId": 56,
    "shortName": "bnb"
  }
];

export const mockTodoResponse = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false
};

export const mockServerConfig = {
  host: "127.0.0.1",
  port: 3000,
  env: "test",
  debug: true
};

export const mockNodeConfig = [
  {
    name: "testNode1",
    type: "ethereum",
    url: "https://mainnet.infura.io/v3/test"
  },
  {
    name: "testNode2", 
    type: "polygon",
    url: "https://polygon-mainnet.g.alchemy.com/v2/test"
  }
];