create table Category (
	id_category SERIAL PRIMARY KEY NOT NULL,
	category_name VARCHAR(100) NOT NULL,
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	status BOOLEAN NOT NULL
);

select * from Category;