BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

INSERT INTO users (email, password) VALUES ('enasskmal@gmail.com', 123456);
INSERT INTO users (email, password) VALUES ('saeedsara142@gmail.com', 756598);


COMMIT;
