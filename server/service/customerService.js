const data = require('../data/customerData')

exports.getCustomer = function () {
    return data.getCustomer();
}

exports.post = function (customer) {
    return data.post(customer);
}