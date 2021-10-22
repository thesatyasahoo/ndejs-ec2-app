const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h2>Express AWS Demo App</h2>')
})

app.get('/products', (req, res) => {
    res.send([
        {
            prodId: '101',
            price: 210000
        },
        {
            prodId: '102',
            price: 204340
        },
        {
            prodId: '103',
            price: 456100
        },
        {
            prodId: '104',
            price: 432080
        },
        {
            prodId: '105',
            price: 176000
        }
    ])
})

app.listen(port, () => {
    console.log(`demo app runing at ${port}`);
})