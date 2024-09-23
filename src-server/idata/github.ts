import Express from 'express';

const x9gitapi = Express();

import bodyParser from "body-parser";

x9gitapi.use(bodyParser.urlencoded({
    extended: true
}));
x9gitapi.use(bodyParser.json());

// Middleware to parse JSON bodies
x9gitapi.get('/vx-inter-api/datainfo/', (req, res) => {
    res.status(200).send({ msg: "'GET request received'" });
});

x9gitapi.post('/vx-inter-api/userdata/search/github/', (req, res) => {
  console.log(req.body);
  res.send({"msg": "Received POST Data!","data": req.body});
});

export default x9gitapi;