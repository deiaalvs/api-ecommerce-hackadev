const database = require('../infra/connection');

/*validado*/
exports.getCategory = function () {
    return database.query("SELECT * FROM Category")
}

/*validado*/
exports.post = function (category) {
    return database.none(
        "INSERT INTO Category (category_name, data_inclusao, status) VALUES ($1, now(), $3)",
        [category.category_name, category.data_inclusao, category.status]
    )
}

exports.put = function (category) {
    return database.none(
        "UPDATE Category (category_name, data_inclusao, data_alteracao, status) VALUES ($1, $2, now(), $4)",
        [category.category_name, category.data_inclusao, category.data_alteracao, category.status]
    )
}