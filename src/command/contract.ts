import { ethers, BrowserProvider, Contract } from "ethers";

// This is a sample ABI for the Greeter contract.
// In a real application, you would import this from a JSON file
// generated during contract compilation.
const greeterABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_greeting",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "greet",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_greeting",
                "type": "string"
            }
        ],
        "name": "setGreeting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Replace with your deployed contract address
const greeterAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

// We need to declare this for TypeScript to recognize `window.ethereum`
declare global {
    interface Window {
        ethereum?: any;
    }
}

export default async function interactWithContract() {
    // This function is designed to run in a browser environment where a wallet like MetaMask is available.
    // Running it from a Node.js CLI will require a different way to connect to the Ethereum network.
    console.log("Note: This function is designed for a browser environment with MetaMask.");
    console.log("To run from Node.js, you'd need to configure a provider (e.g., Infura, Alchemy) and manage private keys for signing transactions.");

    if (typeof window === 'undefined' || !window.ethereum) {
        console.error("MetaMask is not available. Please run this in a browser with MetaMask installed.");
        return;
    }

    try {
        // Step 2: Get provider and signer
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner(); // A signer is needed for write operations

        // Step 3: Create a contract instance
        const greeterContract = new Contract(greeterAddress, greeterABI, signer);

        // --- Calling contract functions ---

        // Read operation: call greet()
        // view/pure functions don't require gas and don't change state
        console.log("Reading current message from contract...");
        const currentMessage = await greeterContract.greet();
        console.log("Current message:", currentMessage);

        // Write operation: call setGreeting()
        // Transactions that change state require a signature and gas fees
        console.log("Updating message to 'Hello ethers!'...");
        const tx = await greeterContract.setGreeting("Hello ethers!");

        // Wait for the transaction to be mined
        await tx.wait();
        console.log("Transaction confirmed!", tx.hash);

        const newMessage = await greeterContract.greet();
        console.log("New message:", newMessage);

    } catch (error) {
        console.error("An error occurred:", error);
    }
}
