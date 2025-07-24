import { createConfig } from '../../src/core/core';

describe('Core Module', () => {
  describe('createConfig class', () => {
    it('should create a config with name only', () => {
      const config = new createConfig('test-config');
      
      expect(config.name).toBe('test-config');
      expect(config.nodeconfigbuilder).toEqual([]);
    });

    it('should create a config with name and node config builder', () => {
      const nodeConfigBuilder = [{ type: 'test', value: 'config' }];
      const config = new createConfig('test-config', nodeConfigBuilder);
      
      expect(config.name).toBe('test-config');
      expect(config.nodeconfigbuilder).toEqual(nodeConfigBuilder);
    });

    it('should handle userNodeConfigulation with empty config', () => {
      const config = new createConfig('test-config');
      const consoleSpy = jest.spyOn(console, 'log');
      
      config.userNodeConfigulation();
      
      expect(consoleSpy).toHaveBeenCalledWith('No node configuration provided.');
    });

    it('should handle userNodeConfigulation with node configs', () => {
      const nodeConfigs = [
        { name: 'config1', value: 'test1' },
        { name: 'config2', value: 'test2' }
      ];
      const config = new createConfig('test-config', nodeConfigs);
      
      // Should not throw and should process configs
      expect(() => config.userNodeConfigulation()).not.toThrow();
    });

    it('should initialize nodeconfigbuilder as empty array when not provided', () => {
      const config = new createConfig('test-name');
      
      expect(Array.isArray(config.nodeconfigbuilder)).toBe(true);
      expect(config.nodeconfigbuilder.length).toBe(0);
    });
  });
});