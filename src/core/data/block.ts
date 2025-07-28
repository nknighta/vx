import { ethers } from "ethers";

export function getBlockNumber(provider: string): Promise<number> {
    let blockNumber: number = 0;
    const rpcProvider = new ethers.JsonRpcProvider(provider);
    return rpcProvider.getBlockNumber().then((number) => {
        blockNumber = number;
        return blockNumber;
    });
}