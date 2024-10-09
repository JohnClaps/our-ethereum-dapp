/*@johnclaps3 + @leticiakasamale8*/

/*Users Table*/
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    wallet_id VARCHAR(42) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone_number INT(10),
    pass_word VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Transactions Table*/
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    transaction_hash VARCHAR(66) UNIQUE NOT NULL,
    mineral_id INT REFERENCES minerals(id),
    quantity DECIMAL(18, 8),
    transaction_date TIMESTAMP NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/*License Information Table*/
CREATE TABLE licenses (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    license_number VARCHAR(100) UNIQUE NOT NULL,
    license_type VARCHAR(50),
    issued_date DATE,
    expiry_date DATE,
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Mienerals Information Table*/
CREATE TABLE minerals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    market_price DECIMAL(18, 2),
    unit VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Regulatory Framework/polict Table/Relation*/
CREATE TABLE regulatory_framework (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    description TEXT,
    document_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


/*Table Storing Transactions Related to each User/Mining Company*/
CREATE TABLE user_mineral_transactions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    mineral_id INT REFERENCES minerals(id),
    transaction_id INT REFERENCES transactions(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Compliance Table*/
CREATE TABLE compliance (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    regulatory_id INT REFERENCES regulatory_framework(id),
    compliance_status VARCHAR(50),
    compliance_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
