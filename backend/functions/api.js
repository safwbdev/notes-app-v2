const express = require('express');
const cors = require('cors');

const serverless = require('serverless-http');

const demodata = require("../data.json");

const app = express();

app.use(cors());

const router = express.Router();

// Get all entries
router.get('/', (req, res) => {
    res.send('App is running...')
});

// create new entry
router.post('/add', (req, res) => {
    res.send('New entry has been added')
});
// delete new entry
router.delete('/', (req, res) => {
    res.send('Entry has been deleted')
});
// update an entry
router.put('/', (req, res) => {
    res.send('Entry has been update')
});
// demo data
router.get('/demo', (req, res) => {
    res.json(demodata)
});
// get data by id
router.get('/getOne/:id', (req, res) => {
    const result = demodata.filter(re => re.id === Number(req.params.id))
    res.json(result);

})

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);