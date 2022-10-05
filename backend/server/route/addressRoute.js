const express = require('express');
const router = express.Router();

const addressService = require('../service/addressService');

router.get('/address', async function (req, res) {
    let json = await addressService.getAddress();
    res.json(json);

});

router.post('/address', async function (req, res) {
    const data = req.body
    addressService.post(data)
    res.send("SUCESS");

});

router.put('/address', async function (req, res) {
    const data = req.body
    addressService.put(data)
    res.send("SUCESS");

});

module.exports = router;