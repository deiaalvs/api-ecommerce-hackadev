DROP TABLE Address CASCADE;

create table Address (
	id_address SERIAL PRIMARY KEY NOT NULL,
	id_customer INTEGER REFERENCES Customer(id_customer) NOT NULL,
    zipcode INTEGER NOT NULL,
    street VARCHAR(100) NOT NULL,
    neighborhood VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    address_state VARCHAR(50) NOT NULL,
    street_number INTEGER NOT NULL,
    complement VARCHAR(100),
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	status BOOLEAN NOT NULL
);

SELECT * FROM ADDRESS
