const data = require('../data/categoryData')

exports.getCategory = function () {
    return data.getCategory();
}

exports.post = function (category) {
    return data.post(category);
}