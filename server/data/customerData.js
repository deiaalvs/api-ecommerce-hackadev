const { pool } = require("../../config");
const { request, response } = require("express");

const getCustomer = (request, response) => {
    pool.query("select * from Customer", (error, results) => {
        if (error) {
            return response.status(401).json({status: 'error', 
            message: 'Erro ao recuperar os clientes: ' + error});
        }
        response.status(200).json(results.rows)
    })
}

module.exports.getCustomer = getCustomer;

const addCustomer = (request, response) => {
    const customer = request.body

    pool.query(
        'INSERT INTO Customer (customer_name, customer_email, customer_nickName, customer_password, customer_cpf, data_inclusao, status) VALUES ($1, $2, $3, $4, $5, now(), $7)',
        [customer.customer_name, customer.customer_email, customer.customer_nickName, customer.customer_password, customer.customer_cpf, customer.data_inclusao, customer.status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao inserir o cliente: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Cliente criado.' })
        }        
    )
}

module.exports.addCustomer = addCustomer;

const updateCustomer = (request, response) => {
    const { id_customer, customer_name, customer_email, customer_nickName, customer_password, customer_cpf, id_endereco, data_inclusao, data_alteracao, status } = request.body

    pool.query(
        'UPDATE Customer set customer_name = $2, customer_email = $3, customer_nickName = $4, customer_password = $5, customer_cpf = $6, id_endereco = $7, data_inclusao = $8, data_alteracao = now(), status = $10 where id_customer = $1',
        [id_customer, customer_name, customer_email, customer_nickName, customer_password, customer_cpf, id_endereco, data_inclusao, data_alteracao, status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao atualizar o cliente: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Cliente atualizado.' })
        }        
    )
}

module.exports.updateCustomer = updateCustomer;

const deleteCustomer = (request, response) => {

    const id_customer = parseInt(request.params.id_customer)    

    pool.query(
        'DELETE from Customer where id_customer = $1',
        [id_customer],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível remover o cliente: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Cliente removido.' })
        }        
    )
}

module.exports.deleteCustomer = deleteCustomer;

const getCustomerById = (request, response) => {

    const id_customer = parseInt(request.params.id_customer)    

    pool.query(
        'select * from Customer where id_customer = $1',
        [id_customer],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar o cliente: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getCustomerById = getCustomerById;