create table Sizes (
	id_size SERIAL PRIMARY KEY NOT NULL,
	size_name VARCHAR(5) NOT NULL,
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	status BOOLEAN NOT NULL
);

