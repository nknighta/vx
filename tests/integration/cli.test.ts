import VX from '../../src/command/main';

describe('CLI Commands', () => {
  let originalArgv: string[];
  let consoleSpy: jest.SpyInstance;
  let processExitSpy: jest.SpyInstance;

  beforeEach(() => {
    originalArgv = process.argv;
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {
      throw new Error('process.exit called');
    });
  });

  afterEach(() => {
    process.argv = originalArgv;
    jest.restoreAllMocks();
  });

  describe('Help Command', () => {
    it('should display help when no arguments provided', async () => {
      process.argv = ['node', 'script.js'];
      
      try {
        await VX();
      } catch (error) {
        expect(error.message).toBe('process.exit called');
      }

      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('🚀 VX CLI v'));
      expect(consoleSpy).toHaveBeenCalledWith('Available commands:');
      expect(processExitSpy).toHaveBeenCalledWith(0);
    });

    it('should display help when help command is used', async () => {
      process.argv = ['node', 'script.js', 'help'];
      
      try {
        await VX();
      } catch (error) {
        expect(error.message).toBe('process.exit called');
      }

      expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('🚀 VX CLI v'));
      expect(consoleSpy).toHaveBeenCalledWith('Available commands:');
      expect(processExitSpy).toHaveBeenCalledWith(0);
    });
  });

  describe('Version Command', () => {
    it('should display version with --version flag', async () => {
      process.argv = ['node', 'script.js', '--version'];
      
      try {
        await VX();
      } catch (error) {
        expect(error.message).toBe('process.exit called');
      }

      expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/VX CLI version: \d+\.\d+\.\d+/));
      expect(processExitSpy).toHaveBeenCalledWith(0);
    });

    it('should display version with -v flag', async () => {
      process.argv = ['node', 'script.js', '-v'];
      
      try {
        await VX();
      } catch (error) {
        expect(error.message).toBe('process.exit called');
      }

      expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/VX CLI version: \d+\.\d+\.\d+/));
      expect(processExitSpy).toHaveBeenCalledWith(0);
    });
  });

  describe('Dashboard Command', () => {
    it('should handle dash command', async () => {
      process.argv = ['node', 'script.js', 'dash'];
      
      // Create a spy that doesn't throw to avoid worker crashes
      processExitSpy.mockRestore();
      const nonThrowingSpy = jest.spyOn(process, 'exit').mockImplementation(() => undefined as never);
      
      await VX();

      expect(consoleSpy).toHaveBeenCalledWith('🚀🚀🚀🚀\n');
      expect(consoleSpy).toHaveBeenCalledWith('build dashboard now. stay tuned!');
      
      nonThrowingSpy.mockRestore();
      processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {
        throw new Error('process.exit called');
      });
    });
  });

  describe('Unknown Command', () => {
    it('should handle unknown commands', async () => {
      process.argv = ['node', 'script.js', 'unknown-command'];
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
      
      try {
        await VX();
      } catch (error) {
        expect(error.message).toBe('process.exit called');
      }

      expect(consoleErrorSpy).toHaveBeenCalledWith('😑 < Unknown command: unknown-command');
      expect(processExitSpy).toHaveBeenCalledWith(0);
    });
  });

  describe('Command List', () => {
    it('should include all expected commands in help', async () => {
      process.argv = ['node', 'script.js', 'help'];
      
      try {
        await VX();
      } catch (error) {
        expect(error.message).toBe('process.exit called');
      }

      const allCalls = consoleSpy.mock.calls.flat().join(' ');
      
      expect(allCalls).toContain('init');
      expect(allCalls).toContain('create');
      expect(allCalls).toContain('serve');
      expect(allCalls).toContain('dash');
      expect(allCalls).toContain('help');
    });
  });
});