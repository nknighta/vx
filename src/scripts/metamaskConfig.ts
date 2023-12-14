import {createConfig, mainnet} from "wagmi";
import {createPublicClient, http} from "viem";

export const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
        chain: mainnet,
        transport: http()
    }),
})