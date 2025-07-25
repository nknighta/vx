import { ethers } from "ethers";

export function node({ name, nodeconfigbuilder }: { name: string; nodeconfigbuilder?: any[] }) {
  const newNode = {
    name,
  }
  console.log(`Node created: ${JSON.stringify(newNode)}`);
}