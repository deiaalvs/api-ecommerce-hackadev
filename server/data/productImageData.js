const { pool } = require("../../config");
const { request, response } = require("express");

const getProductImage = (request, response) => {
    pool.query("select * from ProductImage", (error, results) => {
        if (error) {
            return response.status(401).json({status: 'error', 
            message: 'Erro ao recuperar as imagens: ' + error});
        }
        response.status(200).json(results.rows)
    })
}

module.exports.getProductImage = getProductImage;

const addProductImage = (request, response) => {
    const productImage = request.body

    pool.query(
        'INSERT INTO ProductImage (product_id, image_url, image_alt, data_inclusao, status) VALUES ($1, $2, $3, now(), $5)',
        [productImage.product_id, productImage.image_url, productImage.image_alt, productImage.data_inclusao, productImage.status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao inserir a imagem: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Imagem inserida.' })
        }        
    )
}

module.exports.addProductImage = addProductImage;

const updateProductImage = (request, response) => {
    const { id_image, product_id, image_url, image_alt, data_inclusao, status } = request.body

    pool.query(
        'UPDATE ProductImage set product_id = $2, image_url = $3, image_alt = $4, data_inclusao = now(), status = $6 where id_image = $1',
        [id_image, product_id, image_url, image_alt, data_inclusao, status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao atualizar a imagem: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Imagem atualizada.' })
        }        
    )
}

module.exports.updateProductImage = updateProductImage;

const deleteProductImage = (request, response) => {

    const id_productImage = parseInt(request.params.id_productImage)    

    pool.query(
        'DELETE from ProductImage where id_productImage = $1',
        [id_productImage],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível remover a imagem: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Imagem removida.' })
        }        
    )
}

module.exports.deleteProductImage = deleteProductImage;

const getProductImageById = (request, response) => {

    const id_productImage = parseInt(request.params.id_productImage)    

    pool.query(
        'select * from ProductImage where id_productImage = $1',
        [id_productImage],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar a imagem: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getProductImageById = getProductImageById;