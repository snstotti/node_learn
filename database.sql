create table person(
    id serial primary key,
    username varchar(255),
    password varchar(255)
);

create table post(
    id SERIAL PRIMARY KEY,
    title varchar(255),
    connnect varchar(255),
    user_id integer,
    foreign key (user_id) references person (id)
);