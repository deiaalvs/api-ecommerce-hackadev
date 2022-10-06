const database = require('../../connection');
/*Validado*/
exports.getCustomer = function () {
    return database.query("SELECT * FROM Customer")
}
/*Validado*/
exports.post = function (customer) {
    return database.none(
        "INSERT INTO Customer (customer_name, customer_email, customer_nickName, customer_password, customer_cpf, data_inclusao, status) VALUES ($1, $2, $3, $4, $5, now(), $7)",
        [customer.customer_name, customer.customer_email, customer.customer_nickName, customer.customer_password, customer.customer_cpf, customer.data_inclusao, customer.status]
    )
}

exports.put = function (customer) {
    return database.none(
        "UPDATE Customer (customer_name, customer_email, customer_nickName, customer_password, customer_cpf, id_endereco, data_inclusao, data_alteracao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, now(), $9)",
        [customer.customer_name, customer.customer_email, customer.customer_nickName, customer.customer_password, customer.customer_cpf, customer.id_endereco, customer.data_inclusao, customer.data_alteracao, customer.status]
    )
}