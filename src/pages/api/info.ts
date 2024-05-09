import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ version: "0.3.6-a2-dqP5", author: "nknight amamiya", description: "awesome web3 platform for developers and users."});
}