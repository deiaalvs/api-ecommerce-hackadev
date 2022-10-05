const data = require('../data/productData')

exports.getProduct = function () {
    return data.getProduct();
}

exports.post = function (product) {
    return data.post(product);
}