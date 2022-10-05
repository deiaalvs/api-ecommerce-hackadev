const database = require('../infra/connection');


exports.getPurchaseStatus = function () {
    return database.query("SELECT * FROM PurchaseStatus")
}

exports.post = function (status) {
    return database.none(
        "INSERT INTO PurchaseStatus (status_name, data_inclusao, purchase_status) VALUES ($1, now(), $3)",
        [status.status_name, status.data_inclusao, status.purchase_status]
    )
}

exports.put = function (status) {
    return database.none(
        "UPDATE PurchaseStatus (status_name, data_inclusao, data_alteracao, purchase_status) VALUES ($1, $2, now(), $4)",
        [status.status_name, status.data_inclusao, status.data_alteracao, status.purchase_status]
    )
}