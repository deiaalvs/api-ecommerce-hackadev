create table ProductImage (
	id_image SERIAL PRIMARY KEY NOT NULL,
	product_id INTEGER REFERENCES Product(id_product) NOT NULL,
	image_url VARCHAR(100),
	image_alt VARCHAR(100),
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	status BOOLEAN NOT NULL
);