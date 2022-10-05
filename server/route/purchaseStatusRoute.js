const express = require('express');
const router = express.Router();

const purchaseStatusService = require('../service/purchaseStatusService');

router.get('/purchaseStatus', async function (req, res) {
    let json = await purchaseStatusService.getPurchaseStatus();
    res.json(json);
});

router.post('/purchaseStatus', async function (req, res) {
    const data = req.body
    purchaseStatusService.post(data)
    res.send("SUCESS");

});

router.put('/purchaseStatus', async function (req, res) {
    const data = req.body
    purchaseStatusService.put(data)
    res.send("SUCESS");

});

module.exports = router;