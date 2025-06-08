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