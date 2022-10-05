CREATE TABLE PurchaseStatus (
	id_status SERIAL PRIMARY KEY NOT NULL,
	status_name VARCHAR(100) NOT NULL,
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	purchase_status BOOLEAN NOT NULL
);