// Global test setup
import { jest } from '@jest/globals';

// Mock console methods in tests to reduce noise
global.console = {
  ...console,
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Set test environment variables
process.env.NODE_ENV = 'test';

// Setup global test timeout
jest.setTimeout(10000);