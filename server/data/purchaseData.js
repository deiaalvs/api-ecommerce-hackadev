const { pool } = require("../../config");
const { request, response } = require("express");

const getPurchase = (request, response) => {
    pool.query("select * from Purchase", (error, results) => {
        if (error) {
            return response.status(401).json({status: 'error', 
            message: 'Erro ao recuperar os pedidos: ' + error});
        }
        response.status(200).json(results.rows)
    })
}

module.exports.getPurchase = getPurchase;

const addPurchase = (request, response) => {
    const purchase = request.body

    pool.query(
        'INSERT INTO Purchase (id_customer, qtd_items, order_total, data_purchase, purchase_status) VALUES ($1, $2, $3, now(), $5))',
        [purchase.id_customer, purchase.qtd_items, purchase.order_total, purchase.data_purchase, purchase.purchase_status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao inserir o pedido: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Pedido criado.' })
        }        
    )
}

module.exports.addPurchase = addPurchase;

const updatePurchase = (request, response) => {
    const { id_order, qtd_items, order_total, data_purchase, data_alteracao_purchase, purchase_status } = request.body

    pool.query(
        'UPDATE Purchase set qtd_items = $2, order_total = $3, data_purchase = $4, data_alteracao_purchase = now(), purchase_status = $6 where id_order = $1',
        [id_order, qtd_items, order_total, data_purchase, data_alteracao_purchase, purchase_status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao atualizar o pedido: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Pedido atualizado.' })
        }        
    )
}

module.exports.updatePurchase = updatePurchase;

const deletePurchase = (request, response) => {

    const id_order = parseInt(request.params.id_order)    

    pool.query(
        'DELETE from Purchase where id_order = $1',
        [id_order],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível remover o pedido: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Pedido removido.' })
        }        
    )
}

module.exports.deletePurchase = deletePurchase;

const getPurchaseById = (request, response) => {

    const id_status = parseInt(request.params.id_status)    

    pool.query(
        'select * from Purchase where id_status = $1',
        [id_status],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar o pedido: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getPurchaseById = getPurchaseById;