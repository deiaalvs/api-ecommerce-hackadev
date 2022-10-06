const { pool } = require("../../config");
const { request, response } = require("express");

const getCategory = (request, response) => {
    pool.query("select * from Category", (error, results) => {
        if (error) {
            return response.status(401).json({status: 'error', 
            message: 'Erro ao recuperar as categorias: ' + error});
        }
        response.status(200).json(results.rows)
    })
}

module.exports.getCategory = getCategory;

const addCategory = (request, response) => {
    const category = request.body

    pool.query(
        'INSERT INTO Category (category_name, data_inclusao, status) VALUES ($1, now(), $3)',
        [category.category_name, category.data_inclusao, category.status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao inserir a categoria: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Categoria criada.' })
        }        
    )
}

module.exports.addCategory = addCategory;

const updateCategory = (request, response) => {
    const { id_category, category_name, data_inclusao, data_alteracao, status } = request.body

    pool.query(
        'UPDATE Category set category_name = $2, data_inclusao = $3, data_alteracao = now(), status = $5 where id_category = $1',
        [id_category, category_name, data_inclusao, data_alteracao, status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao atualizar a categoria: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Categoria atualizada.' })
        }        
    )
}

module.exports.updateCategory = updateCategory;

const deleteCategory = (request, response) => {

    const id_category = parseInt(request.params.id_category)    

    pool.query(
        'DELETE from Category where id_category = $1',
        [id_category],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível remover a categoria: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Categoria removida.' })
        }        
    )
}

module.exports.deleteCategory = deleteCategory;

const getCategoryById = (request, response) => {

    const id_category = parseInt(request.params.id_category)    

    pool.query(
        'select * from Category where id_category = $1',
        [id_category],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar a categoria: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getCategoryById = getCategoryById;