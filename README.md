# VX 
> useful web3 tools

## features
- connect to multiple chains
- create and magage wallets
- local development chains
- deploy smart contracts

now available command:   
- `vx help`
- `vx init`
- `vx serve`
- `vx create <project_name>`
- `vx chains`

authoer: [nknighta](https://nknighta.github.io/)

## install
### 1.Install globally
```bash
npm install -g @varius/vx-sdk
```

### 2. create a new project
```bash
npx vx create <project_name>
```

## sdk setup
```typescript
const vx = vx.client();
vx.setup({
});
```

## usage
```bash
npx vx init
```
```bash
npx vx serve
```

### single endpoint
```typescript
```

## Development

### Building
```bash
npm run build
```

### Testing
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

For detailed testing information, see [docs/TESTING.md](docs/TESTING.md).

### Linting
```bash
npm run lint
npm run lint:fix
```