import { chainlist } from "../libs/chains";

function Run () {
	// Get command line arguments (skip first two - node path and script path)
	const args = process.argv.slice(2);
	const chain = chainlist();
	
	// If specific chain was requested, show only that one
	if (args.length > 0 && chain[args[0]]) {
		console.log(`Chain ${args[0]}: ${chain[args[0]]}`);
	} else {
		// Otherwise show all available chains
		console.log("Available chains:");
		for (const [key, value] of Object.entries(chain)) {
			console.log(`- ${key}: ${value}`);
		}
		console.log(chain);
	}
}

// Export the function but don't execute it immediately
export default Run;