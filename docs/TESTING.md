# Testing Guide

This document describes how to run and write tests for the VX CLI project.

## Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests for CI (no watch mode)
npm run test:ci
```

## Test Structure

```
tests/
├── unit/                    # Unit tests for individual modules
│   ├── core.test.ts        # Tests for core functionality
│   ├── contract.test.ts    # Tests for contract module
│   ├── connector.test.ts   # Tests for RPC connector
│   ├── rpc.test.ts        # Tests for RPC configuration
│   └── api-validation.test.ts # API response validation tests
├── integration/            # Integration tests
│   ├── cli.test.ts        # CLI command tests
│   └── server.test.ts     # HTTP server endpoint tests
├── fixtures/              # Test data and mocks
│   └── mockData.ts        # Mock data for tests
└── setup.ts              # Global test setup
```

## Test Coverage

The test suite covers:

- **Core Modules (100% coverage)**:
  - `createConfig` class functionality
  - Contract module functions
  - RPC connector functionality

- **CLI Commands**:
  - Help command
  - Version flags
  - Dashboard command
  - Error handling

- **API Endpoints**:
  - `/api` success responses
  - `/api/` redirect handling
  - `/debug` HTML responses
  - 404 error responses

- **Configuration Validation**:
  - RPC chain configuration
  - API response structure
  - Error response formats

## Writing Tests

### Unit Test Example

```typescript
import { createConfig } from '../../src/core/core';

describe('Core Module', () => {
  it('should create a config with name only', () => {
    const config = new createConfig('test-config');
    
    expect(config.name).toBe('test-config');
    expect(config.nodeconfigbuilder).toEqual([]);
  });
});
```

### Integration Test Example

```typescript
import request from 'supertest';
import { createServer } from 'http';

describe('API Endpoints', () => {
  it('should respond with success message on GET /api', async () => {
    const response = await request(app).get('/api');
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Welcome to the VX SDK API',
      status: 'success'
    });
  });
});
```

## Test Configuration

Tests are configured using Jest with the following settings:

- **TypeScript support**: Using `ts-jest` preset
- **Test environment**: Node.js
- **Test files**: `**/*.test.ts` and `**/*.spec.ts`
- **Coverage**: Collects coverage from all `src/**/*.ts` files
- **Timeout**: 10 seconds per test

## Mock Strategy

- **Console methods**: Mocked globally to reduce test noise
- **Process.exit**: Mocked to prevent test termination
- **HTTP fetch**: Mocked for connector tests
- **File system**: Not mocked (tests use real file operations)

## Continuous Integration

For CI environments, use:

```bash
npm run test:ci
```

This runs tests without watch mode and generates coverage reports suitable for CI systems.