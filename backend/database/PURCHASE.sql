create table Purchase (
	id_order SERIAL PRIMARY KEY NOT NULL,
	id_customer INTEGER REFERENCES Customer(id_customer) NOT NULL,
	qtd_items INTEGER NOT NULL,
	order_total INTEGER NOT NULL,
	data_purchase TIMESTAMP NOT NULL,
	data_alteracao_purchase TIMESTAMP,
	purchase_status INTEGER REFERENCES PurchaseStatus(id_status) NOT NULL
);