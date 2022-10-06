const express = require('express');
const router = express.Router();

const purchaseStatusService = require('../service/purchaseStatusService');

// router.get('/purchaseStatus', async function (req, res) {
//     let json = await purchaseStatusService.getPurchaseStatus();
//     res.json(json);
// });

router.get('/purchaseStatus', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM PurchaseStatus');
      const results = { 'results': (result) ? result.rows : null};
      res.render('/purchaseStatus', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

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