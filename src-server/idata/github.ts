import Express from 'express';
import { PrismaClient } from '@prisma/client';

const x9gitapi = Express();

import bodyParser from "body-parser";

// Middleware to parse JSON bodies
// Middleware to parse URL-encoded bodies

// instantiate the prisma client
const prisma = new PrismaClient();

x9gitapi.use(bodyParser.urlencoded({
    extended: true
}));
x9gitapi.use(bodyParser.json());

// Middleware to parse JSON bodies
x9gitapi.get('/vx-inter-api/datainfo/', (req, res) => {
    res.status(200).send({ msg: "'GET request received'" });
});

// must await prisma.user.findMany() to get the data from the database
x9gitapi.post('/vx-inter-api/userdata/search/github/', async ( req, res) => {
  try {
    const data = await prisma.account.findUnique({
        where: {
          accountid: req.body.userid,
        },
      });
      res.send({"data": data});
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

export default x9gitapi;