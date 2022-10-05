CREATE TABLE Product (
    id_product SERIAL PRIMARY KEY NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    product_category INTEGER REFERENCES Category(id_category) NOT NULL,
    product_size VARCHAR(3) NOT NULL,
    product_barCode VARCHAR(100) NOT NULL,
    product_price INTEGER NOT NULL,
    product_percent INTEGER,
    product_hasDiscount BOOLEAN NOT NULL,
    product_details VARCHAR(100),
    product_image VARCHAR(100),
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	status BOOLEAN NOT NULL
);