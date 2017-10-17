CREATE TABLE products(
    id serial UNIQUE,
    name text,
    price integer,
    sku integer,
    primary key(id)
);

CREATE TABLE purchase(
    id serial,
    item_id integer,
    quantity integer,
    primary key(id),
	CONSTRAINT fk_pur_prod FOREIGN KEY (item_id) REFERENCES products(id)
);
