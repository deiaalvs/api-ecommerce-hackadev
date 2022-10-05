const database = require('../infra/connection');

/*Validado*/
exports.getAddress = function () {
    return database.query("SELECT * FROM Address")
}
/*Validado*/
exports.post = function (address) {
    return database.none(
        "INSERT INTO Address (id_customer, zipcode, street, neighborhood, city, address_state, street_number, data_inclusao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, now(), $9)",
        [address.id_customer, address.zipcode, address.street, address.neighborhood, address.city, address.address_state, address.street_number, address.data_inclusao, address.status]
    )
}

exports.put = function (address) {
    return database.none(
        "UPDATE Address (id_customer, zipcode, street, neighborhood, city, address_state, street_number, data_inclusao, data_alteracao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, now(), $10)",
        [address.id_customer, address.zipcode, address.street, address.neighborhood, address.city, address.address_state, address.street_number, address.data_inclusao, address.data_alteracao, address.status]
    )
}