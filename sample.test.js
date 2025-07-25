/**
 * @jest-environment node
 */

import VX from './src/command/main';

describe('VX CLI Commands', () => {
    const mockedLog = (output) => consoleOutput.push(output);
    const mockedError = (output) => consoleOutput.push(output);

    beforeEach(() => {
        consoleOutput = [];
        console.log = mockedLog;
        console.error = mockedError;
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('should display help when no arguments are provided', async () => {
        process.argv = ['node', 'vx'];
        await VX();
        expect(consoleOutput).toContain(expect.stringContaining('Available commands:'));
    });

    test('should initialize a new project with init command', async () => {
        process.argv = ['node', 'vx', 'init'];
        await VX();
        expect(consoleOutput).toContain(expect.stringContaining('Initialize a new project'));
    });

    test('should create a new project with create command', async () => {
        process.argv = ['node', 'vx', 'create'];
        await VX();
        expect(consoleOutput).toContain(expect.stringContaining('project created'));
    });

    test('should start a local server with serve command', async () => {
        process.argv = ['node', 'vx', 'serve'];
        await VX();
        expect(consoleOutput).toContain(expect.stringContaining('Starting local server'));
    });

    test('should display error for unknown command', async () => {
        process.argv = ['node', 'vx', 'unknown'];
        await VX();
        expect(consoleOutput).toContain(expect.stringContaining('Unknown command'));
    });
});