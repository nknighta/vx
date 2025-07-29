import { ethers } from "ethers";

export function getBlockNumber(provider: string): Promise<number> {
    let balance: number = 0;
    const rpcProvider = new ethers.JsonRpcProvider(provider);
    return rpcProvider.getBlockNumber().then((number) => {
        balance = number;
        return balance;
    });
}

export function getBalance(provider: string, useraddres: string): Promise<number> {
    let balance;
    const rpcProvider = new ethers.JsonRpcProvider(provider);
    return rpcProvider.getBalance(useraddres).then((userbalance) => {
        balance = userbalance ? parseFloat(ethers.formatEther(userbalance)) : 0;
        return balance;
    });
}