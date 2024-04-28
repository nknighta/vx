import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ version: "0.1.0", author: "nknight amamiya", description: "vx media system"});
}
