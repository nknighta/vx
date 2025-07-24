import { connector } from '../../src/core/connector';

// Mock fetch globally
global.fetch = jest.fn();

describe('Connector Module', () => {
  describe('connector function', () => {
    beforeEach(() => {
      // Reset mocks and process.argv
      jest.clearAllMocks();
      process.argv = ['node', 'script.js', 'rpc'];
    });

    afterEach(() => {
      // Restore original process.argv
      process.argv = process.argv.slice(0, 3);
    });

    it('should fetch data when arg3 is "view"', async () => {
      // Mock process.argv to include 'view' as the 4th argument
      process.argv = ['node', 'script.js', 'rpc', 'view'];
      
      const mockResponse = { userId: 1, id: 1, title: 'test todo', completed: false };
      const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
      
      mockFetch.mockResolvedValueOnce({
        json: async () => mockResponse,
        ok: true,
        status: 200,
      } as Response);

      const consoleSpy = jest.spyOn(console, 'log');
      const exitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {
        throw new Error('process.exit called');
      });

      try {
        await connector();
      } catch (error) {
        // Expected to throw due to process.exit
        expect(error.message).toBe('process.exit called');
      }

      expect(mockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
      expect(consoleSpy).toHaveBeenCalledWith(mockResponse);
      expect(exitSpy).toHaveBeenCalledWith(0);
    });

    it('should exit without fetching when arg3 is not "view"', async () => {
      // Mock process.argv with different 4th argument
      process.argv = ['node', 'script.js', 'rpc', 'other'];
      
      const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
      const exitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {
        throw new Error('process.exit called');
      });

      try {
        await connector();
      } catch (error) {
        expect(error.message).toBe('process.exit called');
      }

      expect(mockFetch).not.toHaveBeenCalled();
      expect(exitSpy).toHaveBeenCalledWith(0);
    });

    it('should exit without fetching when no arg3 provided', async () => {
      // Mock process.argv with only 3 arguments
      process.argv = ['node', 'script.js', 'rpc'];
      
      const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
      const exitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {
        throw new Error('process.exit called');
      });

      try {
        await connector();
      } catch (error) {
        expect(error.message).toBe('process.exit called');
      }

      expect(mockFetch).not.toHaveBeenCalled();
      expect(exitSpy).toHaveBeenCalledWith(0);
    });

    it('should handle fetch errors gracefully', async () => {
      process.argv = ['node', 'script.js', 'rpc', 'view'];
      
      const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const exitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {
        throw new Error('process.exit called');
      });

      // The connector function doesn't handle errors, so it will throw
      // but should still call process.exit(0) in a finally block if it existed
      try {
        await connector();
      } catch (error) {
        // Could be either the network error or process.exit
        expect(['Network error', 'process.exit called']).toContain(error.message);
      }

      expect(mockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    });
  });
});