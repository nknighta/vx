/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {

  coverageProvider: "v8",

  testEnvironment: "node",
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { "excludeJestPreset": true }],
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};

export default config;
