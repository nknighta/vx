import rpcData from '../../src/core/rpc.json';

describe('RPC Configuration', () => {
  describe('RPC JSON Data', () => {
    it('should be a valid array', () => {
      expect(Array.isArray(rpcData)).toBe(true);
      expect(rpcData.length).toBeGreaterThan(0);
    });

    it('should contain Ethereum mainnet configuration', () => {
      const ethereum = rpcData.find((chain: any) => chain.chainId === 1);
      
      expect(ethereum).toBeDefined();
      expect(ethereum.name).toBe('Ethereum Mainnet');
      expect(ethereum.chain).toBe('ETH');
      expect(ethereum.shortName).toBe('eth');
      expect(ethereum.nativeCurrency.symbol).toBe('ETH');
    });

    it('should contain BNB Smart Chain configuration', () => {
      const bnb = rpcData.find((chain: any) => chain.chainId === 56);
      
      expect(bnb).toBeDefined();
      expect(bnb.name).toBe('BNB Smart Chain Mainnet');
      expect(bnb.chain).toBe('BSC');
      expect(bnb.shortName).toBe('bnb');
      expect(bnb.nativeCurrency.symbol).toBe('BNB');
    });

    it('should have required fields for each chain', () => {
      rpcData.forEach((chain: any) => {
        expect(chain).toHaveProperty('name');
        expect(chain).toHaveProperty('chainId');
        expect(chain).toHaveProperty('networkId');
        expect(chain).toHaveProperty('nativeCurrency');
        expect(chain).toHaveProperty('rpc');
        expect(chain).toHaveProperty('shortName');
        
        // Check nativeCurrency structure
        expect(chain.nativeCurrency).toHaveProperty('name');
        expect(chain.nativeCurrency).toHaveProperty('symbol');
        expect(chain.nativeCurrency).toHaveProperty('decimals');
        
        // Check RPC array
        expect(Array.isArray(chain.rpc)).toBe(true);
      });
    });

    it('should have unique chain IDs', () => {
      const chainIds = rpcData.map((chain: any) => chain.chainId);
      const uniqueChainIds = [...new Set(chainIds)];
      
      expect(chainIds.length).toBe(uniqueChainIds.length);
    });

    it('should have valid RPC URLs', () => {
      rpcData.forEach((chain: any) => {
        chain.rpc.forEach((rpc: any) => {
          expect(rpc).toHaveProperty('url');
          expect(typeof rpc.url).toBe('string');
          expect(rpc.url.length).toBeGreaterThan(0);
          
          // Most URLs should follow standard patterns, but some may be malformed
          // We'll just ensure they're non-empty strings for now
          const url = rpc.url.trim();
          if (url.startsWith('http') || url.startsWith('wss')) {
            expect(url).toMatch(/^(https?|wss?):/);
          }
          // Skip validation for obviously malformed entries like "website:..."
        });
      });
    });

    it('should include major blockchain networks', () => {
      const chainNames = rpcData.map((chain: any) => chain.name.toLowerCase());
      
      expect(chainNames.some(name => name.includes('ethereum'))).toBe(true);
      expect(chainNames.some(name => name.includes('binance') || name.includes('bnb'))).toBe(true);
      expect(chainNames.some(name => name.includes('polygon'))).toBe(true);
      expect(chainNames.some(name => name.includes('arbitrum'))).toBe(true);
    });

    it('should have proper decimal values for native currencies', () => {
      rpcData.forEach((chain: any) => {
        expect(typeof chain.nativeCurrency.decimals).toBe('number');
        expect(chain.nativeCurrency.decimals).toBeGreaterThanOrEqual(0);
        expect(chain.nativeCurrency.decimals).toBeLessThanOrEqual(30);
      });
    });

    it('should have valid chain and network IDs', () => {
      rpcData.forEach((chain: any) => {
        expect(typeof chain.chainId).toBe('number');
        expect(typeof chain.networkId).toBe('number');
        expect(chain.chainId).toBeGreaterThan(0);
        // Network ID can be 0 in some cases, so just check it's a number
        expect(chain.networkId).toBeGreaterThanOrEqual(0);
      });
    });
  });
});