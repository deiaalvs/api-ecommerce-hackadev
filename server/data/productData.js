const { pool } = require("../../config");
const { request, response } = require("express");

const getProduct = (request, response) => {
    pool.query("select * from Product", (error, results) => {
        if (error) {
            return response.status(401).json({status: 'error', 
            message: 'Erro ao recuperar os produtos: ' + error});
        }
        response.status(200).json(results.rows)
    })
}

module.exports.getProduct = getProduct;

const addProduct = (request, response) => {
    const product = request.body

    pool.query(
        'INSERT INTO Product (product_name, product_category, product_size, product_color, product_image, product_barCode, product_price, product_hasDiscount, data_inclusao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, now(), $10)',
        [product.product_name, product.product_category, product.product_size, product.product_color, product.product_image, product.product_barCode, product.product_price, product.product_hasDiscount, product.data_inclusao, product.status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao inserir o produto: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Produto criado.' })
        }        
    )
}

module.exports.addProduct = addProduct;

const updateProduct = (request, response) => {
    const { id_product, product_name, product_category, product_size, product_color, product_image, product_barCode, product_price, product_hasDiscount, data_inclusao, data_alteracao, status } = request.body

    pool.query(
        'UPDATE Product set product_name = $2, product_category = $3, product_size = $4, product_color = $5, product_image = $6, product_barCode = $7, product_price = $8, product_hasDiscount = $9, data_inclusao = $10, data_alteracao = now(), status = $12 where id_product = $1',
        [id_product, product_name, product_category, product_size, product_color, product_image, product_barCode, product_price, product_hasDiscount, data_inclusao, data_alteracao, status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao atualizar o produto: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Produto atualizado.' })
        }        
    )
}

module.exports.updateProduct = updateProduct;

const deleteProduct = (request, response) => {

    const id_product = parseInt(request.params.id_product)    

    pool.query(
        'DELETE from Product where id_product = $1',
        [id_product],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível remover o produto: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Produto removido.' })
        }        
    )
}

module.exports.deleteProduct = deleteProduct;

const getProductById = (request, response) => {

    const id_product = parseInt(request.params.id_product)    

    pool.query(
        'select * from Product where id_product = $1',
        [id_product],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar o produto: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getProductById = getProductById;

const getProductAndCategory = (request, response) => {

    pool.query(
        `select * from Product p
                INNER JOIN Category c ON p.product_category = c.id_category
                INNER JOIN Colors cl ON p.product_color = cl.id_color
                INNER JOIN Sizes s ON p.product_size = s.id_size OR p.product_size = null`,
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar o produto: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getProductAndCategory = getProductAndCategory;