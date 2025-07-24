import vx from '../../src/core/contract';

describe('Contract Module', () => {
  describe('vx function', () => {
    it('should log hello message without parameter', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      
      vx();
      
      expect(consoleSpy).toHaveBeenCalledWith('hello!undefined');
    });

    it('should log hello message with parameter', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      const testMessage = ' world';
      
      vx(testMessage);
      
      expect(consoleSpy).toHaveBeenCalledWith('hello!' + testMessage);
    });

    it('should handle empty string parameter', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      
      vx('');
      
      expect(consoleSpy).toHaveBeenCalledWith('hello!');
    });

    it('should handle numeric parameter as string', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      
      vx('123');
      
      expect(consoleSpy).toHaveBeenCalledWith('hello!123');
    });

    it('should return undefined', () => {
      const result = vx('test');
      
      expect(result).toBeUndefined();
    });
  });
});