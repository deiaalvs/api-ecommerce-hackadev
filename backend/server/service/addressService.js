const data = require('../data/addressData')

exports.getAddress = function () {
    return data.getAddress();
}

exports.post = function (address) {
    return data.post(address);
}