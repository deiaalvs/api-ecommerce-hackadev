const { pool } = require("../../config");
const { request, response } = require("express");

const getPurchaseStatus = (request, response) => {
    pool.query("select * from PurchaseStatus", (error, results) => {
        if (error) {
            return response.status(401).json({status: 'error', 
            message: 'Erro ao recuperar os status de pedido: ' + error});
        }
        response.status(200).json(results.rows)
    })
}

module.exports.getPurchaseStatus = getPurchaseStatus;

const addPurchaseStatus = (request, response) => {
    const status = request.body

    pool.query(
        'INSERT INTO PurchaseStatus (status_name, data_inclusao, purchase_status) VALUES ($1, now(), $3)',
        [status.status_name, status.data_inclusao, status.purchase_status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao inserir os status de pedido: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Status de pedido criada.' })
        }        
    )
}

module.exports.addPurchaseStatus = addPurchaseStatus;


const updatePurchaseStatus = (request, response) => {
    const { id_status, status_name, data_inclusao, purchase_status } = request.body

    pool.query(
        'UPDATE PurchaseStatus set status_name = $2, data_inclusao = now(), purchase_status = $4 where id_status = $1',
        [id_status, status_name, data_inclusao, purchase_status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao atualizar os status de pedido: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Status de pedido atualizado.' })
        }        
    )
}

module.exports.updatePurchaseStatus = updatePurchaseStatus;

const deletePurchaseStatus = (request, response) => {

    const id_status = parseInt(request.params.codigo)    

    pool.query(
        'DELETE from PurchaseStatus where id_status = $1',
        [id_status],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível remover o status de pedido: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Status de pedido removido.' })
        }        
    )
}

module.exports.deletePurchaseStatus = deletePurchaseStatus;

const getPurchaseStatusById = (request, response) => {

    const id_status = parseInt(request.params.codigo)    

    pool.query(
        'select * from editoras where id_status = $1',
        [id_status],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar o status de pedido: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getPurchaseStatusById = getPurchaseStatusById;