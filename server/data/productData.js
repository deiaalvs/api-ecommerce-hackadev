const database = require('../../connection');

/*validado*/
exports.getProduct = function () {
    return database.query("SELECT * FROM Product")
}

/*validado*/
exports.post = function (product) {
    return database.none(
        "INSERT INTO Product (product_name, product_category, product_size, product_barCode, product_price, product_hasDiscount, data_inclusao, status) VALUES ($1, $2, $3, $4, $5, $6, now(), $8)",
        [product.product_name, product.product_category, product.product_size, product.product_barCode, product.product_price, product.product_hasDiscount, product.data_inclusao, product.status]
    )
}

exports.put = function (product) {
    return database.none(
        "UPDATE Product (product_name, product_category, product_size, product_barCode, product_price, product_hasDiscount, data_inclusao, data_alteracao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, now(), $9)",
        [product.product_name, product.product_category, product.product_size, product.product_barCode, product.product_price, product.product_hasDiscount, product.data_inclusao, product.data_alteracao, product.status]
    )
}