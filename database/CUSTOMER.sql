drop table IF EXISTS Customer

CREATE TABLE Customer (
    id_customer SERIAL PRIMARY KEY NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    customer_nickName VARCHAR(100) NOT NULL,
    customer_password VARCHAR(100) NOT NULL,
	customer_cpf BIGINT NOT NULL,
    data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
    status BOOLEAN NOT NULL
);

ALTER TABLE Customer add id_endereco INTEGER REFERENCES Address(id_address);
select * from Customer

