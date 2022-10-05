const express = require('express');
const router = express.Router();

const productService = require('../service/productService');

router.get('/product', async function (req, res) {
    let json = await productService.getProduct();
    res.json(json);
});

router.post('/product', async function (req, res) {
    const data = req.body
    productService.post(data)
    res.send("SUCESS");

});

router.put('/product', async function (req, res) {
    const data = req.body
    productService.put(data)
    res.send("SUCESS");

});

module.exports = router;