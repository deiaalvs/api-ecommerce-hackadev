const express = require('express');
const router = express.Router();

const customerService = require('../service/customerService');

router.get('/customer', async function (req, res) {
    let json = await customerService.getCustomer();
    res.json(json);
});

router.post('/customer', async function (req, res) {
    const data = req.body
    customerService.post(data)
    res.send("SUCESS");

});

router.put('/customer', async function (req, res) {
    const data = req.body
    customerService.put(data)
    res.send("SUCESS");

});

module.exports = router;