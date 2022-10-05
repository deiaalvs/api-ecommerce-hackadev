const express = require('express');
const router = express.Router();

const purchaseService = require('../service/purchaseService');

router.get('/purchase', async function (req, res) {
    let json = await purchaseService.getPurchase();
    res.json(json);

});

router.post('/purchase', async function (req, res) {
    const data = req.body
    purchaseService.post(data)
    res.send("SUCESS");

});

router.put('/purchase', async function (req, res) {
    const data = req.body
    purchaseService.put(data)
    res.send("SUCESS");

});

module.exports = router;