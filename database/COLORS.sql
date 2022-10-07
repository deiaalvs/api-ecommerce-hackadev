create table Colors (
	id_color SERIAL PRIMARY KEY NOT NULL,
	color_name VARCHAR(100) NOT NULL,
	data_inclusao TIMESTAMP NOT NULL,
	data_alteracao TIMESTAMP,
	status BOOLEAN NOT NULL
);

