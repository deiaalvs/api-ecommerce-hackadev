const database = require('../../connection');

exports.getPurchase = function () {
    return database.query("SELECT * FROM Purchase")
}

exports.post = function (purchase) {
    return database.none(
        "INSERT INTO Purchase (id_customer, qtd_items, order_total, data_purchase, purchase_status) VALUES ($1, $2, $3, now(), $5)",
        [purchase.id_customer, purchase.qtd_items, purchase.order_total, purchase.data_purchase, purchase.purchase_status]
    )
}

exports.alterar = function (purchase) {
    return database.none(
        "UPDATE Purchase (id_customer, qtd_items, order_total, data_purchase, data_alteracao_purchase, purchase_status) VALUES ($1, $2, $3, now(), $5, $6)",
        [purchase.id_customer, purchase.qtd_items, purchase.order_total, purchase.data_purchase, purchase.data_alteracao_purchase, purchase.purchase_status]
    )
}