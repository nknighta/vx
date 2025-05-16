

import { chainlist } from "../libs/chains";

function Run () {
	const chain = chainlist();
    console.log("Available chains:");
    chain.forEach((chain) => {
        console.log(`- ${chain}`);
    });
}

export default Run();