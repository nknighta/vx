import { NextApiRequest, NextApiResponse } from 'next'
import { utilhandler } from '../../scripts/util'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  utilhandler(req, res)
}
