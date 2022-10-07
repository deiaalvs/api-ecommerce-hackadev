const { pool } = require("../../config");
const { request, response } = require("express");

const getColor = (request, response) => {
    pool.query("select * from Colors", (error, results) => {
        if (error) {
            return response.status(401).json({status: 'error', 
            message: 'Erro ao recuperar as cores: ' + error});
        }
        response.status(200).json(results.rows)
    })
}

module.exports.getColor = getColor;

const addColor = (request, response) => {
    const color = request.body

    pool.query(
        'INSERT INTO Colors (color_name, data_inclusao, status) VALUES ($1, now(), $3)',
        [color.color_name, color.data_inclusao, color.status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao inserir a cor: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Cor criada.' })
        }        
    )
}

module.exports.addColor = addColor;

const updateColor = (request, response) => {
    const { id_color, color_name, data_inclusao, data_alteracao, status } = request.body

    pool.query(
        'UPDATE Colors set color_name = $2, data_inclusao = $3, data_alteracao = now(), status = $5 where id_color = $1',
        [id_color, color_name, data_inclusao, data_alteracao, status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao atualizar a cor: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Cor atualizada.' })
        }        
    )
}

module.exports.updateColor = updateColor;

const deleteColor = (request, response) => {

    const id_color = parseInt(request.params.id_color)    

    pool.query(
        'DELETE from Colors where id_color = $1',
        [id_color],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível remover a cor: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Cor removida.' })
        }        
    )
}

module.exports.deleteColor = deleteColor;

const getColorById = (request, response) => {

    const id_color = parseInt(request.params.id_color)    

    pool.query(
        'select * from Colors where id_color = $1',
        [id_color],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar a cor: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getColorById = getColorById;