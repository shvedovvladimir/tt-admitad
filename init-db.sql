CREATE DATABASE tt-admitad_db;

CREATE USER postgres_app WITH PASSWORD 'postgres_password';

GRANT ALL PRIVILEGES ON DATABASE "tt-admitad_db" to postgres_app;
