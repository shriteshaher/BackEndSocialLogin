CREATE TABLE users (
    id int AUTO_INCREMENT NOT NULL,
    socialMediaId  varchar(255) unique,
    name varchar(255) NOT NULL,
    email varchar(255),
    password varchar(255),
    isSocialFromMedia  BOOLEAN NOT NULL,
    accessToken LONGTEXT,
    CONSTRAINT users_id PRIMARY KEY(id)
);
