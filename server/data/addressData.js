const { pool } = require("../../config");
const { request, response } = require("express");

const getAddress = (request, response) => {
    pool.query("select * from Address", (error, results) => {
        if (error) {
            return response.status(401).json({status: 'error', 
            message: 'Erro ao recuperar os endereços: ' + error});
        }
        response.status(200).json(results.rows)
    })
}

module.exports.getAddress = getAddress;

const addAddress = (request, response) => {
    const address = request.body

    pool.query(
        'INSERT INTO Address (id_customer, zipcode, street, neighborhood, city, address_state, street_number, data_inclusao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, now(), $9)',
        [address.id_customer, address.zipcode, address.street, address.neighborhood, address.city, address.address_state, address.street_number, address.data_inclusao, address.status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao inserir o endereço: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Endereço criado.' })
        }        
    )
}

module.exports.addAddress = addAddress;

const updateAddress = (request, response) => {
    const { id_address, id_customer, zipcode, street, neighborhood, city, address_state, street_number, data_inclusao, data_alteracao, status } = request.body

    pool.query(
        'UPDATE Address set id_customer = $2, zipcode = $3, street = $4, neighborhood = $5, city = $6, address_state = $7, street_number = $8, data_inclusao = $9, data_alteracao = now(), status = $11 where id_address = $1',
        [id_address, id_customer, zipcode, street, neighborhood, city, address_state, street_number, data_inclusao, data_alteracao, status],
        (error) => {
            if (error) {
                return response.status(401).json({ status: 'error', 
                message: 'Erro ao atualizar o endereço: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Endereço atualizado.' })
        }        
    )
}

module.exports.updateAddress = updateAddress;

const deleteAddress = (request, response) => {

    const id_address = parseInt(request.params.id_address)    

    pool.query(
        'DELETE from Address where id_address = $1',
        [id_address],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível remover o endereço: ' + error });
            }
            response.status(201).json({ status: 'success', message: 'Endereço removido.' })
        }        
    )
}

module.exports.deleteAddress = deleteAddress;

const getAddressById = (request, response) => {

    const id_address = parseInt(request.params.id_address)    

    pool.query(
        'select * from Address where id_address = $1',
        [id_address],
        (error, results) => {
            if (error || results.rowCount == 0) {
                return response.status(401).json({ status: 'error', 
                message: 'Não foi possível recuperar o endereço: ' + error });
            }
            response.status(201).json(results.rows)
        }        
    )
}

module.exports.getAddressById = getAddressById;