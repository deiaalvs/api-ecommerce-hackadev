const express = require('express');
const router = express.Router();

const categoryService = require('../service/categoryService');

router.get('/category', async function (req, res) {
    let json = await categoryService.getCategory();
    res.json(json);

});

router.post('/category', async function (req, res) {
    const data = req.body
    categoryService.post(data)
    res.send("SUCESS");

});

router.put('/category', async function (req, res) {
    const data = req.body
    categoryService.put(data)
    res.send("SUCESS");

});

module.exports = router;