const data = require('../data/purchaseData')

exports.getPurchase = function () {
    return data.getPurchase();
}

exports.post = function (purchase) {
    return data.post(purchase);
}