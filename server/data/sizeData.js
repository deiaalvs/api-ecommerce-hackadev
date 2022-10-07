const { pool } = require("../../config");
const { request, response } = require("express");

const getSize = (request, response) => {
    pool.query("select * from Sizes", (error, results) => {
        if (error) {
            return response.status(401).json({status: 'error', 
            message: 'Erro ao recuperar os tamanhos: ' + error});
        }
        response.status(200).json(results.rows)
    })
}

module.exports.getSize = getSize;

const addSize = (request, response) => {
    const size = request.body

    pool.query(
        'INSERT INTO Sizes (size_name, data_inclusao, status) VALUES ($1, now(), $3)',
        [size.size_name, size.data_inclusao, size.status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao inserir o tamanho: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Tamanho criado.' })
        }        
    )
}

module.exports.addSize = addSize;

const updateSize = (request, response) => {
    const { id_size, size_name, data_inclusao, data_alteracao, status } = request.body

    pool.query(
        'UPDATE Sizes set size_name = $2, data_inclusao = $3, data_alteracao = now(), status = $5 where id_size = $1',
        [id_size, size_name, data_inclusao, data_alteracao, status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao atualizar o tamanho: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Tamanho atualizado.' })
        }        
    )
}

module.exports.updateSize = updateSize;

const deleteSize = (request, response) => {

    const id_size = parseInt(request.params.id_size)    

    pool.query(
        'DELETE from Sizes where id_size = $1',
        [id_size],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível remover o tamanho: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Tamanho removido.' })
        }        
    )
}

module.exports.deleteSize = deleteSize;

const getSizeById = (request, response) => {

    const id_size = parseInt(request.params.id_size)    

    pool.query(
        'select * from Sizes where id_size = $1',
        [id_size],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar o tamanho: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getSizeById = getSizeById;